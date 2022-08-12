import React, { useState } from "react";
import FilterIcon from "./FilterIcon";
import FilterModal from "./FilterModal";

const Filter = ({ setDishes, setNextCursor }) => {
	const [isShowModal, setIsShowModal] = useState(false);
	return (
		<div className="my-8">
			<div
				className="flex items-center justify-center"
				onClick={() => setIsShowModal(!isShowModal)}
			>
				<FilterIcon />
			</div>

			{isShowModal && (
				<FilterModal
					setDishes={setDishes}
					setNextCursor={setNextCursor}
				/>
			)}
		</div>
	);
};

export default Filter;
