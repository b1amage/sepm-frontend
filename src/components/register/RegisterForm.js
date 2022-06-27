import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = () => {
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
				// http://localhost:3000/api/auth/register
				axios
					.post("http://localhost:3000/api/auth/register", values)
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
			};

			postData(values);
		},
	});
	return (
		<div>
			<form action="" onSubmit={formik.handleSubmit}>
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
				</div>
				<div className="mb-6 md:mb-10 lg:mb-16">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-bold lg:text-lg"
					>
						Your email
					</label>
					<input
						value={formik.values.email}
						onChange={formik.handleChange}
						autoComplete="off"
						type="email"
						id="email"
						className="block w-full p-3 text-sm transition-all duration-300 bg-transparent border rounded-lg outline-none input placeholder:text-sm border-black-400 dark:border-white-400 md:text-lg placeholder:text-white focus:bg-white-200 dark:focus:bg-black-400"
						placeholder="eg. s3877698@rmit.edu.vn"
						required
					/>
				</div>

				<button
					type="submit"
					className="flex w-full min-w-[150px] min-h-[50px] mt-8 text-lg font-medium transition-all duration-300 bg-transparent border rounded-lg btn lg:mt-8 focus:ring-4 focus:outline-none sm:w-auto hover:shadow-sm hover:-translate-y-2"
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
