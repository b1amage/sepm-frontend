import React from "react";
import AboutCard from "../components/about/AboutCard";

import { members } from "../content/MemberContent";

import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/scss";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const AboutPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
			className="items-center justify-center h-screen px-10 py-5 page-container"
		>
			<NavBar />
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

			<Footer />
		</motion.div>
	);
};

export default AboutPage;
