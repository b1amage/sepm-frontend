import React from "react";
import axios from "axios";
import Button from "../../utilities/Button";

const CartCard = ({ info }) => {
	const handleDiscard = () => {
		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		cart = cart.filter((item) => item._id !== info._id);

		localStorage.setItem("cart", JSON.stringify(cart));
	};

	const handleOrder = () => {
		console.log("order");

		const order = async () => {
			try {
				const response = await axios.post("/api/order/orderFood", {
					foodId: info._id,
					numberOfFood: info.count,
				});

				console.log(response);
				window.open(response.data.payUrl, "_blank");
			} catch (err) {
				console.log(err);
			}
		};

		order();
	};

	return (
		<>
			<div className="flex relative items-center space-x-5 min-h-[150px] shadow-xl px-1 md:p-4 lg:p-10 md:max-w-none rounded-md">
				<div className="max-w-[30%] md:max-w-[50%]">
					<img
						src={info?.image}
						alt=""
						className="h-[100px] md:h-auto"
					/>
				</div>

				<div
					onClick={handleDiscard}
					className="absolute text-2xl cursor-pointer top-4 right-4"
				>
					x
				</div>

				<div className="flex flex-col flex-1">
					<h1 className="text-xl font-bold">
						{info?.foodName || info?.food}
					</h1>
					<div className="text-lg">
						<h3>{info?.vendor?.username || info?.vendor}</h3>
						<h6>{info?.location}</h6>
					</div>

					<div className="flex items-center justify-between text-xl">
						<p>Quantity: {info?.count}</p>

						<p>{info?.price}</p>
					</div>

					<Button
						content="Order now"
						className="w-full my-10"
						onClick={handleOrder}
					/>
				</div>
			</div>
		</>
	);
};

export default CartCard;
