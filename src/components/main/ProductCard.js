import React from "react";
import ImgFrame from "../../utilities/ImgFrame";
import Button from "../../utilities/Button";
import star from "../../assets/svg/star.svg";

const ProductCard = ({ starCount, info }) => {
	return (
		<div className="grid shadow-xl shrink-0 snap-start grid-cols-3 gap-3 md:gap-6 p-2 overflow-hidden rounded-lg place-items-center h-[150px] md:h-[175px] w-full max-w-[350px] mr-3">
			<ImgFrame
				className="w-full h-full md:max-w-[175px] md:max-h-[120px] max-w-[120px] max-h-[100px] rounded-lg overflow-hidden"
				src={info.image}
			/>

			<div className="flex flex-col items-start justify-start w-full h-full col-span-2 col-start-2">
				<div className="mb-1">
					<h3 className="mt-2 font-bold md:text-lg">
						{info.foodName}
					</h3>
					<div className="text-[10px] md:text-sm font-normal">
						<h6>{info.vendor.username}</h6>
						<p>{info.location}</p>
					</div>
				</div>

				<div className="flex flex-1 space-x-2">
					{starCount > 0 &&
						Array(starCount)
							.fill()
							.map((_, index) => (
								<ImgFrame
									src={star}
									className="w-3 h-3"
									key={index}
								/>
							))}
				</div>

				<div className="flex items-center justify-between w-full mt-3">
					<h3 className="font-bold">{info.price}</h3>

					<Button
						className="text-[10px] btn-sm"
						content="add to cart"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
