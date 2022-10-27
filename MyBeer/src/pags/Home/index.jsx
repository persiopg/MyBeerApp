import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "../../component/Card";
import { useParams } from "react-router-dom";
import TopMenu from "../../component/TopMenu";

import Carousel from "../../component/Carousel";
import data from "../../dataTest/MOCK_DATA.json";
import { Box } from "@mui/material";
import FooterContainer from "../../component/FooterContainer";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Home() {
	
	const [user,setUser] = React.useState(null);
	
	const {userLogin} = useParams();
	
	React.useEffect(() => {
		
		if(userLogin!==null && userLogin !== undefined) { 
			console.log(userLogin);
			setUser(userLogin); 
		}
		else{ setUser(null); }
	}, [userLogin]);

	return (
		<>
			<TopMenu user={user}/>
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
			</Box>
			<FooterContainer />
		</>
	);
}
export default Home;
