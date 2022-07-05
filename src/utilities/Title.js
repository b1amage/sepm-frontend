import React from "react";

const Title = ({ children, className }) => {
	return (
		<h3
			className={`mb-5 text-3xl font-bold text-center uppercase md:text-5xl lg:text-6xl ${className}`}
		>
			{children || "Title"}
		</h3>
	);
};

export default Title;
