import React from "react";
import AboutCard from "../components/about/AboutCard";
import baoImg from "../assets/bao-img.png";

const members = [
	{
		name: "Nguyen Luu Quoc Bao",
		role: "Frontend Developer",
		img: baoImg,
		sid: "s3877698",
		tasks: [
			"Build login page",
			"Build OTP page",
			"Build about page",
			"Build register page",
		],
	},
	{
		name: "Dao Kha Tuan",
		role: "Backend Developer",
		img: baoImg,
		sid: "s3878694",
		tasks: [
			"Build server",
			"Create tokens",
			"Build database",
			"Help in authentication",
		],
	},
];

const AboutPage = () => {
	return (
		<div className="container px-10 py-5 mx-auto">
			{members.length > 0 &&
				members.map((item, index) => (
					<AboutCard
						key={index}
						name={item.name}
						role={item.role}
						img={baoImg}
						sid={item.sid}
						tasks={item.tasks}
					/>
				))}
		</div>
	);
};

export default AboutPage;
