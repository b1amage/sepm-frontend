import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/header/NavBar";
import ImgFrame from "../utilities/ImgFrame";
import Button from "../utilities/Button";
import Footer from "../components/footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FoodCard from "../components/dishes/FoodCard";
import Loading from "../utilities/Loading";
import authenticationApi from "../api/authenticationApi";
import ReviewCard from "../components/review/ReviewCard";

const DetailPage = () => {
	const { foodId } = useParams();
	const navigate = useNavigate();
	const isLogin = authenticationApi.isLogin();

	const [food, setFood] = useState();
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [review, setReview] = useState("");

	const handleDelete = (id) => {
		const newReview = reviews.filter((item) => item._id !== id);
		setReviews(newReview);

		const del = async () => {
			const res = await axios.delete(`/api/review/${id}`);
			console.log(res);
		};

		del();
	};

	useEffect(() => {
		const getFood = async () => {
			const res = await axios.get(`/api/food/${foodId}`);

			setFood(res.data.food);
			setIsLoading(false);
		};

		getFood();
	}, [foodId]);

	useEffect(() => {
		const fetchReviews = async () => {
			const res = await axios.get(`/api/review/${foodId}`);
			console.log(res.data.results);
			setReviews(res.data.results);
		};

		fetchReviews();
	}, [foodId]);

	const handleReviewChange = (e) => {
		setReview(e.target.value);
	};

	// console.log(food);

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
		>
			<NavBar />
			{isLoading ? (
				<div className="flex items-center justify-center my-6">
					<Loading />
				</div>
			) : (
				<>
					<ImgFrame
						className="md:h-[400px] lg:w-[800px] lg:h-[600px] lg:mx-auto rounded-md overflow-hidden mt-5"
						src={food?.image}
					/>

					<div className="flex flex-col my-10 space-y-2 lg:my-16">
						<h1 className="text-2xl font-bold lg:text-4xl">
							{food?.foodName}
						</h1>
						<p className="text-lg font-thin md:font-normal lg:text-2xl">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Suscipit, rerum! Lorem ipsum dolor sit amet.
						</p>
						<Button
							content="Add to cart"
							className="w-1/2 md:w-1/3 !mt-6 lg:w-1/6"
						/>
					</div>

					<div className="my-10">
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">
							Note
						</h1>
						<input
							type="text"
							className="w-full input md:text-lg"
							placeholder="Note to chef. Eg. No spicy"
						/>
					</div>

					<div className="my-10">
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">
							Review
						</h1>

						<form
							className="flex flex-col space-y-5"
							onSubmit={(e) => {
								e.preventDefault();
								if (!isLogin) {
									navigate("/login");
									return;
								}

								// post api
								const sendReview = async () => {
									const newReview = {
										rating: 4,
										title: "Good",
										comment: review,
										food: foodId,
										user: {
											username: JSON.parse(
												localStorage.getItem("user")
											).username,
										},
									};
									setReviews([...reviews, newReview]);

									const res = await axios.post(
										"/api/review",
										newReview
									);

									console.log(res);
								};

								sendReview();
							}}
						>
							<input
								type="text"
								className="w-full input md:text-lg"
								placeholder="Any review on this dishes?"
								onChange={handleReviewChange}
							/>

							<Button
								content="review"
								type="submit"
								className="w-1/2 md:w-1/3 !mt-6 lg:w-1/6"
							/>
						</form>
					</div>

					<div>
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">
							Review about this food
						</h1>

						<div>
							{reviews?.length > 0 &&
								reviews.map((item, index) => (
									<ReviewCard
										review={item}
										key={index}
										handleDelete={handleDelete}
									/>
								))}
						</div>
					</div>

					<div className="my-10">
						<h1 className="text-2xl font-bold lg:text-4xl">
							Similar food
						</h1>
						<div className="grid grid-cols-3 my-3 lg:my-10">
							{food?.similarOnes.length > 0 &&
								food?.similarOnes.map((item, index) => (
									<FoodCard food={item} key={index} />
								))}
						</div>
					</div>
				</>
			)}

			<Footer />
		</motion.div>
	);
};

export default DetailPage;
