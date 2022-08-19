import React from "react";
import star from "../../assets/svg/star.svg";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import authenticationApi from "../../api/authenticationApi";
import Button from "../../utilities/Button";
// import axios from "axios";

const ReviewCard = ({ review, handleDelete }) => {
	const { rating, title, comment } = review;
	const username = review.user.username;

	const user = authenticationApi.isLogin()
		? JSON.parse(localStorage.getItem("user"))
		: null;

	// const handleDelete = () => {
	// 	const newReview = reviews.filter((item) => item._id !== review.id);
	// 	setReviews(newReview);

	// 	const del = async () => {
	// 		const res = await axios.delete(`/api/review/${review._id}`);
	// 		console.log(res);
	// 	};

	// 	del();
	// };
	return (
		<div className="relative flex flex-col gap-4 p-4 rounded-lg shadow-2xl">
			{username === user.username && (
				<div className="absolute flex items-center gap-4 -translate-y-1/2 bottom-4 right-4">
					<Button content={<BsFillPenFill className="text-xl" />} />
					<Button
						content={<AiFillDelete className="text-xl" />}
						onClick={() => handleDelete(review._id)}
					/>
				</div>
			)}
			<div className="flex items-center justify-between">
				<h3 className="text-3xl font-semibold uppercase">{title}</h3>

				<h6>
					by <span className="font-semibold text-red">@bao</span>
				</h6>
			</div>

			<div className="flex items-center space-x-2">
				{Array(rating)
					.fill()
					.map((_, index) => (
						<div key={index} className="w-3 h-3">
							<img
								src={star}
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					))}
			</div>

			<div className="my-6">
				<p className="text-xl">{comment}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
