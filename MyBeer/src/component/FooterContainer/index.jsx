import { Box,     Container,      Paper, Typography } from "@mui/material";
import React from "react";

function FooterContainer(){
	return (
		<Paper sx={{
			width: "100%",
			bottom: -10,
			m:0 ,
			bgcolor:"#ffc800",
			minHeight:"180px",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
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
						<img  src="" width={75} height={30} alt="Logo" />
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