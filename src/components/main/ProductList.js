import React from "react";
import ProductCategory from "./ProductCategory";

const ProductList = () => {
	return (
		<div className="flex flex-col px-4 md:p-8 md:pb-0">
			{Array(5)
				.fill()
				.map((_, index) => (
					<ProductCategory key={index} />
				))}
		</div>
	);
};

export default ProductList;
