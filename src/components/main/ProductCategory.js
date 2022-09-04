import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../utilities/Skeleton";

const ProductCategory = ({ category, isSpecial }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					isSpecial
						? "/api/food/recommend"
						: `https://food-suggestion-rmit.herokuapp.com/api/food?type=${category}`
				);

				console.log(isSpecial && response);

				setProducts(
					isSpecial
						? response.data.user.recommendFoods
						: response.data.results
				);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, [category, isSpecial]);

	console.log(products);

	return (
		<div className="mb-10">
			<h1 className="text-lg font-bold uppercase md:text-2xl lg:text-3xl md:p-5 md:pl-0">
				{category || "Vietnamese dishes"}
			</h1>

			<div className="flex pb-4 overflow-x-scroll snap-mandatory scroll-smooth product-category">
				{isLoading
					? Array(5)
							.fill()
							.map((_, index) => <Skeleton key={index} />)
					: products?.length > 0 &&
					  products.map((_, index) => (
							<ProductCard
								starCount={5}
								key={index}
								info={products[index]}
								category={category}
							/>
					  ))}

				{!isSpecial && (
					<div
						onClick={() => {
							navigate(`/dishes/${category}`);
						}}
						className="flex w-[250px] shrink-0 items-center justify-center rounded-lg !h-[150px] md:!h-[175px] bg-red bg-opacity-50 text-darkRed uppercase font-bold text-xl"
					>
						<h1 className="text-white cursor-pointer">See all</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductCategory;
