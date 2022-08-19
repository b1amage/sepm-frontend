import React, { useState, useEffect } from "react";
import FoodCard from "../components/dishes/FoodCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import axios from "axios";
import Button from "../utilities/Button";
import { BsFillPlusCircleFill, BsFillPenFill } from "react-icons/bs";
import { AiFillDelete, AiFillEye } from "react-icons/ai";

const DashBoardPage = () => {
	const [dishes, setDishes] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get("/api/food/?vendor=global");
			setDishes(res.data.results);
		};
		fetch();
	}, [dishes]);

	return (
		<div className="page-container">
			<NavBar />
			<div className="my-8">
				<h3 className="my-4 text-3xl font-bold uppercase">
					Global featured dishes
				</h3>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 place-items-center">
					{dishes?.length > 0 &&
						dishes.map((item, index) => (
							<FoodCard food={item} key={index} />
						))}
				</div>
			</div>
			<div className="my-8 lg:my-12">
				<h3 className="my-4 text-3xl font-bold uppercase">
					Manage food
				</h3>
				<div className="grid grid-cols-2 gap-5 my-8 lg:grid-cols-4 place-items-center">
					<Button
						className="w-[75px] h-[75px] md:h-[120px] md:w-[120px]"
						content={
							<BsFillPlusCircleFill className="text-3xl md:text-4xl lg:text-5xl" />
						}
					/>
					<Button
						className="w-[75px] h-[75px] md:h-[120px] md:w-[120px]"
						content={
							<AiFillEye className="text-3xl md:text-4xl lg:text-5xl" />
						}
					/>
					<Button
						className="w-[75px] h-[75px] md:h-[120px] md:w-[120px]"
						content={
							<AiFillDelete className="text-3xl md:text-4xl lg:text-5xl" />
						}
					/>
					<Button
						className="w-[75px] h-[75px] md:h-[120px] md:w-[120px]"
						content={
							<BsFillPenFill className="text-3xl md:text-4xl lg:text-5xl" />
						}
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default DashBoardPage;
