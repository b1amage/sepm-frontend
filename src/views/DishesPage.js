import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FoodCard from "../components/dishes/FoodCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import Button from "../utilities/Button";
import Loading from "../utilities/Loading";
import Filter from "../components/filter/Filter";

const DishesPage = () => {
	const [nextCursor, setNextCursor] = useState();
	const [dishes, setDishes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadMore, setIsLoadMore] = useState(false);
	const [isUseFilter, setIsUseFilter] = useState(false);

	const { category } = useParams();
	console.log(isUseFilter);

	const handleSeeMore = () => {
		const fetch = async () => {
			if (!nextCursor) return;

			setIsLoadMore(true);

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

			setIsLoadMore(false);
		};

		fetch();
	};

	const handleSeeMoreFilter = (type, filter) => {
		const fetch = async () => {
			if (!nextCursor) return;

			setIsLoadMore(true);

			const res = await axios.get(
				`https://food-suggestion-rmit.herokuapp.com/api/food?${type}=${filter}`
			);

			console.log(res.data);

			const newDishes = [...res.data.results];
			console.log("new dishes filter", newDishes);

			setIsUseFilter(true);
			setDishes(newDishes);
			setNextCursor(res.data.next_cursor);

			setIsLoadMore(false);
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
			setIsLoading(false);
		};
		fetch();
	}, [category]);
	return (
		<div className="relative page-container">
			<NavBar />

			{isLoading ? (
				<div className="flex items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<Filter
						setDishes={setDishes}
						setNextCursor={setNextCursor}
						handleSeeMoreFilter={handleSeeMoreFilter}
					/>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-10 xl:grid-cols-4 place-items-center">
						{dishes.length === 0 ? (
							<div>No result found</div>
						) : (
							dishes.map((item, index) => (
								<FoodCard food={item} key={index} />
							))
						)}
					</div>

					<div className="flex items-center justify-center my-8">
						{isLoadMore && <Loading />}
					</div>

					{nextCursor && (
						<div className="flex items-center justify-center my-10">
							<Button
								content="Click to view more"
								onClick={handleSeeMore}
							/>
						</div>
					)}
				</>
			)}

			<Footer />
		</div>
	);
};

export default DishesPage;
