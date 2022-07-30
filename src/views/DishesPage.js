import React from "react";
import FoodCard from "../components/dishes/FoodCard";
import NavBar from "../components/header/NavBar";

const DishesPage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 place-items-center">
				{Array(10)
					.fill()
					.map((_, index) => (
						<FoodCard key={index} />
					))}
			</div>
		</div>
	);
};

export default DishesPage;
