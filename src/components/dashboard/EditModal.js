import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../utilities/Button";
import ReactDOM from "react-dom";

const EditModal = ({ onEdit }) => {
	const id = localStorage.getItem("id");

	const formik = useFormik({
		initialValues: {
			foodName: "",
			location: "",
			price: 0,
			category: "",
			prepareTime: 15,
			type: "",
		},
		validationSchema: Yup.object({
			foodName: Yup.string().required("Required"),
			location: Yup.string().required("Required"),
			price: Yup.number().required("Required"),
			prepareTime: Yup.number().required("Required"),
		}),
		onSubmit: (values) => {
			onEdit(id, {
				...values,
				image: "https://res.cloudinary.com/dxvbvzxcb/image/upload/v1656757372/file-upload/tmp-4-1656757396063_qhmk5m.png",
				taste: [],
			});
		},
	});

	return ReactDOM.createPortal(
		<div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 bg-black bg-opacity-40">
			<h3 className="p-5 text-2xl font-bold text-white bg-red">
				Edit food
			</h3>
			<form
				className="p-5 bg-white w-[400px] rounded-lg"
				onSubmit={formik.handleSubmit}
			>
				<div>
					<label className="label" htmlFor="foodName">
						Food name
					</label>
					<input
						value={formik.values.foodName}
						onChange={formik.handleChange}
						type="text"
						id="foodName"
						name="foodName"
						className="w-full input"
					/>
				</div>

				<div>
					<label className="label" htmlFor="location">
						Location
					</label>
					<input
						value={formik.values.location}
						onChange={formik.handleChange}
						type="text"
						id="location"
						name="location"
						className="w-full input"
					/>
				</div>

				<div>
					<label className="label" htmlFor="price">
						Price
					</label>
					<input
						value={formik.values.price}
						onChange={formik.handleChange}
						type="text"
						id="price"
						name="price"
						className="w-full input"
					/>
				</div>

				<div>
					<label className="label" htmlFor="prepareTime">
						Prepare time
					</label>
					<input
						value={formik.values.prepareTime}
						onChange={formik.handleChange}
						type="text"
						id="prepareTime"
						name="prepareTime"
						className="w-full input"
					/>
				</div>
				<div className="flex items-center gap-5">
					<div>
						<label className="label" htmlFor="category">
							Category
						</label>
						<select
							value={formik.values.category}
							onChange={formik.handleChange}
							name="category"
							className="w-full max-w-xs select"
							id="category"
						>
							<option>Soup</option>
							<option>Rice</option>
							<option>Bread</option>
							<option>Noodle</option>
							<option>Dessert</option>
						</select>
					</div>

					<div>
						<label className="label" htmlFor="type">
							Type
						</label>
						<select
							value={formik.values.type}
							onChange={formik.handleChange}
							name="type"
							className="w-full max-w-xs select"
							id="type"
						>
							<option>Breakfast</option>
							<option>Lunch</option>
							<option>Dinner</option>
						</select>
					</div>
				</div>

				<Button content="submit" className="my-8" />
			</form>
		</div>,
		document.querySelector("#root")
	);
};

export default EditModal;
