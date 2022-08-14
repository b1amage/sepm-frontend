import React from "react";
import FilterRow from "./FilterRow";
import SearchBox from "../main/SearchBox";

const category = ["Noodle", "Rice", "Soup", "Bread", "Dessert"];
const vendors = [
	"global",
	"sorento",
	"lygon",
	"nine",
	"highlands",
	"la catina",
];

const FilterModal = ({ setDishes, setNextCursor, handleSeeMoreFilter }) => {
	const handleFilterChoose = (e, type) => {
		const fetch = async () => {
			// console.log(e.target);
			// localStorage.setItem("filter", e.target.id);
			// const res = await axios.get(`/api/food?${type}=${e.target.id}`);

			// console.log(res.data);
			// setDishes(res.data.results);
			// setNextCursor(res.data.next_cursor);
			handleSeeMoreFilter(type, e.target.id);
		};

		fetch();
	};
	return (
		<div>
			<div>
				<h3 className="py-3 text-2xl font-semibold capitalize border-b border-b-black dark:border-b-red">
					Name
				</h3>

				<SearchBox />
			</div>
			<FilterRow
				type="category"
				options={category}
				title="Category"
				handleFilterChoose={handleFilterChoose}
			/>

			<FilterRow
				type="vendor"
				options={vendors}
				title="Vendors"
				handleFilterChoose={handleFilterChoose}
			/>
		</div>
	);
};

export default FilterModal;
