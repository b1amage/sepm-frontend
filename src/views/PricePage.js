import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FoodCard from "../components/dishes/FoodCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import Button from "../utilities/Button";
import Loading from "../utilities/Loading";

const PricePage = () => {
	const [nextCursor, setNextCursor] = useState(false);
	const [dishes, setDishes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadMore, setIsLoadMore] = useState(false);

	const { minPrice, maxPrice } = useParams();

	const handleSeeMore = () => {
		const fetch = async () => {
			if (!nextCursor) return;

			setIsLoadMore(true);

			const res = await axios.get(
				`/api/food?minPrice=${minPrice}&maxPrice=${maxPrice}&next_cursor=${nextCursor}`
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

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(
				`/api/food?minPrice=${minPrice}&maxPrice=${maxPrice}`
			);
			console.log(res.data);

			if (res.data.next_cursor) {
				setNextCursor(res.data.next_cursor);
			}

			setDishes(res.data.results);
			setIsLoading(false);
		};
		fetch();
	}, [minPrice, maxPrice]);
	return (
		<div className="page-container">
			<NavBar />

			{isLoading ? (
				<div className="flex items-center justify-center">
					<Loading />
				</div>
			) : (
				<>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 place-items-center">
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

export default PricePage;
