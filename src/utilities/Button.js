import React from "react";

const Button = ({ disabled, className, content, onClick, optional }) => {
	return (
		<>
			<button
				onClick={onClick}
				disabled={disabled}
				className={`text-white btn border-none bg-red hover:bg-darkRed hover:-translate-y-1 hover:shadow-sm ${className}`}
			>
				{content || "Click me"}
				{optional}
			</button>
		</>
	);
};

export default Button;
