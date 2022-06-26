import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const LoginForm = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	const handleShowPasswordClick = () => {
		setIsShowPassword(!isShowPassword);
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Required")
				.matches(
					/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
					"Please enter a valid email address"
				),
			password: Yup.string()
				.required("Required")
				.matches(
					/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
					"Password must be 7-19 characters and contain at least one letter, one number and a special character"
				),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form
			className="w-full mx-auto rounded-lg ld:py-6 lg:px-8 lg:w-1/2 md:w-2/3"
			onSubmit={formik.handleSubmit}
		>
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
				{formik.errors.email && (
					<p
						className={`my-4 text-sm font-thin text-red-500 md:text-lg transition-all duration-300`}
					>
						{formik.errors.email}
					</p>
				)}
			</div>
			<div className="mb-6 md:mb-10 lg:mb-16">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-bold lg:text-lg"
				>
					Your password
				</label>
				<div className="relative">
					<input
						value={formik.values.password}
						onChange={formik.handleChange}
						autoComplete="off"
						type={`${isShowPassword ? "text" : "password"}`}
						id="password"
						className="block w-full p-3 text-sm transition-all duration-300 bg-transparent border rounded-lg outline-none input placeholder:text-sm border-black-400 dark:border-white-400 md:text-lg placeholder:text-white focus:bg-white-200 dark:focus:bg-black-400"
						required
					/>

					<div
						onClick={handleShowPasswordClick}
						className="absolute -translate-y-1/2 cursor-pointer hover:text-green right-4 top-1/2"
					>
						{isShowPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
					</div>
				</div>

				{formik.errors.password && (
					<p
						className={`my-4 text-sm font-thin text-red-500 md:text-lg transition-all duration-300`}
					>
						{formik.errors.password}
					</p>
				)}
			</div>

			<h3 className="underline cursor-pointer">Forgot your password?</h3>

			<button
				type="submit"
				className="flex w-full min-w-[150px] min-h-[50px] mt-8 text-lg font-medium transition-all duration-300 bg-transparent border rounded-lg btn lg:mt-8 focus:ring-4 focus:outline-none sm:w-auto hover:shadow-sm hover:-translate-y-2"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
