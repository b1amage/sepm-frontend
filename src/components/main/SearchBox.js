import React from "react";
import search from "../../assets/svg/search.svg";
import ImgFrame from "../../utilities/ImgFrame";

const SearchBox = () => {
	return (
		<div className="flex mb-12 md:mb-[30px] items-center h-[50px] justify-between mt-8 space-x-2 lg:text-2xl">
			<input
				type="text"
				placeholder="Pick your favorite"
				className="w-full h-full p-3 border border-black lg:p-6 dark:placeholder:text-white md:text-xl md:placeholder:text-xl lg:text-2xl lg:placeholder:text-2xl dark:border-white placeholder:text-black input"
			/>
			<ImgFrame
				src={search}
				imgClassName="w-6 h-6"
				className="flex items-center justify-center h-full p-2 rounded-md w-14 bg-red"
			/>
		</div>
	);
};

export default SearchBox;
