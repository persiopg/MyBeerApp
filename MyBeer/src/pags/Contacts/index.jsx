import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TopMenu from "../../component/TopMenu";

import { Box} from "@mui/material";
import FooterContainer from "../../component/FooterContainer";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";

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
	React.useEffect(() => {
		
		if(userLogin !== null && userLogin !== undefined)  
			setUser(userLogin); 
		
		else setUser(null); 
	}, [userLogin]);
	return (
		<>
			<TopMenu user={user}/>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />				
				<Box sx={{ width: "100%",pt:2 }}>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexDirection="column" alignItems="start"sx={{
						width:"100vw",
					}}>

						<Grid item  xs={"auto"}>
							<Item>
								contato
							</Item>
						</Grid>
						<Grid item  xs={"auto"}>
							<Item>
								enderecco: rua seila 69
							</Item>
						</Grid>
						<Grid item  xs={"auto"}>
							<Item>
								telefone: (69) 96969-6969
							</Item>
						</Grid>
						<Grid item  xs={"auto"}>
							<Item>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={"auto"}>
										<Item >
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
			<FooterContainer position="absolute" bottom="0"/>
		</>
	);
}
export default Home;
