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
			className="px-8 py-6 mx-auto rounded-lg lg:w-1/2 bg-slate-400 dark:bg-navy-200"
			onSubmit={formik.handleSubmit}
		>
			<div className="mb-6">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-bold lg:text-lgtext-navy-600 dark:text-white"
				>
					Your email
				</label>
				<input
					value={formik.values.email}
					onChange={formik.handleChange}
					autoComplete="off"
					type="email"
					id="email"
					className="input placeholder:text-sm bg-transparent border border-navy-400 dark:border-green text-navy-600 dark:text-slate-200 text-sm md:text-lg rounded-lg focus:border-navy-200 focus:dark:border-green block w-full p-2.5 placeholder:text-white focus:placeholder:text-navy-400 dark:placeholder-slate-200 outline-none dark:focus:bg-greenTin focus:bg-slate-200 transition-all duration-300"
					placeholder="eg. s3877698@rmit.edu.vn"
					required
				/>
				{formik.errors.email && (
					<p className="text-red-600"> {formik.errors.email} </p>
				)}
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-bold lg:text-lgtext-navy-600 dark:text-white"
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
						className="input placeholder:text-sm bg-transparent border border-navy-400 dark:border-green text-navy-600 dark:text-slate-200 text-sm md:text-lg rounded-lg focus:border-navy-200 focus:dark:border-green block w-full p-2.5 dark:placeholder-slate-200 outline-none dark:focus:bg-greenTin focus:bg-slate-200 transition-all duration-300"
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
					<p className="text-red-600"> {formik.errors.password} </p>
				)}
			</div>

			<button
				type="submit"
				className="btn mt-2 lg:mt-10 bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-navy-600 dark:text-green dark:border-green border border-navy-600 dark:hover:bg-greenTin transition-all duration-300"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
