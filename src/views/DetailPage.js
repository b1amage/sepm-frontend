import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/header/NavBar";
import ImgFrame from "../utilities/ImgFrame";
import Button from "../utilities/Button";
import Footer from "../components/footer/Footer";

const DetailPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="page-container"
		>
			<NavBar />

			<ImgFrame
				className="md:h-[400px] lg:w-[800px] lg:h-[600px] lg:mx-auto rounded-md overflow-hidden mt-5"
				src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
			/>

			<div className="flex flex-col my-10 space-y-2 lg:my-16">
				<h1 className="text-2xl font-bold lg:text-4xl">
					Vietnamese broken rice
				</h1>
				<p className="text-lg font-thin md:font-normal lg:text-2xl">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Suscipit, rerum! Lorem ipsum dolor sit amet.
				</p>
				<Button
					content="Add to cart"
					className="w-1/2 md:w-1/3 !mt-6 lg:w-1/6"
				/>
			</div>

			<div className="my-10">
				<h1 className="mb-3 text-2xl font-bold lg:text-4xl">Note</h1>
				<input
					type="text"
					className="w-full input md:text-lg"
					placeholder="Note to chef. Eg. No spicy"
				/>
			</div>

			<div className="my-10">
				<h1 className="text-2xl font-bold lg:text-4xl">Similar food</h1>
				<div className="grid grid-cols-3 my-3 lg:my-10">
					{Array(3)
						.fill()
						.map((_, index) => (
							<div key={index}>
								<div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] overflow mx-auto">
									<img
										src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80"
										alt=""
										className="object-cover w-full h-full"
									/>
								</div>

								<p className="mt-2 text-base font-bold text-center md:mt-4 md:text-2xl">
									Pancake
								</p>
							</div>
						))}
				</div>
			</div>

			<Footer />
		</motion.div>
	);
};

export default DetailPage;
