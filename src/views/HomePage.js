import React from "react";
import Footer from "../components/footer/Footer";
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
			<Footer />
		</div>
	);
};

export default HomePage;
