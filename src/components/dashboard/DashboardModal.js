import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../utilities/Button";
import axios from "axios";

const DashboardModal = ({ onAdd }) => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		console.log(isFilePicked);
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

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
			// const finalValues = {
			// 	...values,
			// 	image: selectedFile,
			// };

			// console.log(finalValues);

			const postImg = async () => {
				var bodyFormData = new FormData();
				bodyFormData.append("image", selectedFile);
				axios({
					method: "post",
					url: "/api/food/upload-image",
					data: bodyFormData,
					headers: { "Content-Type": "multipart/form-data" },
				})
					.then(function (response) {
						//handle success
						console.log(response);
						console.log(response.data.image.src);
						// setFileLink(response.data.image.src);
						const newValues = {
							...values,
							image: response.data.image.src,
						};

						console.log(newValues);

						onAdd(newValues);
					})
					.catch(function (response) {
						//handle error
						console.log(response);
					});
			};

			postImg();

			// onAdd({
			// 	...values,
			// 	image: "https://res.cloudinary.com/dxvbvzxcb/image/upload/v1656757372/file-upload/tmp-4-1656757396063_qhmk5m.png",
			// });
		},
	});

	return (
		<div className="p-6">
			<h3 className="text-2xl font-bold">Add food</h3>
			<form onSubmit={formik.handleSubmit}>
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

				<div className="my-8">
					<input
						type="file"
						id="myFile"
						name="filename"
						onChange={changeHandler}
					/>
				</div>

				<Button content="submit" className="my-8" />
			</form>
		</div>
	);
};

export default DashboardModal;
