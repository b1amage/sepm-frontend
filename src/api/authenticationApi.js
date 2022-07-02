import axiosClient from "./axiosClient";

const authenticationApi = {
	async register(values) {
		const url = "/api/auth/register";
		try {
			const response = await axiosClient.post(url, values);
			console.log("in authentication api", response);
			return response;
		} catch (error) {
			console.log(error);
		}
	},

	async login(values, navigate) {
		try {
			const response = await axiosClient.post("/api/auth/login", values);
			console.log(response);
			navigate(`/otp/${values.username}/${response.data.hash}`);
		} catch (error) {
			console.log(error);
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
};

export default authenticationApi;
