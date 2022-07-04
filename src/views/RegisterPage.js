import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import { motion } from "framer-motion";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import ImgFrame from "../utilities/ImgFrame";
import rice from "../assets/svg/rice.svg";

const RegisterPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
			// className="relative flex flex-col items-center justify-center h-screen px-5 py-10 page-container"
		>
			<NavBar />
			<div className="mt-4 mb-12">
				<h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-5xl lg:text-6xl">
					Create New Account
				</h3>
				<p className="text-center md:text-xl lg:text-2xl">
					Already have one?{" "}
					<Link className="cursor-pointer text-darkRed" to="/login">
						Log in
					</Link>{" "}
					here
				</p>
			</div>

			<RegisterForm />

			<ImgFrame
				src={rice}
				className="w-1/3 mx-auto mt-10 md:w-2/3 xl:w-1/4"
			/>
		</motion.div>
	);
};

export default RegisterPage;
