import React from "react";
import LoginForm from "../components/login/LoginForm";
import { motion } from "framer-motion";
import Title from "../utilities/Title";
import NavBar from "../components/header/NavBar";
import { Link } from "react-router-dom";
import ImgFrame from "../utilities/ImgFrame";
import rice from "../assets/svg/rice.svg";
import Footer from "../components/footer/Footer";

import authenticationApi from "../api/authenticationApi";

const LoginPage = () => {
	const isLogin = authenticationApi.isLogin();

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
		>
			<NavBar />

			<>
				{isLogin ? (
					<div>Navigate</div>
				) : (
					<>
						<Title className="mt-8">Login</Title>
						<p className="mt-8 text-center lg:mt-12 md:text-xl lg:text-2xl">
							Still new here?{" "}
							<Link
								className="cursor-pointer text-darkRed"
								to="/login"
							>
								Create new account
							</Link>{" "}
						</p>

						<LoginForm />
						<ImgFrame
							src={rice}
							className="w-1/2 mx-auto mt-10 lg:w-1/4"
						/>

						<Footer />
					</>
				)}
			</>
		</motion.div>
	);
};

export default LoginPage;
