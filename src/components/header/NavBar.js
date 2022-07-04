import React, { useState } from "react";
import BurgerButton from "./BurgerButton";
import CartButton from "./CartButton";
import NavMobile from "./NavMobile";

const NavBar = () => {
	const [isShowNav, setIsShowNav] = useState(false);
	return (
		<>
			<div className="fixed top-0 flex items-center justify-between w-full px-5 py-4">
				<BurgerButton onClick={() => setIsShowNav(!isShowNav)} />
				<CartButton />
			</div>

			<NavMobile isShowNav={isShowNav} />
		</>
	);
};

export default NavBar;
