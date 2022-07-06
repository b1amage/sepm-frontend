import React from "react";
import ProductCategory from "./ProductCategory";

const ProductList = () => {
	return (
		<div className="p-4 md:p-8">
			{Array(5)
				.fill()
				.map((_, index) => (
					<ProductCategory key={index} />
				))}
		</div>
	);
};

export default ProductList;
