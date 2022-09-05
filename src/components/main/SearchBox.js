import React, { useState } from "react";
import search from "../../assets/svg/search.svg";
import ImgFrame from "../../utilities/ImgFrame";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				navigate(`/search/${query}`);
			}}
			className="flex mb-12 md:mb-[30px] items-center h-[50px] justify-between mt-8 space-x-2 lg:text-2xl"
		>
			<input
				type="text"
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Pick your favorite"
				className="w-full h-full p-3 border border-black lg:p-6 dark:placeholder:text-white md:text-xl md:placeholder:text-xl lg:text-2xl lg:placeholder:text-2xl dark:border-white placeholder:text-black input"
			/>

			<Link to={`/search/${query}`} className="h-full">
				<ImgFrame
					src={search}
					imgClassName="w-6 h-6"
					className="flex items-center justify-center h-full p-2 rounded-md w-14 bg-red"
				/>
			</Link>
		</form>
	);
};

export default SearchBox;
