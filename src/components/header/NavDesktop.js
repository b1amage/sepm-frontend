import React from "react";
import { navContent } from "../../content/NavContent";

const NavDesktop = () => {
	return (
		<div className="flex gap-4">
			{navContent.length > 0 &&
				navContent.map((item, index) => (
					<li
						className="p-2 text-lg font-semibold capitalize list-none transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:text-red"
						key={index}
					>
						{item}
					</li>
				))}
		</div>
	);
};

export default NavDesktop;
