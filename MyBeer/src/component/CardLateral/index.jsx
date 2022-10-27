import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Paper, styled } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,

}));

export default function MediaCard(props) {

	return (
		<>
			<Grid 
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				flexDirection={{xs: "column", sm:"row"}}
			>
				<Grid item s={12} sm={12} md={6}> 
					<Item >
						<CardMedia
							component="img" 
							height="300"
							image={props.image}
							alt={props.title}
						/>
					</Item>
				</Grid>
				<Grid item s={12} sm={12} md={6}>
					<Grid 
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						flexDirection="column"
					> 
						<Grid item s={12} sm={12} md={12}>
							<Item sx={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								boxShadow:"none",
								border:"none"
							}}>
								<Typography gutterBottom variant="h5" component="div">
									{props.title}
								</Typography>
							</Item>
						</Grid>
						<Grid item s={12} sm={12} md={12}>
							<Item sx={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								boxShadow:"none",
								border:"none"
							}}>
								<Typography variant="body2" color="text.secondary">
									produto descricao
								</Typography>
							</Item>
						</Grid>
						<Grid item s={12} sm={12} md={12}>
							<Item sx={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								boxShadow:"none",
								border:"none"
							}}>
								<Typography gutterBottom variant="h6" component="div" sx={{display:"flex",width:"100%",justifyContent:"end"}}>
									{props.valor}
								</Typography>
							</Item>
						</Grid>
					</Grid>
				</Grid>
				
			</Grid>
		</>
	);
}
