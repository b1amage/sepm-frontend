import React from "react";
import NavBar from "../components/header/NavBar";
import cross from "../assets/svg/cross.svg";
import Button from "../utilities/Button";
import { useParams } from "react-router-dom";

const RegisterFailPage = () => {
	const { msg } = useParams();
	return (
		<div className="page-container">
			<div className="flex flex-col">
				<NavBar />

				<h3 className="my-10 text-4xl font-bold text-center uppercase md:my-16 md:text-6xl">
					Failed
				</h3>

				<div className="w-[100px] h-[100px] md:w-[175px] md:h-[175px] overflow-hidden mx-auto my-12">
					<img src={cross} alt="" />
				</div>

				<div className="flex flex-col flex-1 my-8 space-y-4 text-center md:my-16 md:space-y-6 md:w-4/5 md:mx-auto">
					<h3 className="text-2xl font-semibold md:text-5xl">
						Failed to verify
					</h3>
					<p className="text-lg md:text-2xl">{msg}</p>
				</div>

				<Button
					content="Register Again"
					className="w-full mt-20 md:w-3/4 md:mx-auto md:!h-[80px] md:text-2xl lg:w-3/5 lg:mt-[100px]"
				/>
			</div>
		</div>
	);
};

export default RegisterFailPage;
