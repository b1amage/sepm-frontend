import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../utilities/Button";

// import authenticationApi from "../../api/authenticationApi";

const LoginForm = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			const login = async (values) => {
				await axios
					.post(
						"https://food-suggestion-rmit.herokuapp.com/api/auth/login",
						values
					)
					.then(function (response) {
						console.log(response);
						navigate(
							`/otp/${values.username}/${response.data.hash}`
						);
					})
					.catch(function (error) {
						console.log(error);
					});
				// authenticationApi.login(values, navigate);
			};

			login(values);
		},
	});

	return (
		<>
			<form
				className="w-full mx-auto mt-16 rounded-lg ld:py-6 lg:px-8 lg:w-1/2 md:w-2/3"
				onSubmit={formik.handleSubmit}
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
					{formik.errors.username && (
						<p
							className={`my-4 text-sm font-thin text-red-500 md:text-lg transition-all duration-300`}
						>
							{formik.errors.username}
						</p>
					)}
				</div>

				<Button
					type="submit"
					content="Login"
					className="w-full h-[50px] text-lg mt-10"
				/>
			</form>
		</>
	);
};

export default LoginForm;
