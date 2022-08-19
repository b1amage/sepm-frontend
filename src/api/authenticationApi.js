import axiosClient from "./axiosClient";

const authenticationApi = {
	async register(values, navigate) {
		const url = "/api/auth/register";
		try {
			const response = await axiosClient.post(url, values);
			console.log("in authentication api", response);
			return response;
		} catch (error) {
			console.log(error);
			navigate(`/fail/${error.response.data.msg}`);
		}
	},

	async login(values, navigate) {
		try {
			const response = await axiosClient.post("/api/auth/login", values);
			console.log(response);
			navigate(`/otp/${values.username}/${response.data.hash}`);
		} catch (error) {
			// console.log(error);
			navigate(`/fail/${error.response.data.msg}`);
		}
	},

	async verifyToken(query, setError) {
		try {
			const response = await axiosClient.post("/api/auth/verify-email", {
				verificationToken: query.get("token"),
			});

			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error.response);
			setError(true);
		}
	},

	async verifyOTP(values, navigate) {
		console.log("verify called");
		await axiosClient
			.post("/api/auth/verify-OTP", values, { withCredentials: true })
			.then(function (response) {
				console.log(response);
				const user = response.data.user;
				localStorage.setItem("user", JSON.stringify(user));
				const destination = user.email.includes("@rmit")
					? `/profile`
					: `/dashboard`;
				navigate(destination);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	async resendOTP(values) {
		console.log("resend called");

		await axiosClient
			.post("/api/auth/verify-OTP", values, {
				withCredentials: true,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (err) {
				console.log(err);
			});
	},
	async logOut() {
		await axiosClient
			.delete("/api/auth/logout")
			.then(function (response) {
				console.log(response);
				localStorage.removeItem("user");
			})
			.catch(function (err) {
				console.log(err);
			});
	},

	isLogin() {
		return JSON.parse(localStorage.getItem("user"));
	},
};

export default authenticationApi;
