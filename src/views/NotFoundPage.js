import React from "react";
import { motion } from "framer-motion";
import rice from "../assets/svg/rice.svg";
import ImgFrame from "../utilities/ImgFrame";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

const NotFoundPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="text-center page-container"
			// className="flex flex-col items-center justify-center min-h-screen px-10 py-10 text-center page-container lg:my-12"
		>
			<NavBar />
			<div className="flex items-center justify-center my-4 font-bold md:my-8 text-8xl md:text-9xl md:landscape:text-[136px] lg:mt-[125px]">
				<h1 className="translate-x-4">4</h1>
				<ImgFrame
					src={rice}
					className="w-1/4 mx-8 md:w-1/3 lg:w-[15%] xl:w-[10%]"
				/>
				<h1 className="-translate-x-4">4</h1>
			</div>

			<h1 className="mt-5 text-3xl font-bold uppercase md:text-5xl">
				Not found
			</h1>
			<h3 className="w-4/5 mx-auto mt-4 mb-4 text-2xl font-semibold text-center md:mb-8 md:mt-6 md:text-3xl">
				Sorry, we were unable to find that page
			</h3>
			<p className="w-[79%] mx-auto mb-12 text-center md:text-xl landscape:md:text-2xl">
				Please try checking your dictation or try another page
			</p>

			<Link to="/" className="w-full text-center">
				<Button
					content="Back to home"
					className="w-full landscape:md:w-3/5 xl:!w-1/2 md:w-4/5 self-center text-lg md:text-xl h-[60px] md:h-[70px] font-bold"
				/>
			</Link>

			<Footer />
		</motion.div>
	);
};

export default NotFoundPage;
