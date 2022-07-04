import React from "react";

const Title = ({ content }) => {
	return (
		<h3 className="text-3xl font-bold text-center capitalize">
			{content || "Title"}
		</h3>
	);
};

export default Title;
