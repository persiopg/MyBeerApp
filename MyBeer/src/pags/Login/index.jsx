import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Acessar(){
	const [user,setUser] = useState("");
	return (
		<>
			<h1>logarrrrr</h1>
			<input type="text" placeholder="user" value={user} onChange={(e) => (setUser(e.target.value))}/>
			<Link to={`/user/${user}`}><Button size="small" sx={{width:"100%"}}>Veja mais</Button></Link>
		</>
	);
}
export default Acessar;