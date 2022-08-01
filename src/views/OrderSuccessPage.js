import React from "react";
import NavBar from "../components/header/NavBar";
import cook from "../assets/svg/cook.svg";
import Button from "../utilities/Button";
import Footer from "../components/footer/Footer";

const OrderSuccessPage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div className="flex flex-col items-center justify-center mt-20 md:mt-[150px] text-center">
				<h1 className="text-2xl font-bold uppercase md:text-4xl lg:text-6xl">
					Order successfully
				</h1>

				<div className="mx-auto my-16">
					<img
						src={cook}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>

				<div className="flex flex-col my-10 space-y-2">
					<h3 className="text-xl font-semibold">
						Sorento is preparing your order
					</h3>
					<p className="text-lg">Estimate complete time 12:20</p>
				</div>

				<Button content="Ok" className="w-full md:w-1/2 md:mx-auto" />
			</div>

			<Footer />
		</div>
	);
};

export default OrderSuccessPage;
