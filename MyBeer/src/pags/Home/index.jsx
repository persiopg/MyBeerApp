import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "../../component/Card";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useParams } from "react-router-dom";
import styles from "./Home.module.css";

import Carousel from "../../component/Carousel";
import data from "../../dataTest/MOCK_DATA.json";

const drawerWidth = 240;
const navItems = [ "Sobre", "Contatos"];
const settings = [{nome: "Perfil", caminho : "/perfil"}, {nome:"Favoritos", caminho: "/favoritos"}, {nome:"Sair",caminho:"/"}];

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [user,setUser] = React.useState(null);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const {userLogin} = useParams();
	
	React.useEffect(() => {
		
		if(userLogin!==null && userLogin !== undefined) { 
			console.log(userLogin);
			setUser(userLogin); }
	}, [userLogin]);
	
	const drawer = (
		<Box onClick={handleDrawerToggle}  sx={{ textAlign: "center",bgcolor:"#FFC800",height:"100%"}}>
			<Typography variant="h6" sx={{ my: 2 }}>
        MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<Link to={`/${item}`} className={styles.linkDrawer}>
								<ListItemText primary={item} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav" sx={{bgcolor:"#ffc800"}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href={`/user/${user}`}
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							alignItems:"end",
							justifyContent: "center"
						}}
					>
            LOGO
					</Typography>
					
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
								<Link to={`/${item}`} className={styles.link}>
									{item}
								</Link>	
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt={user ===null? "Logar" : user} src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Link to={setting.caminho} className={styles.linkDrawer}>
										<Typography textAlign="center">{setting.nome}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
				<Carousel/>
				<Box sx={{ width: "100%",pt:2 }}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

						{data.map((item) => { return (
							<Grid key={item.id} item  xs={12} sm={6} md={4} lg={3}>
								<Item>
									<Card id={item.id} user={user} image={`https://picsum.photos/id/${item.imgRandom}/5000/5000`} title={item.produto} text={item.descricao} valor={item.valor}/>
								</Item>
							</Grid>
						);
						})}						
					</Grid>
				</Box>
				<Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
         
				</Typography>
			</Box>
		</Box>
	);
}

DrawerAppBar.propTypes = {
	/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
	window: PropTypes.func,
};

export default DrawerAppBar;
