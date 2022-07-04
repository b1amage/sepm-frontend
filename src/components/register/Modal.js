import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../utilities/Button";

const Modal = () => {
	const [isShow, setIsShow] = useState(true);

	return ReactDOM.createPortal(
		<>
			{isShow && (
				<div className="absolute inset-0 z-50 flex items-center justify-center p-5 mt-12 ">
					<div className="p-4 md:p-8 flex flex-col space-y-4 max-w-[90%] md:max-w-none md:w-1/2 ld:w-1/3 mx-auto rounded-lg bg-slate-200 z-[60] h-[250px] text-black-800">
						<div className="flex flex-col flex-1">
							<h3 className="mb-4 text-xl font-bold">
								An verify email has been sent to your email
							</h3>
							<p className="text-black-400">
								Please double check and click on the verify link
								to start using your account on our website
							</p>
						</div>

						<Button
							content="sure"
							onClick={() => setIsShow(false)}
						/>
					</div>
				</div>
			)}
		</>,
		document.querySelector("#root")
	);
};

export default Modal;
