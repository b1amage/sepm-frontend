import React from "react";
import ProductCard from "./ProductCard";

const ProductCategory = ({ category }) => {
	return (
		<div className="mb-10">
			<h1 className="text-lg font-bold uppercase md:text-2xl lg:text-3xl md:p-5 md:pl-0">
				{category || "Vietnamese dishes"}
			</h1>
			<div className="flex pb-4 overflow-x-scroll snap-mandatory scroll-smooth product-category">
				{Array(5)
					.fill()
					.map((_, index) => (
						<ProductCard starCount={5} key={index} />
					))}

				<div className="flex w-[250px] shrink-0 items-center justify-center rounded-lg !h-[150px] md:!h-[175px] bg-red bg-opacity-50 text-darkRed uppercase font-bold text-xl">
					<h1 className="text-white cursor-pointer">See all</h1>
				</div>
			</div>
		</div>
	);
};

export default ProductCategory;
