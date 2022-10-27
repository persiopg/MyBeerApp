import { Box,  Container, Grid, Paper, styled } from "@mui/material";
import React, { useState } from "react";
import styles from "./Login.module.css";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	width: 100,
	transform: "translate(-50%, -50%)",
	bgcolor:"#ffc800",
};
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	
}));
function Acessar(){
	const [showPassword, setShowPassword] = useState(true);
	const [user, setUser] = useState("");
	const [senha, setSenha] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	function handleClick() {
		setShowPassword(!showPassword);
		if (showPassword) document.getElementById("password").type = "text";
		else document.getElementById("password").type = "password";
	}

	function confirm(e) {
		e.preventDefault();

		// verificação para acesso
		if (user === "persio" && senha === "senha")
		{ return (window.location.href = `/user/${user}`); }
		else {
			setErrorMsg( "Usuário ou senha incorretos");
			setSenha("");
			setUser("");
		}	
	}
	return (
		<Paper sx={{
			width: "100%",
			bgcolor:"#ffc800",
			height: "100vh",
			display:"flex",
			justifyContent:"center",
			alignItems:"center"
		}}>
			<Container maxWidth="lg">
				<Box
					sx={{
						...style,
						width: { xs: "90%", sm: "50%", md: "50%" },
						borderRadius: "8px",
						p: 0,
						m: 0,
					}}
				>
					<Grid
						container
						rowSpacing={0}
						columnSpacing={{ xs: 0, sm: 0, md: 0 }}
						
					>
						<Grid item xs={12} sm={12} md={12}>
							<Item sx={{
								height:"300px",
								display:"flex",
								justifyContent:"center",
								alignItems:"center",
							}}>
								<Grid
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
									flexDirection="column"
								>
									<Grid item xs={"auto"}>
										<h2 className={styles.title}>Acesse sua conta</h2>
									</Grid>
									<Grid item xs={"auto"}>
										<p className={styles.mensagemError}>{errorMsg}</p>
									</Grid>
									<Grid item xs={"auto"}>
										
										<Item
											className={styles.formInput}
											sx={{ border: "none", boxShadow: "none" }}
										>
											<PersonIcon className={styles.icon} />
											<input className={styles.input} type="text" placeholder="user" value={user} onChange={(e) => (setUser(e.target.value))}/>
										</Item>
									</Grid>
									<Grid item xs={"auto"}>
										
										<Item
											className={styles.formInput}
											sx={{ border: "none", boxShadow: "none" }}
										>
											<HttpsIcon className={styles.icon} />
											
											<input id="password" className={styles.input} type="password" placeholder="senha" value={senha} onChange={(e) => (setSenha(e.target.value))}/>
											<div onClick={handleClick}>
												{showPassword ? (
													<VisibilityIcon
														className={styles.iconPassword}
													/>
												) : (
													<VisibilityOffIcon
														className={styles.iconPassword}
													/>
												)}
											</div>
										</Item>
									</Grid>									
									<Grid item xs={"auto"}>
										<button
											className={styles.buttonLogin}
											type="submit"
											onClick={confirm}
										>
															Logar
										</button>											
									</Grid>									
								</Grid>							
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Paper>
		
	);
}
export default Acessar;