import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { BsTypeH1 } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { StatusCodes } from "http-status-codes";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const VerifyEmailPage = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const query = useQuery();

	const verifyToken = async () => {
		// setLoading(true);
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/verify-email",
				{
					verificationToken: query.get("token"),
				}
			);

			console.log(response);
			// setMsg(response.data.msg);
		} catch (error) {
			console.log(error.response);
			// setError(true);
		}
		// setLoading(false);
	};

	useEffect(() => {
		verifyToken();
		console.log("useEffect");
	}, []);

	return (
		<div className="container flex items-center justify-center h-screen px-10 py-5 mx-auto">
			{error ? (
				<h1>Error</h1>
			) : (
				<div className="max-w-[400px] shadow-lg rounded-lg px-5 py-4 flex flex-col items-center space-y-8 h-[350px] bg-white-800 dark:bg-black-400">
					<AiFillCheckCircle className="text-6xl text-green-500" />

					<h3 className="text-4xl font-bold text-center">Verified</h3>

					<p className="flex items-center flex-1 text-lg font-thin text-center text-gray-500">
						Yahoo, your email has been successfully verified. You
						can now use your account.
					</p>

					<button className="justify-end bg-green-500 border-none outline-none hover:bg-green-700 text-white-200 btn">
						Go to home page
					</button>
				</div>
			)}
		</div>
	);
};

export default VerifyEmailPage;
