import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import OTPPage from "../views/OTPPage";
import LoginPage from "../views/LoginPage";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/otp" element={<OTPPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
