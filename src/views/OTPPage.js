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
		console.log(OTP);
	};

	const handleTimeComplete = () => {
		console.log("Clear interval");
	};

	return (
		<div className="container px-5 py-10 mx-auto">
			<div className="flex flex-col my-10 space-y-4">
				<h3 className="text-2xl font-semibold md:text-2xl lg:text-4xl md:mb-2 lg:mb-5 dark:text-slate-200">
					Enter your verification code
				</h3>
				<p className="font-thin md:text-xl lg:text-2xl md:font-medium">
					We have send a verifiycation code to s3877698@rmit.edu.vn
				</p>
			</div>

			<div className="flex items-center justify-center mx-auto overflow-hidden h-[300px] md:h-[400px] md:w-[450px] md:mb-10 lg:mb-16">
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
				inputClassName="!m-0 text-center min-w-[50px] lg:min-w-[100px] lg:min-h-[100px] md:min-w-[75px] md:min-h-[75px] block text-center text-xl font-bold min-h-[50px] dark:bg-navy-200 bg-slate-400 outline-none input border-none text-navy-600 dark:text-white p-0 md:text-2xl lg:text-4xl"
				className="!grid grid-cols-6 my-8 place-items-center"
			/>
			<ResendOTP
				maxTime={10}
				renderTime={renderTime}
				className="relative flex flex-col text-white"
				onResendClick={handleResendClick}
				renderButton={renderButton}
				onTimerComplete={handleTimeComplete}
			/>

			<button
				onClick={handleVerifyClick}
				className={`mt-8 bg-transparent border btn ${
					OTP.length === 6 ? "block" : "hidden"
				} dark:!border-green dark:!text-green dark:bg-transparent bg-navy-400 text-slate-200 min-w-[200px] md:min-w-[250px] lg:min-w-[300px] px-3 py-2  mx-auto hover:dark:bg-greenTin transition-all hover:bg-navy-200 duration-300`}
			>
				Verify
			</button>
		</div>
	);
};

const renderTime = (remainingtime) => {
	return (
		<span className="block py-4 font-thin text-center md:text-xl text-slate-600">
			Verifying code will expired in {remainingtime} seconds.
		</span>
	);
};

const renderButton = (props) => {
	const { restProps } = props;
	return (
		<button
			{...restProps}
			className="bg-transparent cursor-pointer relative z-10 md:text-xl lg:text-2xl border btn font-bold border-none dark:!text-slate-200 !text-navy-600 min-w-[200px] px-3 py-2 mx-auto hover:!text-green transition-all duration-300 lg:hover:!text-navy-800"
		>
			Resent
		</button>
	);
};

export default OTPPage;
