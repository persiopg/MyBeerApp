import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";

//import css modules
/* import "./style.css"; */
import styles from "./TopMenu.module.css";
const navItems = [ "Sobre", "Contatos"];
const settings = [{nome: "Perfil", caminho : "/perfil"}, {nome:"Favoritos", caminho: "/favoritos"}, {nome:"Sair",caminho:"/sair"}];
const settingsLogoff = [{nome: "Acessar", caminho : "/acessar"}];

//react rout dom
import { Link } from "react-router-dom";
import { Avatar, Button, Divider, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useEffect } from "react";
import Logo from "../../assets/Logo_Prancheta.png";
import LogoSoNome from "../../assets/Logo_PranchetaSoNome.png";
import { useState } from "react";

const drawerWidth = 250;

function DrawerAppBar(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { window } = props;
	const [user,setUser] = useState("");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle}  sx={{ textAlign: "center",bgcolor:"#FFC800",height:"100%"}}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<img src={LogoSoNome} className={styles.logo}/>
			</Typography>
			<Divider  />
			
			<List>
				{navItems.map((item) => (
					<ListItem key={`/${item}/?user=${user}`} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }} >
							<Link to={`/${item}/?user=${user}`} className={styles.linkDrawer}>
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
	useEffect(() => {
		if(props.user === "null")
			setUser(null);
		else
			setUser(props.user);
	}, [props.user]);

	return (
		<>
			<AppBar component="nav" sx={{bgcolor:"#ffc800"}}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href={`/?user=${props.user}`}
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
						<img src={Logo} className={styles.logo}/>
					</Typography>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href={`/?user=${props.user}`}
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
						<img src={LogoSoNome} className={styles.logo}/>
					</Typography>
					
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "#fff" }}>
								<Link to={`/${item}/?user=${user}`} className={styles.link}>
									{item}
								</Link>	
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt={user === null? "Logar" : user} src="/static/images/avatar/2.jpg" />
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
							{user !== undefined && user !== null && user === "null" ? (settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Link to={`${setting.caminho}/?user=${user}`} className={styles.linkDrawer}>
										<Typography textAlign="center">{setting.nome}</Typography>
									</Link>
								</MenuItem>
							)))
								:
								(settingsLogoff.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Link to={setting.caminho} className={styles.linkDrawer}>
											<Typography textAlign="center">{setting.nome}</Typography>
										</Link>
									</MenuItem>
								)))}
							
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
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
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
