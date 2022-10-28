import { Box,     Container,      Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./FooterContainer.module.css";
// import Logo from "../../assets/Logo_Prancheta.png";
import LogoSoNome from "../../assets/Logo_PranchetaSoNome.png";

function FooterContainer(props){
	const bottom = props.bottom === undefined? -10 : props.bottom;
	return (
		<Paper sx={{
			width: "100%",
			bottom: bottom,
			m:0 ,
			bgcolor:"#ffc800",
			minHeight:"100px",
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			position: props.position
		}} component="footer" square variant="outlined">
			<Container maxWidth="lg">
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						my:0

					}}
				>
					<div>
						<img  src={LogoSoNome} className={styles.logo} alt="Logo" />
					</div>
				</Box>
    
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						mb: 2,
					}}
				>
					<Typography variant="caption" color="initial">
                Copyright ©2022. Limited || Desenvolvido por Persio
					</Typography>
				</Box>
			</Container>
		</Paper>
	);
}
export default FooterContainer;