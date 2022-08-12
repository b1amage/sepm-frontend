import React from "react";
import axios from "axios";

const category = ["Noodle", "Rice", "Soup", "Bread", "Dessert"];

const FilterModal = ({ setDishes, setNextCursor }) => {
	const handleFilterChoose = (e) => {
		const fetch = async (e) => {
			console.log(e.target.id);
			localStorage.setItem("filter", e.target.id);
			const res = await axios.get(`/api/food?category=${e.target.id}`);

			console.log(res.data);
			setDishes(res.data.results);
			setNextCursor(res.data.next_cursor);
		};

		fetch(e);
	};
	return (
		<div>
			<div>
				<h3 className="py-3 text-2xl font-semibold border-b border-b-black dark:border-b-red">
					Category
				</h3>
				<div className="flex py-4 space-x-3">
					{category.map((item, index) => (
						<div
							key={index}
							id={item}
							onClick={handleFilterChoose}
							className="px-4 py-2 text-xl font-semibold transition-all border rounded-full cursor-pointer text-red border-red hover:bg-red hover:text-white"
						>
							<h3 id={item}>{item}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
