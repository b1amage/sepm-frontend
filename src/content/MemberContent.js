import baoImg from "../assets/img/bao-img.png";
import tuanImg from "../assets/img/tuan-img.png";
import duyImg from "../assets/img/duy-img.png";
import longImg from "../assets/img/long-img.png";

export const members = [
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
