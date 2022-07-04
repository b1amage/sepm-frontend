import React, { useState } from "react";
import Button from "../../utilities/Button";

const BurgerButton = ({ onClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleBurgerClick = () => {
		setIsOpen(!isOpen);
		onClick();
	};

	const Burger = (
		<div
			className={`relative before:transition-all after:transition-all before:duration-300 after:duration-300 w-full h-[2px] bg-white before:content-[''] before:w-full before:-translate-x-1/2 before:-translate-y-[6px] before:bg-white before:absolute before:h-[2px] after:content-[''] after:w-full after:-translate-x-1/2 after:translate-y-[6px] after:bg-white after:absolute after:h-[2px] ${
				isOpen
					? "!bg-transparent before:rotate-[45deg] after:rotate-[135deg] before:translate-y-0 after:translate-y-0"
					: ""
			}`}
		></div>
	);

	return (
		<Button
			onClick={handleBurgerClick}
			disabled={false}
			content={Burger}
			className="w-[50px] h-[50px] z-50 lg:hidden"
		/>
	);
};

export default BurgerButton;
