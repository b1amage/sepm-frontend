import React from "react";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";

const AlreadyLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-8">
			<>
				<h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">
					You have already login
				</h1>
				<Link
					to="/"
					className="flex items-center justify-center w-full"
				>
					<Button
						content="Go to home"
						className="w-full md:w-4/5 md:h-[60px] lg:text-xl mx-auto"
					/>
				</Link>
			</>
		</div>
	);
};

export default AlreadyLogin;
