import React from "react";
import CartCard from "../components/cart/CartCard";
import NavBar from "../components/header/NavBar";
import momo from "../assets/svg/momo.svg";
import Button from "../utilities/Button";
import Footer from "../components/footer/Footer";

const CartPage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div>
				<h3 className="my-10 text-2xl font-bold">Your cart</h3>

				<div className="flex flex-col space-y-5 md:grid md:grid-cols-2 md:w-full md:gap-5">
					{Array(3)
						.fill()
						.map((_, index) => (
							<CartCard key={index} />
						))}
				</div>
			</div>

			<div>
				<h3 className="mt-10 mb-5 text-2xl font-bold">
					Payment method
				</h3>

				<div className="overflow-hidden w-[75px] h-[75px]">
					<img src={momo} alt="" className="w-full h-full" />
				</div>
			</div>

			<Button content="Order now" className="w-full my-10" />
			<Footer />
		</div>
	);
};

export default CartPage;
