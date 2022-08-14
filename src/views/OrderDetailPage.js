import React from "react";
import CartCard from "../components/cart/CartCard";
import Footer from "../components/footer/Footer";
import NavBar from "../components/header/NavBar";

const OrderDetailPage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div className="flex flex-col my-6 space-y-4 md:my-8">
				<h3 className="text-lg font-semibold md:text-3xl">
					Summary of <span className="text-red">"username"</span> your
					order: ;
				</h3>
				<h6 className="text-lg font-semibold md:text-2xl">
					This order is processing by{" "}
					<span className="text-red">"vendor"</span>
				</h6>
			</div>

			<div className="grid md:grid-cols-2">
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
			</div>

			<div className="flex flex-col space-y-4 my-7 md:my-9">
				<h3 className="text-lg font-semibold md:text-3xl">
					Total: <span className="text-red">60$</span>
				</h3>
				<h6 className="text-lg font-semibold md:text-3xl">
					Will be ready in <span className="text-red">25</span>{" "}
					minutes
				</h6>
			</div>

			<Footer />
		</div>
	);
};

export default OrderDetailPage;
