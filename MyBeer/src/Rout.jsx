import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pags/Home";

function Rout() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
export default Rout;