import React from "react";
import star from "../../assets/svg/star.svg";

const UserReview = () => {
	return (
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
	);
};

export default UserReview;
