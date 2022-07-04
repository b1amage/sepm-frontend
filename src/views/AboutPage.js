import React from "react";
import AboutCard from "../components/about/AboutCard";

import baoImg from "../assets/img/bao-img.png";
import longImg from "../assets/img/long-img.png";
import duyImg from "../assets/img/duy-img.png";
import tuanImg from "../assets/img/tuan-img.png";

import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/scss";

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
		name: "Nguyen Anh Duy",
		role: "Frontend Developer",
		img: duyImg,
		sid: "s3878141",
		tasks: ["Find UIs", "Improve UX", "Paper work"],
	},
	{
		name: "Dao Kha Tuan",
		role: "Backend Developer",
		img: tuanImg,
		sid: "s3878694",
		tasks: [
			"Build server",
			"Create tokens",
			"Build database",
			"Help in authentication",
		],
	},
	{
		name: "Nguyen Trong Minh Long",
		role: "Backend Developer",
		img: longImg,
		sid: "s3878694",
		tasks: ["Write unit test", "Help create model"],
	},
];

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const AboutPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="container items-center justify-center h-screen px-10 py-5 mx-auto"
		>
			<h3 className="py-10 mb-12 text-6xl font-bold text-center uppercase lg:text-8xl">
				Members
			</h3>

			<Swiper
				grabCursor="true"
				spaceBetween={40}
				slidesPerView="auto"
				centeredSlides
				navigation
				pagination={{ clickable: true }}
				effect="coverflow"
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
			>
				{members.length > 0 &&
					members.map((item, index) => (
						<SwiperSlide key={index}>
							<AboutCard
								name={item.name}
								role={item.role}
								img={item.img}
								sid={item.sid}
								tasks={item.tasks}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</motion.div>
	);
};

export default AboutPage;
