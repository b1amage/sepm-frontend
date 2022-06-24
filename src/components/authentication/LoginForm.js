import React from "react";

const LoginForm = () => {
	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className="block mx-auto px-5 py-3 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-blur-md backdrop-saturate-200 max-w-[500px]"
		>
			<div className="my-4 space-y-4 form-control">
				<label htmlFor="username label block font-bold text-3xl">
					Username
				</label>

				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
					autocomplete="off"
					className="border outline-none input input-bordered border-darkPurple dark:border-white"
				/>
			</div>

			<div className="my-4 space-y-4 form-control">
				<label htmlFor="password label block font-bold text-3xl">
					Password
				</label>

				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					autocomplete="off"
					className="border outline-none input input-bordered border-darkPurple dark:border-white"
				/>
			</div>

			<button className="w-full my-3 text-white transition-all duration-300 border-none hover:bg-purple btn bg-darkPurple dark:bg-pink dark:hover:backdrop-brightness-120">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
