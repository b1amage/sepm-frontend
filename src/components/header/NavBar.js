import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import CartButton from "./CartButton";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
	const [isShowNav, setIsShowNav] = useState(false);
	const [isDesktop, setDesktop] = useState(window.innerWidth >= 976);

	const updateMedia = () => {
		setDesktop(window.innerWidth >= 976);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<>
			<div className="fixed top-0 flex items-center justify-between w-full px-10 py-12">
				{isDesktop ? (
					<NavDesktop />
				) : (
					<BurgerButton onClick={() => setIsShowNav(!isShowNav)} />
				)}
				<CartButton />
			</div>

			<NavMobile isShowNav={isShowNav} />
		</>
	);
};

export default NavBar;
