import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useParams } from "react-router-dom";
import otpImg from "../assets/otp-vector.png";
import axios from "axios";

const OTP_DIGIT_COUNT = 6;
const OTP_EXPIRE_TIME = 90;

const OTPPage = () => {
	const [OTP, setOTP] = useState("");
	let { hash, username } = useParams();

	const sendOTP = async () => {
		await axios
			.post("http://localhost:3000/api/auth/verify-OTP", {
				hash,
				username,
				otp: OTP,
			})
			.then(function (response) {
				console.log(response);
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
		<div className="container px-5 py-10 mx-auto">
			<div className="flex flex-col my-10 space-y-4">
				<h3 className="text-2xl font-bold lg:text-4xl md:mb-2 lg:mb-5">
					Enter your OTP code
				</h3>
				<p className="font-thin md:text-xl lg:text-2xl md:font-medium">
					We have send an 6-digit-OTP code to s3877698@rmit.edu.vn
				</p>
			</div>

			<div className="flex items-center justify-center mx-auto overflow-hidden md:w-1/2 lg:w-1/3 md:mb-10 lg:mb-16">
				<img
					src={otpImg}
					alt="otp illustration"
					className="w-full h-full lg:object-cover"
				/>
			</div>

			<OTPInput
				value={OTP}
				onChange={setOTP}
				autoFocus
				OTPLength={OTP_DIGIT_COUNT}
				otpType="number"
				disabled={false}
				secure={false}
				inputClassName="!m-0 text-center min-w-[50px] lg:min-w-[100px] lg:min-h-[100px] md:min-w-[75px] md:min-h-[75px] block text-xl font-bold min-h-[50px] dark:bg-white-400 bg-black-400 outline-none input border-none text-white-200 dark:text-black-400 p-0 md:text-2xl lg:text-4xl"
				className="!grid grid-cols-6 my-8 place-items-center"
			/>
			<ResendOTP
				maxTime={OTP_EXPIRE_TIME}
				renderTime={renderTime}
				className="relative flex flex-col"
				onResendClick={handleResendClick}
				renderButton={renderButton}
			/>

			<button
				onClick={handleVerifyClick}
				className={`${
					OTP.length === 6 ? "block" : "hidden"
				} mt-8 bg-black-400 text-white-200 hover:bg-black-400 hover:shadow-sm hover:-translate-y-2 btn dark:text-black-600 dark:bg-white-400 min-w-[200px] md:min-w-[250px] lg:min-w-[300px] px-3 py-2 mx-auto transition-all duration-300`}
			>
				Verify
			</button>
		</div>
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
		<button
			{...rest}
			className="bg-transparent dark:text-white-400 text-black-600 cursor-pointer md:text-xl lg:text-2xl border btn font-bold border-none min-w-[200px] px-3 py-2 mx-auto transition-all"
		>
			Resent
		</button>
	);
};

export default OTPPage;
