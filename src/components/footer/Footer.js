import React from "react";
import rmit from "../../assets/svg/rmit.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="p-4 pt-0 sm:p-6 lg:text-xl">
			<div className="md:flex md:flex-col md:justify-between">
				<div className="mb-6 md:mr-8 md:mb-0">
					<li href="" className="flex items-center mb-7">
						<img src={rmit} className="h-8 mr-3" alt="" />
						<span className="self-center text-2xl font-semibold md:text-3xl whitespace-nowrap dark:text-white">
							RMIT Team
						</span>
					</li>
				</div>
				<div className="grid grid-cols-2 gap-y-6 md:gap-x-1 gap-x-8 sm:gap-6 sm:grid-cols-3">
					<div className="md:px-8">
						<h2 className="mb-2 text-sm font-bold text-left text-gray-900 uppercase lg:text-[20px] dark:text-white">
							Resources
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-2">
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
					<div className="md:px-8">
						<h2 className="mb-2 text-sm font-bold text-gray-900 uppercase lg:text-[20px] dark:text-white">
							Follow us
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-2">
								<a
									href="https://github.com/whisky-lover/sepm-frontend"
									className="hover:underline "
								>
									Github
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1 md:px-8">
						<h2 className="w-full mb-2 text-sm font-bold text-left text-gray-900 uppercase lg:text-[20px] dark:text-white">
							Legal
						</h2>
						<ul className="w-full text-left text-gray-600 dark:text-gray-400">
							<li className="mb-2">
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
