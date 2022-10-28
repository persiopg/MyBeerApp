import React, { useEffect }from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import data from "../../dataTest/MOCK_DATA.json";
import Map from "ol/Map";
import View from "ol/View";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj.js";
import "./style.css";
import TopMenu from "../../component/TopMenu";
import Overlay from "ol/Overlay";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import CardLateral from "../../component/CardLateral";
import FooterContainer from "../../component/FooterContainer";

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

function Product() {
	const url = new URLSearchParams(window.location.search);
	const [user,setUser] = React.useState(null);
	
	let [firstTime] = React.useState(true);
	let product = {};
	const userLogin = url.get("user");
	const produto = url.get("product");
	console.log(url.get("user"));
	data.map((item) => { 
		if(item.id === +produto) product = item;  
		return product; });

	const lat = product.lat;
	const long = product.long;

	useEffect(() => {
		
		if (firstTime) {
			firstTime = false;
			new Map({
				layers: [raster, vector],
				target: "map",
				view: new View({
					center: fromLonLat([long, lat]), //[ -47.79716246729982,-21.118398387653787] ribeirao preto lat long
					zoom: 16,
				}),     
				overlay : new Overlay({
					position: fromLonLat([long, lat]),
					positioning: "top",
					element: document.getElementById("marker"),
					stopEvent: false
				}),
			});
		}
		if(userLogin!==null && userLogin !== undefined) { 
			console.log(userLogin);
			setUser(userLogin); }

	}, [firstTime,userLogin]);

	return (
		<>
			<TopMenu user={user}/>
			<Box sx={{ display: "flex" }}>				
				<Box component="main" sx={{ p: 3,width:"100%" }}>
					<Toolbar />
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
								<CardLateral id={product.id} image={`https://picsum.photos/id/${product.imgRandom}/5000/5000`} title={product.produto} text={product.descricao} valor={product.valor}/>
							</Item>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Item sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "start",
								flexDirection:"column",
							}}>
								<Typography variant="h3">{product.nomeEmpresa}</Typography>
								<Typography variant="overline">{product.descricao} </Typography>
								<Typography variant="overline">tel:{product.tel}</Typography>
								<Typography variant="overline">endereço:{product.endereco}</Typography>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={"auto"}>
										<Item>
											<Link>
												<WhatsAppIcon/>
											</Link>
										</Item>
									</Grid>
									<Grid item  xs={"auto"}>
										<Item>
											<Link>
												<FacebookIcon/>
											</Link>
										</Item>
									</Grid>
									<Grid item  xs={"auto"}>
										<Item>
											<Link>
												<InstagramIcon/>
											</Link>
										</Item>
									</Grid>
									<Grid item  xs={"auto"}	>
										<Item>
											<Link>
												<TelegramIcon/>
											</Link>
										</Item>
									</Grid>
								</Grid>
							</Item>
						</Grid>
					</Grid>			
				</Box>			
			</Box>
			<FooterContainer />
		</>
	);
}

export default Product;
