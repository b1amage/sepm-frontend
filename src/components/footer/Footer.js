import React from "react";
import rmit from "../../assets/svg/rmit.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="p-4 mt-4 border-t sm:p-6">
			<div className="md:flex md:justify-between">
				<div className="mb-6 md:mb-0">
					<a
						href="https://flowbite.com/"
						className="flex items-center"
					>
						<img
							src={rmit}
							className="h-8 mr-3"
							alt="FlowBite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							RMIT Team
						</span>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Resources
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<Link to="/about" className="hover:underline">
									About us
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/whisky-lover/sepm-frontend"
									className="hover:underline"
								>
									About project
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Follow us
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<a
									href="https://github.com/whisky-lover/sepm-frontend"
									className="hover:underline "
								>
									Github
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
							Legal
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-4">
								<a
									href="https://github.com/whisky-lover/sepm-frontend/blob/main/README.md"
									className="hover:underline"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="https://github.com/whisky-lover/sepm-frontend/blob/main/README.md"
									className="hover:underline"
								>
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022{" "}
					<a href="https://flowbite.com/" className="hover:underline">
						RMIT Team
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
