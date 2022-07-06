import React from "react";
import ProductCategory from "./ProductCategory";

const ProductList = () => {
	return (
		<div>
			{Array(5)
				.fill()
				.map((_, index) => (
					<ProductCategory key={index} />
				))}
		</div>
	);
};

export default ProductList;
