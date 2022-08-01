import React from "react";
import NavBar from "../components/header/NavBar";
import ImgFrame from "../utilities/ImgFrame";
import baoImg from "../assets/img/bao-img.png";
import Button from "../utilities/Button";
import UserInfo from "../components/profile/UserInfo";
import UserReview from "../components/profile/UserReview";

const ProfilePage = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="page-container">
			{!user ? (
				<h1>Please login</h1>
			) : (
				<>
					<NavBar />

					<div className="flex flex-col items-center justify-center my-10 space-y-4">
						<ImgFrame
							src={baoImg}
							className="rounded-full w-[200px] h-[200px] overflow-hidden"
						/>

						<UserInfo username={user.username} email={user.email} />

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

						<UserReview />
					</div>
				</>
			)}
		</div>
	);
};

export default ProfilePage;
