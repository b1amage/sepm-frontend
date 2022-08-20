import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../utilities/Button";

const EditModal = ({ closeModal, id, updateReview }) => {
	const [review, setReview] = useState("");
	const [title, setTitle] = useState("");
	const [star, setStar] = useState(0);

	return ReactDOM.createPortal(
		<div className="absolute  inset-0 min-h-[200vh] flex items-center justify-center bg-black bg-opacity-30">
			<div className="bg-white rounded-lg flex flex-col space-y-5 shadow-2xl p-5 text-black w-[400px] h-[500px]">
				<h3 className="my-5 text-3xl font-semibold">Edit review</h3>
				<form
					className="flex flex-col space-y-5"
					onSubmit={(e) => {
						e.preventDefault();

						// const update = async () => {
						updateReview(id, title, star, review);
						// 	const res = await axios.patch(`/api/review/${id}`);
						// 	console.log(res);
						// };

						// update();

						closeModal();
					}}
				>
					<input
						type="text"
						className="w-full input md:text-lg"
						placeholder="Title for your review"
						onChange={(e) => setTitle(e.target.value)}
					/>

					<input
						type="text"
						className="w-full input md:text-lg"
						placeholder="How would you rate this dishes out of 5?"
						onChange={(e) => {
							console.log(e.target.value);
							if (isNaN(e.target.value)) return;
							setStar(e.target.value * 1);
						}}
					/>

					<input
						type="text"
						className="w-full input md:text-lg"
						placeholder="Any review on this dishes?"
						onChange={(e) => setReview(e.target.value)}
					/>

					<Button
						content="review"
						type="submit"
						className="w-1/2 md:w-1/3 !mt-12 lg:w-full"
					/>
				</form>
			</div>
		</div>,
		document.querySelector("body")
	);
};

export default EditModal;
