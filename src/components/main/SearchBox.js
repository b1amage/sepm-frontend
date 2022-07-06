import React from "react";
import search from "../../assets/svg/search.svg";
import ImgFrame from "../../utilities/ImgFrame";

const SearchBox = () => {
	return (
		<div className="flex items-center h-[50px] justify-between mt-8 space-x-2">
			<input
				type="text"
				placeholder="Pick your favorite"
				className="w-full h-full p-3 border border-black placeholder:text-black input"
			/>
			<ImgFrame
				src={search}
				className="h-full p-3 rounded-md w-14 bg-red"
			/>
		</div>
	);
};

export default SearchBox;
