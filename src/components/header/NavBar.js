import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import CartButton from "./CartButton";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
	const [isShowNav, setIsShowNav] = useState(false);
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const [isDesktop, setDesktop] = useState(window.innerWidth >= 976);

	const updateMedia = () => {
		setDesktop(window.innerWidth >= 976);
	};

	const handleBurgerClick = () => {
		setIsBurgerOpen(!isBurgerOpen);
		setIsShowNav(!isShowNav);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	const handleLinkClick = () => {
		setIsShowNav(!isShowNav);
		setIsBurgerOpen(!isBurgerOpen);
	};

	return (
		<>
			<div className="z-[100] flex items-center justify-between w-full py-8">
				{isDesktop ? (
					<NavDesktop />
				) : (
					<BurgerButton
						isOpen={isBurgerOpen}
						isShowNav={isShowNav}
						onClick={handleBurgerClick}
					/>
				)}
				<CartButton />
			</div>

			<NavMobile onLinkClick={handleLinkClick} isShowNav={isShowNav} />
		</>
	);
};

export default NavBar;
