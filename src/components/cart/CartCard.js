import React from "react";
import Counter from "./Counter";

const CartCard = ({ info }) => {
	return (
		<div className="flex items-center space-x-5 min-h-[150px] shadow-xl px-1 md:p-4 lg:p-10 md:max-w-none rounded-md">
			<div className="max-w-[30%] md:max-w-[50%]">
				<img src={info.image} alt="" className="h-[100px] md:h-auto" />
			</div>

			<div className="flex flex-col flex-1">
				<h1 className="text-xl font-bold">{info.foodName}</h1>
				<div className="text-lg">
					<h3>{info.vendor.username}</h3>
					<h6>Floor 1, build 10</h6>
				</div>

				<div className="flex items-center justify-between text-xl">
					<Counter />

					<p>{info.price}</p>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
