import React from "react";

const FilterRow = ({ title, handleFilterChoose, options, type }) => {
	return (
		<div>
			<h3 className="py-3 text-2xl font-semibold capitalize border-b border-b-black dark:border-b-red">
				{title}
			</h3>
			<div className="flex py-4 space-x-3">
				{options.map((item, index) => (
					<div
						key={index}
						id={item}
						onClick={(e) => {
							handleFilterChoose(e, type);
						}}
						className="px-4 py-2 text-xl font-semibold capitalize transition-all border rounded-full cursor-pointer text-red border-red hover:bg-red hover:text-white"
					>
						<h3 id={item}>{item}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterRow;
