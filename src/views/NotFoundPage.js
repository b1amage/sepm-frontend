import React from "react";
import { motion } from "framer-motion";
import rice from "../assets/svg/rice.svg";
import ImgFrame from "../utilities/ImgFrame";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="container flex flex-col items-center justify-center min-h-screen px-10 py-10 mx-auto"
		>
			<div className="flex items-center justify-center my-4 font-bold text-8xl">
				<h1>4</h1>
				<ImgFrame src={rice} className="w-1/4 mx-8" />
				<h1>4</h1>
			</div>

			<h1 className="text-3xl font-bold uppercase">Not found</h1>
			<h3 className="mt-4 mb-8 text-2xl font-semibold text-center">
				Sorry, we were unable to find that page
			</h3>
			<p className="w-4/5 mx-auto mb-20 text-center">
				Please try check your dictation or try another page
			</p>

			<Link to="/" className="w-full">
				<Button
					content="Back to home"
					className="w-full text-lg h-[60px] font-semibold"
				/>
			</Link>
		</motion.div>
	);
};

export default NotFoundPage;
