import React from "react";
import { HiOutlineAdjustments } from "react-icons/hi";

const FilterIcon = () => {
	return (
		<div className="flex items-center space-x-2 cursor-pointer">
			<HiOutlineAdjustments className="text-3xl" />
			<p className="text-lg font-semibold">Filter</p>
		</div>
	);
};

export default FilterIcon;
