import React from "react";
import LoginForm from "../components/authentication/LoginForm";

const LoginPage = () => {
	return (
		<div className="container flex flex-col items-center justify-center h-screen px-5 py-10 mx-auto">
			<h3 className="mb-20 text-6xl font-bold uppercase lg:text-8xl">
				Login
			</h3>

			<LoginForm />
		</div>
	);
};

export default LoginPage;
