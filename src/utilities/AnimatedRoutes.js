import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import OTPPage from "../views/OTPPage";
import LoginPage from "../views/LoginPage";
import AboutPage from "../views/AboutPage";
import RegisterPage from "../views/RegisterPage";
import HomePage from "../views/HomePage";
import VerifyEmailPage from "../views/VerifyEmailPage";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/otp/:username/:hash" element={<OTPPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/verify-email" element={<VerifyEmailPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
