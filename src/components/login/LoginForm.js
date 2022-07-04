import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
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
				className="w-full mx-auto rounded-lg ld:py-6 lg:px-8 lg:w-1/2 md:w-2/3"
				onSubmit={formik.handleSubmit}
			>
				<div className="mb-6 md:mb-10 lg:mb-16">
					<label
						htmlFor="username"
						className="block mb-2 text-sm font-bold lg:text-lg"
					>
						Your username
					</label>
					<input
						value={formik.values.username}
						onChange={formik.handleChange}
						autoComplete="off"
						type="username"
						id="username"
						className="block w-full p-3 text-sm transition-all duration-300 bg-transparent border rounded-lg outline-none input placeholder:text-sm border-black-400 dark:border-white-400 md:text-lg placeholder:text-white focus:bg-white-200 dark:focus:bg-black-400"
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

				<div className="flex flex-wrap justify-between">
					<Link to="/register">
						<h3 className="underline cursor-pointer">Signup</h3>
					</Link>
				</div>

				<button
					type="submit"
					className="flex w-full min-w-[150px] min-h-[50px] mt-8 text-lg font-medium transition-all duration-300 bg-transparent border rounded-lg btn lg:mt-8 focus:ring-4 focus:outline-none sm:w-auto hover:shadow-sm hover:-translate-y-2"
				>
					Login
				</button>
			</form>
		</>
	);
};

export default LoginForm;
