import React from "react";

const ImgFrame = ({ src, alt, className, imgClassName }) => {
	return (
		<div className={`w-full ${className}`}>
			<img
				src={src}
				alt={alt}
				className={`object-cover w-full h-full ${imgClassName}`}
			/>
		</div>
	);
};

export default ImgFrame;
