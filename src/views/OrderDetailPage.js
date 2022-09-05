import React from "react";
import CartCard from "../components/cart/CartCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";
import { useSearchParams } from "react-router-dom";
// const useQuery = () => {
// 	return new URLSearchParams(useLocation().search);
// };

const OrderDetailPage = () => {
	const [searchParams] = useSearchParams();

	const user = searchParams.get("user");
	const image = searchParams.get("image");
	const food = searchParams.get("food");
	const vendor = searchParams.get("vendor");
	const totalPrice = searchParams.get("totalPrice");
	const totalPrepareTime = searchParams.get("totalPrepareTime");
	const quantity = JSON.parse(localStorage.getItem("cart"))[0].count;

	const info = {
		user,
		image,
		food,
		vendor,
		totalPrice,
		totalPrepareTime,
		count: quantity,
	};

	return (
		<div className="page-container">
			<NavBar />

			<div className="flex flex-col items-center justify-center my-6 space-y-4 md:my-8">
				<h3 className="text-lg font-semibold md:text-3xl">
					Summary of{" "}
					<span className="capitalize text-red">{user}</span>
					order
				</h3>
				<h6 className="text-lg font-semibold md:text-2xl">
					This order is processing by{" "}
					<span className="capitalize text-red">{vendor}</span>
				</h6>
			</div>

			<div className="flex items-center justify-center my-8">
				<CartCard info={info} foodName={food} img={image} />
			</div>

			<div className="flex flex-col items-center justify-center space-y-4 my-7 md:my-9">
				<h3 className="text-lg font-semibold md:text-3xl">
					Total: <span className="text-red">{totalPrice}</span>VND
				</h3>
				<h6 className="text-lg font-semibold md:text-3xl">
					Will be ready in{" "}
					<span className="text-red">{totalPrepareTime}</span> minutes
				</h6>
			</div>

			<Footer />
		</div>
	);
};

export default OrderDetailPage;
