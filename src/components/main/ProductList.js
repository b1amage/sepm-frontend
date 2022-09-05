import React from "react";
import ProductCategory from "./ProductCategory";
import authenticationApi from "../../api/authenticationApi";

const categories = ["Breakfast", "Lunch", "Dinner"];

const ProductList = () => {
	return (
		<div className="flex flex-col px-4 md:p-8 md:pb-0">
			{categories.length > 0 &&
				categories.map((_, index) => (
					<ProductCategory key={index} category={categories[index]} />
				))}

			{authenticationApi.isLogin() && (
				<ProductCategory isSpecial="true" category="Recommended" />
			)}
		</div>
	);
};

export default ProductList;
