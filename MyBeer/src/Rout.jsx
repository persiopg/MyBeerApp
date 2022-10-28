import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pags/Home";
import Login from "./pags/Login";
import Logout from "./pags/Logut";
import Product from "./pags/Product";
import Profile from "./pags/Profile";
import Favorites from "./pags/Favorites";
import About from "./pags/About";
import Contacts from "./pags/Contacts";

function Rout() {
	return (
		<Routes>			
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Product />} />
			<Route path="/acessar" element={<Login />} />
			<Route path="/sair" element={<Logout/>} />
			<Route path="/perfil" element={<Profile />} />
			<Route path="/favoritos" element={<Favorites />} />
			<Route path="/Sobre" element={<About />} />
			<Route path="/Contatos" element={<Contacts />} />
		</Routes>
	);
}
export default Rout;