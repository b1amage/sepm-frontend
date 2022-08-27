import React, { useState, useEffect } from "react";
import FoodCard from "../components/dishes/FoodCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import axios from "axios";
import Button from "../utilities/Button";
import { BsFillPlusCircleFill, BsFillPenFill } from "react-icons/bs";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import DashboardModal from "../components/dashboard/DashboardModal";
import ImgFrame from "../utilities/ImgFrame";
import search from "../assets/svg/search.svg";

const DashBoardPage = () => {
	const [dishes, setDishes] = useState([]);
	const [nextCursor, setNextCursor] = useState();
	const [query, setQuery] = useState("");
	const [showModal, setShowModal] = useState(false);

	const handleAdd = (food) => {
		const add = async () => {
			console.log("add");

			const res = await axios.post(`/api/food`, food);

			console.log(res);
		};

		add();
	};

	const handleGetOne = () => {
		const fetch = async () => {
			const res = await axios.get(`/api/food?foodName=${query}`);

			console.log(res);

			setDishes(res.data.results);
			setNextCursor(null);
		};

		fetch();
	};

	const handleShowMore = () => {
		if (!nextCursor) return;

		const fetch = async () => {
			const res = await axios.get(
				`/api/food/?vendor=global&next_cursor=${nextCursor}`
			);
			console.log(res);
			setDishes([...dishes, ...res.data.results]);
			setNextCursor(res.data.next_cursor);
		};
		fetch();
	};

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(`/api/food/?vendor=global`);
			console.log(res);
			setDishes(res.data.results);
			setNextCursor(res.data.next_cursor);
		};
		fetch();
	}, []);

	const handleSeeAll = () => {
		const fetch = async () => {
			const res = await axios.get(`/api/food/?vendor=global`);
			console.log(res);
			setDishes(res.data.results);
			setNextCursor(res.data.next_cursor);
		};
		fetch();
	};

	return (
		<div className="page-container">
			<NavBar />
			<div className="my-8">
				<h3 className="my-4 text-3xl font-bold uppercase">
					Global featured dishes
				</h3>

				<div className="flex mb-12 md:mb-[30px] items-center h-[50px] justify-between mt-8 space-x-2 lg:text-2xl">
					<input
						type="text"
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Pick your favorite"
						className="w-full h-full p-3 border border-black lg:p-6 dark:placeholder:text-white md:text-xl md:placeholder:text-xl lg:text-2xl lg:placeholder:text-2xl dark:border-white placeholder:text-black input"
					/>

					<div className="cursor-pointer" onClick={handleGetOne}>
						<ImgFrame
							src={search}
							imgClassName="w-6 h-6"
							className="flex items-center justify-center h-full p-2 rounded-md w-14 bg-red"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 place-items-center">
					{dishes?.length > 0 &&
						dishes.map((item, index) => (
							<FoodCard food={item} key={index} />
						))}
				</div>
				{nextCursor && (
					<div className="flex items-center justify-center my-8">
						<Button content="Show more" onClick={handleShowMore} />
					</div>
				)}
			</div>
			<div className="my-8 lg:my-12">
				<h3 className="my-4 text-3xl font-bold uppercase">
					Manage food
				</h3>
				<div className="grid grid-cols-2 gap-5 my-8 lg:grid-cols-4 place-items-center">
					<Button
						onClick={() => setShowModal(!showModal)}
						className="w-[75px] h-[75px] md:h-[120px] md:w-[120px]"
						content={
							<BsFillPlusCircleFill className="text-3xl md:text-4xl lg:text-5xl" />
						}
					/>
					<Button
						onClick={handleSeeAll}
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

			{showModal && <DashboardModal onAdd={handleAdd} />}

			<div className="my-8">
				<h3 className="my-4 text-3xl font-bold uppercase">
					Order food
				</h3>
			</div>

			<Footer />
		</div>
	);
};

export default DashBoardPage;
