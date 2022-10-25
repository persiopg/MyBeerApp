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
import { Avatar, Grid, Paper, styled } from "@mui/material";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link,useParams } from "react-router-dom";
import data from "../../dataTest/MOCK_DATA.json";
import MediaCard from "../../component/Card";
import Map from "ol/Map";
import View from "ol/View";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj.js";
import "./style.css";
const drawerWidth = 240;

const navItems = [ "Sobre", "Contatos"];
const settings = [{nome: "Perfil", caminho : "/perfil"}, {nome:"Favoritos", caminho: "/favoritos"}, {nome:"Sair",caminho:"/"}];

const raster = new TileLayer({
	source: new OSM(),
});

const source = new VectorSource({ wrapX: false });

const vector = new VectorLayer({
	source: source,
});
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
	let [firstTime] = React.useState(true);
	let product = {};
	const {id, userLogin} = useParams();
	data.map((item) => { 
		if(item.id === +id) product = item;  
		return product; });
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const lat = product.lat;
	const long = product.long;

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
							<Link to={`/${item}`} >
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
	React.useEffect(() => {
		if (firstTime) {
			firstTime = false;
			new Map({
				layers: [raster, vector],
				target: "map",
				view: new View({
					center: fromLonLat([long, lat]), //[ -47.79716246729982,-21.118398387653787] ribeirao preto lat long
					zoom: 16,
				}),                
			});
		}
	}, [firstTime]);

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
						href={`/user/${userLogin}`}
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
								<Link to={`/${item}`} >
									{item}
								</Link>	
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt={userLogin} src="/static/images/avatar/2.jpg" />
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
								<MenuItem key={setting.nome} onClick={handleCloseUserMenu}>
									<Link to={setting.caminho}>
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
			<Box component="main" sx={{ p: 3,width:"100%" }}>
				<Toolbar />
				
				{/* <MediaCard id={product.id} image={`https://picsum.photos/id/${product.imgRandom}/5000/5000`} title={product.produto} text={product.descricao} valor={product.valor}/> */}
					
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid item xs={12} sm={12} md={6}>
						<Item>
							<div id="map" className="map"></div>
						</Item>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Item>
							<MediaCard id={product.id} image={`https://picsum.photos/id/${product.imgRandom}/5000/5000`} title={product.produto} text={product.descricao} valor={product.valor}/>
						</Item>
					</Grid>
				</Grid>
			
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
