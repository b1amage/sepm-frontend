import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import authenticationApi from "../api/authenticationApi";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const VerifyEmailPage = () => {
	const [error, setError] = useState(false);

	const query = useQuery();

	useEffect(() => {
		const verifyToken = async () => {
			const loginInfo = await authenticationApi.verifyToken(
				query,
				setError
			);

			console.log(loginInfo);
		};

		verifyToken();
	}, [query]);

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="flex items-center justify-center h-screen px-10 py-5 page-container"
		>
			{error ? (
				<div className="flex flex-col p-8 space-y-8">
					<div className="flex flex-col flex-1 gap-y-4">
						<h1 className="text-3xl font-bold text-center lg:text-5xl">
							Oops, something went wrong
						</h1>

						<p className="mt-8 text-lg text-center">
							This happens because the verification link is
							expired. Please try again
						</p>
					</div>

					<Link to="/register" className="mx-auto mt-6 md:w-1/2 btn">
						Back to register page
					</Link>
				</div>
			) : (
				<div className="max-w-[400px] shadow-lg rounded-lg px-5 py-4 flex flex-col items-center space-y-8 h-[350px] bg-white-800 dark:bg-black-400">
					<AiFillCheckCircle className="text-6xl text-green-500" />

					<h3 className="text-4xl font-bold text-center">Verified</h3>

					<p className="flex items-center flex-1 text-lg font-thin text-center text-gray-500">
						Yahoo, your email has been successfully verified. You
						can now use your account.
					</p>

					<Link
						to="/"
						onClick={() => setError(false)}
						className="justify-end bg-green-500 border-none outline-none hover:bg-green-700 text-white-200 btn"
					>
						Go to home page
					</Link>
				</div>
			)}
		</motion.div>
	);
};

export default VerifyEmailPage;
