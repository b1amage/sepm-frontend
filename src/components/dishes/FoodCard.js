import React from "react";
import star from "../../assets/svg/star.svg";

const FoodCard = ({ food }) => {
	return (
		<div className="w-[300px] h-[400px] shadow-xl rounded-lg p-4">
			<div className="h-[200px] rounded-lg overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
					alt=""
					className="object-cover w-full h-full transition-all duration-300"
				/>
			</div>

			<div className="flex flex-col items-start justify-center h-[150px] my-4">
				<div className="flex flex-col flex-1">
					<h3 className="text-2xl font-bold">{food.foodName}</h3>
					<h6 className="font-thin capitalize">
						{food.vendor.username}
					</h6>
					<div className="flex items-center justify-center my-2 space-x-1">
						{Array(5)
							.fill()
							.map((_, index) => (
								<img
									key={index}
									src={star}
									alt=""
									className="w-4 h-4"
								/>
							))}
					</div>
				</div>

				<h3 className="flex text-3xl font-semibold text-red">
					{food.price}VND
				</h3>
			</div>
		</div>
	);
};

export default FoodCard;
