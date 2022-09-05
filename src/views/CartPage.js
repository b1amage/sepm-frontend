import React from "react";
import CartCard from "../components/cart/CartCard";
import NavBar from "../components/header/NavBar";
import momo from "../assets/svg/momo.svg";
import Footer from "../components/footer/Footer";

// import axios from "axios";

const CartPage = () => {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];

	// const handleOrder = () => {
	// 	console.log("order");

	// 	const order = async () => {
	// 		try {
	// 			const response = await axios.post("/api/order/orderFood", {
	// 				foodId: cart[0]._id,
	// 				numberOfFood: cart[0].count,
	// 			});

	// 			console.log(response);
	// 			window.open(response.data.payUrl, "_blank");
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};

	// 	order();
	// };

	return (
		<div className="page-container">
			<NavBar />

			<div>
				<h3 className="my-10 text-2xl font-bold">Your cart</h3>

				<div className="flex flex-col space-y-5 md:grid md:grid-cols-2 md:w-full md:gap-5">
					{cart.length > 0 &&
						cart.map((item, index) => (
							<CartCard key={index} info={item} />
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

			<Footer />
		</div>
	);
};

export default CartPage;
