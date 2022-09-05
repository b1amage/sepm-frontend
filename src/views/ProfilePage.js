import React from "react";
import NavBar from "../components/header/NavBar";

import Button from "../utilities/Button";
import UserInfo from "../components/profile/UserInfo";

import authenticationApi from "../api/authenticationApi";
import Footer from "../components/footer/Footer";
import RequireLogin from "../components/profile/RequireLogin";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	const logOut = () => {
		authenticationApi.logOut();
		navigate("/");
	};

	return (
		<div className="page-container">
			{!user ? (
				<RequireLogin />
			) : (
				<>
					<NavBar />

					<div className="flex flex-col items-center justify-center h-[50vh] my-10 space-y-4">
						{/* <ImgFrame
							src={baoImg}
							className="rounded-full w-[200px] h-[200px] overflow-hidden"
						/> */}

						<UserInfo username={user.username} email={user.email} />

						<div className="flex items-center justify-around w-full md:w-1/2 lg:w-[30%] md:mx-auto">
							{/* <Button
								content="Edit profile"
								className="min-w-[130px] md:min-w-[150px] lg:min-w-[180px]"
							/> */}
							<Button
								onClick={logOut}
								content="Log out"
								className="text-black dark:text-white bg-transparent min-w-[130px] md:min-w-[150px] lg:min-w-[180px] !border-2 !border-solid !border-black dark:!border-white hover:bg-transparent hover:text-black"
							/>
						</div>

						{/* <UserReview /> */}
					</div>
					<Footer />
				</>
			)}
		</div>
	);
};

export default ProfilePage;
