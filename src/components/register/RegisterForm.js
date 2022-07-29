import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authenticationApi from "../../api/authenticationApi";
import Modal from "./Modal";
import Loading from "../../utilities/Loading";
import Button from "../../utilities/Button";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Required")
				.matches(
					/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
					"Please enter a valid email address"
				),
			username: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			const postData = async (values) => {
				setIsLoading(true);
				console.log("loading...");
				const data = await authenticationApi.register(values, navigate);
				if (!data) return;

				setIsLoading(false);
				setIsLoaded(true);

				console.log("In register form", data);
			};

			postData(values);
		},
	});
	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Loading />
				</div>
			) : isLoaded ? (
				<Modal />
			) : (
				<form
					onSubmit={formik.handleSubmit}
					className="w-full mx-auto rounded-lg ld:py-6 lg:px-8 md:w-2/3 lg:w-1/2"
				>
					<div className="mb-6 md:mb-10 lg:mb-16">
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-bold uppercase lg:text-lg"
						>
							username
						</label>
						<input
							value={formik.values.username}
							onChange={formik.handleChange}
							autoComplete="off"
							type="username"
							id="username"
							className="block w-full p-3 text-sm transition-all duration-300 bg-transparent border border-black rounded-lg outline-none dark:border-white input placeholder:text-sm placeholder:text-black border-black-400 dark:border-white-400 md:text-lg dark:placeholder:text-white"
							placeholder="eg. baonguyen33"
							required
						/>
					</div>
					<div className="mb-6 md:mb-10 lg:mb-16">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-bold uppercase font-bol lg:text-lg"
						>
							Email
						</label>
						<input
							value={formik.values.email}
							onChange={formik.handleChange}
							autoComplete="off"
							type="email"
							id="email"
							className="block w-full p-3 text-sm transition-all duration-300 bg-transparent border border-black rounded-lg outline-none dark:border-white input placeholder:text-sm placeholder:text-black border-black-400 md:text-lg dark:placeholder:text-white"
							placeholder="eg. s3877698@rmit.edu.vn"
							required
						/>
					</div>

					<Button
						type="submit"
						content="Register"
						className="w-full mt-10"
					/>
				</form>
			)}
		</>
	);
};

export default RegisterForm;
