import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
	const [img, setImg] = React.useState("");

	async function test(){
		let testt = await props.image;
		setImg(testt);
	}
	React.useEffect(()=> { test(); },[img]);

	return (
		<Card>
			<CardMedia
				component="img" 
				height="300"
				image={img}
				alt={props.title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.text}
				</Typography>
			</CardContent>
			<CardActions>	
				{props.user === null ? (
					<>
						<Link to={"/acessar"}><Button size="small" sx={{width:"100%"}}>Acessar</Button></Link>
						<Typography gutterBottom variant="h6" component="div" sx={{display:"flex",width:"70%",justifyContent:"end"}}>
							{props.valor}
						</Typography>
					</>
				) : (		
					<>
						<Link to={`/products/?user=${props.user}&product=${props.id}`}><Button size="small" sx={{width:"100%"}}>Veja mais</Button></Link>
						<Typography gutterBottom variant="h6" component="div" sx={{display:"flex",width:"70%",justifyContent:"end"}}>
							{props.valor}
						</Typography>
					</>
				)}
			</CardActions>
		</Card>
	);
}
