import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../utilities/Button";

const Modal = () => {
	const [isShow, setIsShow] = useState(true);

	return ReactDOM.createPortal(
		<>
			{isShow && (
				<div className="absolute inset-0 z-50 flex items-center justify-center p-5 bg-black bg-opacity-30">
					<div className="p-4 lg:p-8 md:p-8 flex flex-col space-y-4 max-w-[90%] md:max-w-none md:w-2/3 mx-auto rounded-lg bg-slate-200 z-[60] h-[250px] lg:w-2/5 lg:h-[300px] xl:w-1/3">
						<div className="flex flex-col flex-1">
							<h3 className="mb-4 text-lg font-bold md:text-xl xl:text-2xl">
								An verify email has been sent to your email
							</h3>
							<p className="md:text-xl">
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
