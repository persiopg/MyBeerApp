import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TopMenu from "../../component/TopMenu";
import userImg from "../../assets/user.png";

import data from "../../dataTest/MOCK_DATA.json";
import { Box, Typography } from "@mui/material";
import FooterContainer from "../../component/FooterContainer";
import CardLateral from "../../component/CardLateral";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Home() {
	const url = new URLSearchParams(window.location.search);
	const [user,setUser] = React.useState(url.get("user"));
	
	const userLogin = url.get("user");
	console.log(url.get("user"));
	React.useEffect(() => {
		
		if(userLogin !== null && userLogin !== undefined) { 
			console.log(userLogin);
			setUser(userLogin); 
		}
		else{ setUser(null); }
	}, [userLogin]);
	console.log(user);
	return (
		<>
			<TopMenu user={user}/>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />				
				<Box sx={{ width: "100%",pt:2 }}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexDirection="row">

						<Grid item  xs={3}>
							<Item>
								<img src={userImg}/>
							</Item>
						</Grid>
						<Grid item  xs={3}>							
							<Typography variant="h5" gutterBottom>{user}</Typography>							
						</Grid>
						<Grid  item  xs={6} sm={6} md={6} lg={6}>
							<Item>
								<CardLateral id={data[1].id} user={user} image={`https://picsum.photos/id/${data[1].imgRandom}/5000/5000`} title={data[1].produto} text={data[1].descricao} valor={data[1].valor}/>
							</Item>
						</Grid>
										
					</Grid>
				</Box>
			</Box>
			<FooterContainer position="absolute" bottom="0"/>
		</>
	);
}
export default Home;
