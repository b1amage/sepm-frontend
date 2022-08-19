import React from "react";
import Counter from "./Counter";

const CartCard = ({ foodName, img }) => {
	return (
		<div className="flex items-center space-x-5 min-h-[150px] shadow-xl px-1 md:p-4 lg:p-10 md:max-w-none rounded-md">
			<div className="max-w-[30%] md:max-w-[50%]">
				<img
					src={
						img ||
						`https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80`
					}
					alt=""
					className="h-[100px] md:h-auto"
				/>
			</div>

			<div className="flex flex-col flex-1">
				<h1 className="text-xl font-bold">{foodName || "Banh Mi"}</h1>
				<div className="text-lg">
					<h3>Sorento</h3>
					<h6>Floor 1, build 10</h6>
				</div>

				<div className="flex items-center justify-between text-xl">
					<Counter />

					<p>$15</p>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
