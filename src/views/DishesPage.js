import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FoodCard from "../components/dishes/FoodCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import Button from "../utilities/Button";

const DishesPage = () => {
	const [nextCursor, setNextCursor] = useState(false);
	const [dishes, setDishes] = useState([]);
	const { category } = useParams();

	console.log(category);

	const handleSeeMore = () => {
		const fetch = async () => {
			if (!nextCursor) return;

			const res = await axios.get(
				category !== "all"
					? `https://food-suggestion-rmit.herokuapp.com/api/food?type=${category}&next_cursor=${nextCursor}`
					: `https://food-suggestion-rmit.herokuapp.com/api/food?next_cursor=${nextCursor}`
			);

			console.log(res.data);

			const newDishes = [...dishes, ...res.data.results];
			console.log("new dishes", newDishes);

			setDishes(newDishes);
			setNextCursor(res.data.next_cursor);
		};

		fetch();
	};

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(
				category !== "all"
					? `https://food-suggestion-rmit.herokuapp.com/api/food?type=${category}`
					: `https://food-suggestion-rmit.herokuapp.com/api/food`
			);
			console.log(res.data);

			if (res.data.next_cursor) {
				setNextCursor(res.data.next_cursor);
			}

			setDishes(res.data.results);
		};
		fetch();
	}, [category]);
	return (
		<div className="page-container">
			<NavBar />

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 place-items-center">
				{dishes.length === 0 ? (
					<div>No result found</div>
				) : (
					dishes.map((item, index) => (
						<FoodCard food={item} key={index} />
					))
				)}
			</div>

			<div className="flex items-center justify-center my-10">
				<Button content="Click to view more" onClick={handleSeeMore} />
			</div>
			<Footer />
		</div>
	);
};

export default DishesPage;
