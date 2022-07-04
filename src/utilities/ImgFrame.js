import React from "react";

const ImgFrame = ({ src, alt, className }) => {
	return (
		<div className={`w-full ${className}`}>
			<img src={src} alt={alt} className="object-cover w-full h-full" />
		</div>
	);
};

export default ImgFrame;
