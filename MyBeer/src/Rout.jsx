import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pags/Home";
import Login from "./pags/Login";
import Product from "./pags/Product";

function Rout() {
	return (
		<Routes>			
			<Route path="/" element={<Home />} />
			<Route path="/user/:userLogin" element={<Home />} />
			<Route path="/user/:userLogin/products/:id" element={<Product />} />
			<Route path="/acessar" element={<Login />} />
		</Routes>
	);
}
export default Rout;