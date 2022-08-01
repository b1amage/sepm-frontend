import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Skeleton from "../../utilities/Skeleton";

const ProductCategory = ({ category }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://food-suggestion-rmit.herokuapp.com/api/food?type=${category}`
				);

				setProducts(response.data.results);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, [category]);

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
							.map((item, index) => <Skeleton key={index} />)
					: products.length > 0 &&
					  products.map((_, index) => (
							<ProductCard
								starCount={5}
								key={index}
								info={products[index]}
							/>
					  ))}

				<div className="flex w-[250px] shrink-0 items-center justify-center rounded-lg !h-[150px] md:!h-[175px] bg-red bg-opacity-50 text-darkRed uppercase font-bold text-xl">
					<h1 className="text-white cursor-pointer">See all</h1>
				</div>
			</div>
		</div>
	);
};

export default ProductCategory;
