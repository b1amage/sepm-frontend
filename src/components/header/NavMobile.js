import React from "react";
import ReactDOM from "react-dom";
import { navContent } from "../../content/NavContent";

const NavMobile = ({ isShowNav }) => {
	return ReactDOM.createPortal(
		<>
			<aside
				className={`transition-all duration-300 absolute inset-0 bg-darkRed right-1/2 md:landscape:right-2/3 md:right-3/5 ${
					isShowNav
						? "translate-x-0 opacity-1"
						: "-translate-x-full opacity-0"
				}`}
			>
				<div className="flex flex-col p-10 mt-20 space-y-3 text-white">
					{navContent.length > 0 &&
						navContent.map((item, index) => (
							<li
								className="p-2 text-lg font-semibold capitalize list-none"
								key={index}
							>
								{item}
							</li>
						))}
				</div>
			</aside>
		</>,
		document.querySelector("#root")
	);
};

export default NavMobile;
