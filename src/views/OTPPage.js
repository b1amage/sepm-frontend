import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import otpImg from "../assets/otp-vector.png";

const OTP_DIGIT_COUNT = 6;

const OTPPage = () => {
	const [OTP, setOTP] = useState("");

	const handleResendClick = () => {
		console.log("Resend button click");
	};

	const handleVerifyClick = () => {
		console.log("Verify click");
	};

	const handleTimeComplete = () => {
		console.log("Clear interval");
	};

	return (
		<div className="container px-5 py-10 mx-auto">
			<div className="flex flex-col my-10 space-y-4">
				<h3 className="text-2xl font-semibold lg:text-4xl lg:mb-5 dark:text-slate-200">
					Enter your verification code
				</h3>
				<p className="font-thin lg:text-2xl lg:font-medium">
					We have send a verifiycation code to s3877698@rmit.edu.vn
				</p>
			</div>

			<div className="flex items-center justify-center mx-auto overflow-hidden h-[300px] lg:h-[400px] lg:w-[450px]">
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
				inputClassName="!m-0 text-center min-w-[50px] lg:min-w-[100px] lg:min-h-[100px] block text-center text-xl font-bold min-h-[50px] dark:bg-navy-200 bg-slate-400 outline-none input border-none text-navy-600 dark:text-white p-0 lg:text-4xl"
				className="!grid grid-cols-6 my-8 place-items-center"
			/>
			<ResendOTP
				renderTime={renderTime}
				className="relative flex flex-col text-white"
				onResendClick={handleResendClick}
				renderButton={renderButton}
				onTimerComplete={handleTimeComplete}
			/>

			<button
				onClick={handleVerifyClick}
				className="mt-8 bg-transparent border btn block dark:!border-green dark:!text-green dark:bg-transparent bg-navy-400 text-slate-200 min-w-[200px] lg:min-w-[300px] px-3 py-2  mx-auto hover:dark:bg-greenTin transition-all hover:bg-navy-200 duration-300"
			>
				Verify
			</button>
		</div>
	);
};

const renderTime = (remainingtime) => {
	return (
		<span className="block py-4 font-thin text-center lg:text-xl text-slate-600">
			Verifying code will expired in {remainingtime} seconds.
		</span>
	);
};

const renderButton = (buttonProps) => {
	return (
		<button
			{...buttonProps}
			className="bg-transparent cursor-pointer relative z-10 lg:text-2xl border btn font-bold border-none dark:!text-slate-200 !text-navy-600 min-w-[200px] px-3 py-2 mx-auto hover:!text-green transition-all duration-300 lg:hover:!text-navy-800"
		>
			{buttonProps.remainingTime === 0
				? "Resend"
				: `Please wait for ${buttonProps.remainingTime} seconds to resend.`}
		</button>
	);
};

export default OTPPage;
