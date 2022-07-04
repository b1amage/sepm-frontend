import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import { motion } from "framer-motion";

const RegisterPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="relative flex flex-col items-center justify-center h-screen px-5 py-10 page-container"
		>
			<h3 className="mb-20 text-6xl font-bold uppercase lg:text-8xl">
				Sign up
			</h3>
			<RegisterForm />
		</motion.div>
	);
};

export default RegisterPage;
