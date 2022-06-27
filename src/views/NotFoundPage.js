import React from "react";
import notFound from "../assets/not-found.png";

const NotFoundPage = () => {
	return (
		<div className="container flex flex-col items-center justify-center min-h-screen px-10 py-10 mx-auto">
			<div className="flex flex-col items-center justify-center space-y-4 text-center dark:text-white-800">
				<h1 className="text-6xl lg:text-[120px] font-bold dark:text-white-200">
					404
				</h1>
				<h3 className="text-4xl lg:text-6xl ">Not found</h3>
				<h6 className="text-2xl lg:text-3xl">
					Sorry, we were unable to find that page
				</h6>
				<p className="text-xl text-gray-500 dark:text-white-800 lg:text-2xl">
					Please try check your dictation or try another page
				</p>
			</div>

			<div className="mx-auto lg:w-2/5">
				<img
					src={notFound}
					alt=""
					className="object-cover w-full h-full"
				/>
			</div>
		</div>
	);
};

export default NotFoundPage;
