import React from "react";
import Button from "../../utilities/Button";
import cart from "../../assets/svg/cart.svg";
import ImgFrame from "../../utilities/ImgFrame";

const CartButton = ({ amount }) => {
	return (
		<>
			<Button
				disabled={false}
				className="w-[50px] h-[50px] relative"
				content={<ImgFrame src={cart} alt="cart svg" />}
				optional={
					<div
						className={`absolute flex items-center justify-center w-3 h-3 bg-white rounded-full top-2 left-8 ${
							amount > 0 ? "block" : "hidden"
						}`}
					>
						<span className="text-[8px] font-semibold text-red">
							{amount || 1}
						</span>
					</div>
				}
			/>
		</>
	);
};

export default CartButton;
