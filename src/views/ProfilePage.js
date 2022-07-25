import React from "react";
import NavBar from "../components/header/NavBar";
import ImgFrame from "../utilities/ImgFrame";
import baoImg from "../assets/img/bao-img.png";
import Button from "../utilities/Button";

const ProfilePage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div className="flex flex-col items-center justify-center my-10 space-y-4">
				<ImgFrame
					src={baoImg}
					className="rounded-full w-[200px] h-[200px] overflow-hidden"
				/>

				<div className="flex flex-col items-center justify-center mt-10 mb-5 space-y-2">
					<h3 className="text-2xl font-semibold">@baonguyen33</h3>
					<h6 className="text-lg">s3877698@rmit.edu.vn</h6>
					<p className="!mt-6 text-lg text-center">
						Hello, my name is Claudia Alves. Welcome to my Profile!
					</p>
				</div>

				<div className="flex items-center justify-between w-full !my-10 text-center">
					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold">25</h3>
						<h6 className="text-lg">Reviews</h6>
					</div>

					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold">40</h3>
						<h6 className="text-lg">Dishes</h6>
					</div>

					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold">6</h3>
						<h6 className="text-lg">Vendors</h6>
					</div>
				</div>

				<div className="flex items-center justify-around w-full">
					<Button content="Edit profile" />
					<Button
						content="Log out"
						className="text-black bg-transparent !border-2 !border-solid !border-black"
					/>
				</div>

				<div>
					<h1 className="my-5 text-2xl font-bold text-center">
						Dishes reviewed
					</h1>

					<div className="grid grid-cols-3 gap-2 place-items-start">
						{Array(10)
							.fill()
							.map((_, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-md cursor-pointer"
								>
									<img
										src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
										alt=""
										className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
