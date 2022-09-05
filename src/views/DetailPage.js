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

	const [isShowReview, setIsShowReview] = useState(false);

	const [food, setFood] = useState();
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [review, setReview] = useState("");
	const [title, setTitle] = useState("");
	const [star, setStar] = useState(0);

	const handleAddToCart = (e) => {
		e.stopPropagation();

		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		if (cart.length === 0) {
			food.count = 1;
			cart.push(food);
		} else {
			if (!cart[0]._id === food._id) {
				return;
			} else {
				cart[0].count = cart[0].count + 1;
			}
		}

		localStorage.setItem("cart", JSON.stringify(cart));
	};

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
			console.log(res.data.food);
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

	const updateReview = (id, title, star, review) => {
		const newReview = {
			_id: id,
			rating: star * 1,
			title: title,
			comment: review,
			food: foodId,
			user: {
				username: JSON.parse(localStorage.getItem("user")).username,
			},
		};

		const newReviews = reviews.map((item) =>
			item._id === id ? newReview : item
		);

		console.log("update", newReviews);
		setReviews(newReviews);

		const update = async () => {
			// updateReview(id, title, star, review);
			const res = await axios.patch(`/api/review/${id}`, newReview);
			console.log(res);
		};

		update();
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
							{food?.foodDescription}
						</p>
						<Button
							onClick={handleAddToCart}
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

					<div className="relative my-10" id="review">
						<h1
							onClick={() => setIsShowReview((prev) => !prev)}
							className={`mb-3 text-2xl font-bold transition-all cursor-pointer ${
								!isShowReview ? "animate-bounce" : ""
							} lg:text-4xl`}
						>
							Review <span>&darr;</span>
						</h1>
						{isShowReview && (
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
											rating: star * 1,
											title: title,
											comment: review,
											food: foodId,
											user: {
												username: JSON.parse(
													localStorage.getItem("user")
												).username,
											},
										};
										setReviews([...reviews, newReview]);
										console.log(newReview);

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
									placeholder="Title for your review"
									onChange={(e) => setTitle(e.target.value)}
								/>

								<input
									type="text"
									className="w-full input md:text-lg"
									placeholder="How would you rate this dishes out of 5?"
									onChange={(e) => {
										console.log(e.target.value);
										if (isNaN(e.target.value)) return;
										setStar(e.target.value * 1);
									}}
								/>

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
						)}
					</div>

					<div>
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">
							Review about this food
						</h1>

						<div>
							{reviews?.length > 0 &&
								reviews.map((item, index) => (
									<ReviewCard
										updateReview={updateReview}
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
