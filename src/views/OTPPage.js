import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import noodle from "../assets/svg/noodle.svg";
import ImgFrame from "../utilities/ImgFrame";
import NavBar from "../components/header/NavBar";
import Button from "../utilities/Button";
const OTP_DIGIT_COUNT = 6;
const OTP_EXPIRE_TIME = 90;

const OTPPage = () => {
	const [OTP, setOTP] = useState("");
	let { hash, username } = useParams();

	const sendOTP = async () => {
		await axios
			.post(
				"/api/auth/verify-OTP",
				{
					hash,
					username,
					otp: OTP,
				},
				{ withCredentials: true }
			)
			.then(function (response) {
				console.log(response);
				localStorage.setItem(
					"user",
					JSON.stringify(response.data.user)
				);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleResendClick = () => {
		sendOTP();
	};

	const handleVerifyClick = () => {
		sendOTP();
	};

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
		>
			<NavBar />
			<div className="flex flex-col space-y-4 lg:text-center">
				<h3 className="text-2xl font-bold lg:text-5xl md:mb-2 lg:mb-5">
					Enter your OTP code
				</h3>
				<p className="font-thin md:text-xl lg:text-2xl md:font-medium">
					We have send an 6-digit-OTP code to s3877698@rmit.edu.vn
				</p>
			</div>

			<ImgFrame
				src={noodle}
				alt="noodle svg"
				className="mx-auto md:w-1/2 lg:w-1/3"
			/>

			<OTPInput
				value={OTP}
				onChange={setOTP}
				autoFocus
				OTPLength={OTP_DIGIT_COUNT}
				otpType="number"
				disabled={false}
				secure={false}
				inputClassName="!m-0 text-center min-w-[50px] lg:min-w-[100px] lg:min-h-[100px] md:min-w-[75px] md:min-h-[75px] block text-xl font-bold min-h-[50px] bg-darkRed text-white outline-none input border-none text-white-200 dark:text-black-400 p-0 md:text-2xl lg:text-4xl"
				className="!grid grid-cols-6 my-8 place-items-center"
			/>
			<ResendOTP
				maxTime={OTP_EXPIRE_TIME}
				renderTime={renderTime}
				className="relative flex flex-col"
				onResendClick={handleResendClick}
				renderButton={renderButton}
			/>

			<Button
				content="Verify"
				onClick={handleVerifyClick}
				className={`${
					OTP.length === 6 ? "block" : "hidden"
				} mt-4 md:text-xl btn w-full transition-all duration-300 md:h-[60px]`}
			/>
		</motion.div>
	);
};

const renderTime = (remainingtime) => {
	return (
		<span className="block py-4 font-thin text-center md:text-xl">
			Verifying code will expired in {remainingtime} seconds.
		</span>
	);
};

const renderButton = (props) => {
	const { remainingTime, ...rest } = props;
	return (
		<Button
			content="Resend"
			{...rest}
			className="bg-transparent hover:bg-transparent text-black-600 cursor-pointer md:text-xl lg:text-2xl border btn font-bold border-none min-w-[200px] px-3 py-2 mx-auto transition-all"
		>
			Resent
		</Button>
	);
};

export default OTPPage;
