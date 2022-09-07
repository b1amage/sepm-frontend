import React, { useState } from "react";
import star from "../../assets/svg/star.svg";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import Button from "../../utilities/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const FoodCard = ({ food, isAdmin, handleDel, handleShowEdit }) => {
	const [isShowQuantity, setIsShowQuantity] = useState(false);
	const [quantity, setQuantity] = useState();

	console.log(food);

	const handleDelete = (e) => {
		e.stopPropagation();
		const del = async () => {
			handleDel(food._id);
			const res = await axios.delete(`/api/food/${food._id}`);
			console.log(res);
		};

		del();
	};

	const handleSubmitOpenOrder = (e) => {
		e.preventDefault();
		setIsShowQuantity(false);
		console.log("create");

		const createOrder = async () => {
			const response = await axios.post("/api/order/openFoodOrder", {
				foodId: food._id,
				quantity,
			});

			console.log(response);
		};

		createOrder();
	};

	return (
		<div className="w-[300px] h-[400px] shadow-xl relative rounded-lg p-4">
			{isAdmin && (
				<div className="absolute flex gap-2 right-2 bottom-4">
					<Button content={<AiFillDelete />} onClick={handleDelete} />
					<Button
						content={<BsFillPenFill />}
						onClick={() => {
							localStorage.setItem("id", food._id);
							handleShowEdit();
						}}
					/>
				</div>
			)}

			<Link to={`/detail/${food._id}`}>
				<div className="h-[200px] rounded-lg overflow-hidden">
					<img
						src={food.image}
						alt=""
						className="object-cover w-full h-full transition-all duration-300"
					/>
				</div>
			</Link>

			<div className="flex flex-col items-start justify-center h-[150px] my-4">
				<div className="flex flex-col flex-1 w-full">
					<div className="flex items-center justify-between w-full">
						<div>
							<h3 className="text-2xl font-bold">
								{food.foodName || "Com suon"}
							</h3>
							<h6 className="font-thin capitalize">
								{food.vendor.username || "Global"}
							</h6>
						</div>

						{isAdmin && (
							<div>
								<p
									className="underline cursor-pointer"
									onClick={() =>
										setIsShowQuantity(!isShowQuantity)
									}
								>
									Open order
								</p>
								{isShowQuantity && (
									<form onSubmit={handleSubmitOpenOrder}>
										<input
											type="text"
											className="input w-[100px] h-[30px]"
											placeholder="quantity"
											name="quantity"
											id="quantity"
											onChange={(e) =>
												setQuantity(e.target.value * 1)
											}
										/>
									</form>
								)}
							</div>
						)}
					</div>

					<div className="flex items-center justify-start my-2 space-x-1">
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
					{food.price || 50000}VND
				</h3>
			</div>
		</div>
	);
};

export default FoodCard;
