import React from "react";

const UserInfo = ({ username, email }) => {
	return (
		<>
			{username && email && (
				<div className="flex flex-col items-center justify-center !mt-8 mb-5 space-y-2 md:!mt-12">
					<h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
						@{username}
					</h3>
					<h6 className="text-lg">{email}</h6>
					{/* <p className="!mt-6 text-lg text-center">
						Hello, my name is Claudia Alves. Welcome to my Profile!
					</p> */}
				</div>
			)}

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
		</>
	);
};

export default UserInfo;
