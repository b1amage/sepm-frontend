import React from "react";
import Button from "../../utilities/Button";
import ImgFrame from "../../utilities/ImgFrame";
import hero from "../../assets/svg/hero.svg";

const Banner = () => {
	return (
		<div className="p-5 md:px-20 md:py-8 relative bg-red h-[150px] md:h-[250px] lg:h-[300px] xl:h-[350px] rounded-md bg-opacity-40">
			<div className="flex flex-col h-full gap-3 xl:ml-[120px]">
				<div className="flex flex-col flex-1 lg:mt-5 lg:flex-grow-0 lg:mb-10 text-[22px] md:text-[38px] lg:text-6xl text-red">
					<h3 className="font-semibold md:text-5xl lg:text-7xl dark:text-white">
						Deadline rush?
					</h3>
					<h6 className="dark:text-white">Order food</h6>
				</div>

				<Button
					content="order now"
					className="w-2/5 text-xs btn-sm md:btn-md md:text-lg lg:h-[60px]"
				/>
			</div>

			<ImgFrame
				src={hero}
				className="absolute w-[125px] md:w-[200px] lg:w-[300px] right-0 md:right-16 md:mt-8 bottom-4 md:bottom-8 xl:right-[120px]"
			/>
		</div>
	);
};

export default Banner;
