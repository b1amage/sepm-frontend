import React, { useState } from "react";
import FilterRow from "./FilterRow";
import SearchBox from "../main/SearchBox";
import Button from "../../utilities/Button";
import { useNavigate } from "react-router-dom";

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
	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();

	const navigate = useNavigate();

	const hanlePriceFilter = () => {
		if (isNaN(minPrice) || isNaN(maxPrice)) return;
		navigate(`/food/${minPrice}/${maxPrice}`);
	};

	const handleFilterChoose = (e, type) => {
		const fetch = async () => {
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
			<div>
				<h3 className="py-3 text-2xl font-semibold capitalize border-b border-b-black dark:border-b-red">
					Price
				</h3>
				<div className="flex py-4 space-x-3">
					<input
						onChange={(e) => setMinPrice(e.target.value)}
						type="text"
						name="minPrice"
						id="minPrice"
						placeholder="Min price"
						className="input border-red placeholder:text-red text-red"
					/>
					<input
						onChange={(e) => setMaxPrice(e.target.value)}
						type="text"
						name="maxPrice"
						id="maxPrice"
						placeholder="Max price"
						className="input border-red placeholder:text-red text-red"
					/>

					<Button content="Filter" onClick={hanlePriceFilter} />
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
