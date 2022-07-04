import React from "react";
import LoginForm from "../components/authentication/LoginForm";
import { motion } from "framer-motion";

const LoginPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col items-center justify-center h-screen px-5 py-10 page-container"
		>
			<h3 className="mb-20 text-6xl font-bold uppercase lg:text-8xl">
				Login
			</h3>

			<LoginForm />
		</motion.div>
	);
};

export default LoginPage;
