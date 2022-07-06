import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import ProductCard from "./ProductCard";

const ProductCategory = ({ category }) => {
	return (
		<>
			<h1 className="mt-6 mb-5 text-lg font-bold">
				{category || "Vietnamese dishes"}
			</h1>
			<div className="product-category">
				<Swiper
					grabCursor="true"
					spaceBetween={40}
					slidesPerView="auto"
				>
					{Array(5)
						.fill()
						.map((_, index) => (
							<SwiperSlide key={index}>
								<ProductCard starCount={5} />
							</SwiperSlide>
						))}
					<SwiperSlide className="flex items-center justify-center rounded-lg !h-[150px] bg-red bg-opacity-30 text-darkRed uppercase font-bold text-xl">
						<h1 className="cursor-pointer">See all</h1>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default ProductCategory;
