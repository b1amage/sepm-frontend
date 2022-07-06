import React from "react";
import Button from "../../utilities/Button";
import ImgFrame from "../../utilities/ImgFrame";
import hero from "../../assets/svg/hero.svg";

const Banner = () => {
	return (
		<div className="p-5 md:p-10 relative bg-red h-[150px] md:h-[250px] lg:h-[300px] xl:h-[350px] rounded-md bg-opacity-20">
			<div className="flex flex-col h-full gap-3 xl:ml-[120px]">
				<div className="flex flex-col flex-1 text-lg md:gap-y-4 md:text-4xl lg:text-6xl text-red">
					<h3 className="font-semibold">Deadline rush?</h3>
					<h6>Order food</h6>
				</div>

				<Button
					content="order now"
					className="w-2/5 text-xs btn-sm md:btn-md md:text-lg lg:h-[60px]"
				/>
			</div>

			<ImgFrame
				src={hero}
				className="absolute w-[125px] md:w-[200px] lg:w-[300px] right-0 bottom-4 xl:right-[120px]"
			/>
		</div>
	);
};

export default Banner;
