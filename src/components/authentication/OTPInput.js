import React from "react";

const OTPInput = ({ id }) => {
	return (
		<input
			name={id}
			id={id}
			autoComplete="off"
			maxLength={1}
			type="text"
			className="w-[50px] block text-center text-2xl h-[50px] overflow-hidden bg-navy-200 outline-none input border-none text-white"
		/>
	);
};

export default OTPInput;
