import React from "react";
import ImgFrame from "../../utilities/ImgFrame";
import Button from "../../utilities/Button";
import star from "../../assets/svg/star.svg";

const ProductCard = ({ starCount }) => {
	return (
		<div className="grid grid-cols-3 gap-3 p-2 overflow-hidden rounded-lg place-items-center h-[150px]">
			<ImgFrame
				className="w-full h-full max-w-[120px] max-h-[100px] rounded-lg overflow-hidden"
				src={
					"https://images.unsplash.com/photo-1657047408497-6242a776a680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
				}
			/>

			<div className="flex flex-col items-start justify-start w-full h-full col-span-2 col-start-2">
				<div className="mb-1">
					<h3 className="mt-2 font-bold">Cheese Cake</h3>
					<div className="text-[10px] font-thin">
						<h6>Sorento</h6>
						<p>Floor 1 Build 10</p>
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
					<h3 className="font-bold">12</h3>

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
