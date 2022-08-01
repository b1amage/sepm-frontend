import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import { motion } from "framer-motion";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import ImgFrame from "../utilities/ImgFrame";
import rice from "../assets/svg/rice.svg";
import Title from "../utilities/Title";
import Footer from "../components/footer/Footer";

const RegisterPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
		>
			<NavBar />

			<div className="mt-4 mb-12">
				<Title>Create New Account</Title>
				<p className="text-center md:text-xl lg:text-2xl">
					Already have one?{" "}
					<Link className="cursor-pointer text-darkRed" to="/login">
						Log in
					</Link>{" "}
					here
				</p>
			</div>

			<RegisterForm />

			<ImgFrame src={rice} className="w-1/2 mx-auto mt-10 lg:w-1/4" />
			<Footer />
		</motion.div>
	);
};

export default RegisterPage;
