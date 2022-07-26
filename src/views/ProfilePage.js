import React from "react";
import NavBar from "../components/header/NavBar";
import ImgFrame from "../utilities/ImgFrame";
import baoImg from "../assets/img/bao-img.png";
import Button from "../utilities/Button";
import star from "../assets/svg/star.svg";

const ProfilePage = () => {
	return (
		<div className="page-container">
			<NavBar />

			<div className="flex flex-col items-center justify-center my-10 space-y-4">
				<ImgFrame
					src={baoImg}
					className="rounded-full w-[200px] h-[200px] overflow-hidden"
				/>

				<div className="flex flex-col items-center justify-center !mt-8 mb-5 space-y-2 md:!mt-12">
					<h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
						@baonguyen33
					</h3>
					<h6 className="text-lg">s3877698@rmit.edu.vn</h6>
					<p className="!mt-6 text-lg text-center">
						Hello, my name is Claudia Alves. Welcome to my Profile!
					</p>
				</div>

				<div className="flex items-center justify-between w-full !my-10 text-center md:w-3/5 md:mx-auto">
					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
							25
						</h3>
						<h6 className="text-lg">Reviews</h6>
					</div>

					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
							40
						</h3>
						<h6 className="text-lg">Dishes</h6>
					</div>

					<div className="flex flex-col items-center justify-center space-y-3">
						<h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
							6
						</h3>
						<h6 className="text-lg">Vendors</h6>
					</div>
				</div>

				<div className="flex items-center justify-around w-full md:w-1/2 lg:w-[30%] md:mx-auto">
					<Button
						content="Edit profile"
						className="min-w-[130px] md:min-w-[150px] lg:min-w-[180px]"
					/>
					<Button
						content="Log out"
						className="text-black bg-transparent min-w-[130px] md:min-w-[150px] lg:min-w-[180px] !border-2 !border-solid !border-black hover:bg-transparent hover:text-black"
					/>
				</div>

				<div>
					<h1 className="my-5 text-2xl font-bold text-center md:text-3xl lg:text-4xl">
						Dishes reviewed
					</h1>

					<div className="grid grid-cols-3 gap-2 place-items-start">
						{Array(10)
							.fill()
							.map((_, index) => (
								<div
									key={index}
									className="relative overflow-hidden rounded-md cursor-pointer group"
								>
									<img
										src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
										alt=""
										className="object-cover w-full h-full transition-all duration-300 hover:scale-125"
									/>
									<div className="absolute bottom-0 w-full h-full md:h-[120px] lg:h-[150px] bg-black bg-opacity-25 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500">
										<div>
											<div className="flex flex-col flex-1">
												<h3 className="text-lg font-semibold text-white md:text-2xl lg:text-3xl">
													Pancake
												</h3>
												<p className="text-white lg:text-black md:text-lg lg:text-xl">
													Sorento
												</p>
											</div>

											<div className="flex space-x-2">
												{Array(5)
													.fill()
													.map((_, index) => (
														<div key={index}>
															<img
																src={star}
																alt=""
																className="w-5 h-5 lg:h-3 lg:w-3"
															/>
														</div>
													))}
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
