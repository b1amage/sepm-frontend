import React from "react";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";

const RequireLogin = () => {
	return (
		<>
			<NavBar />
			<div className="flex flex-col items-center justify-center min-h-screen space-y-8">
				<>
					<h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">
						Please login to see the profile
					</h1>
					<Link
						to="/login"
						className="flex items-center justify-center w-full"
					>
						<Button
							content="Go to login page"
							className="w-full md:w-4/5 md:h-[60px] lg:text-xl mx-auto"
						/>
					</Link>
				</>
			</div>
			<Footer />
		</>
	);
};

export default RequireLogin;
