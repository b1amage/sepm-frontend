import React from "react";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
	return (
		<div className="container flex flex-col items-center justify-center h-screen px-5 py-10 mx-auto">
			<h3 className="mb-20 text-6xl font-bold uppercase lg:text-8xl">
				Sign up
			</h3>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
