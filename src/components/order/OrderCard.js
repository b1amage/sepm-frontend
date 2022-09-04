import React from "react";

const OrderCard = ({ order }) => {
	return (
		<div className="flex items-center space-x-5 min-h-[150px] shadow-xl px-1 md:p-4 lg:p-10 md:max-w-none rounded-md">
			<div className="flex flex-col flex-1">
				<h1 className="text-xl font-bold text-red">
					{order.food.foodName}
				</h1>
				<div className="text-lg">
					<h3>{order.vendor.username}</h3>
					<h6>Floor 1, build 10</h6>
				</div>

				<div className="flex items-center justify-between text-xl">
					<p>{order.totalPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
