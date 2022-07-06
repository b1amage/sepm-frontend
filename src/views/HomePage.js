import React from "react";
import NavBar from "../components/header/NavBar";
import Banner from "../components/main/Banner";
import ProductList from "../components/main/ProductList";
import SearchBox from "../components/main/SearchBox";

const HomePage = () => {
	return (
		<div className="page-container">
			<NavBar />
			<Banner />
			<SearchBox />

			<ProductList />
		</div>
	);
};

export default HomePage;
