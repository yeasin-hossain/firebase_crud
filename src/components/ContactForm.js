import React, { useState, useEffect } from 'react';

const ContactsForm = (props) => {
	const initialfieldvalues = {
		fullName: '',
		mobile: '',
		email: '',
		address: '',
	};

	var [values, setValues] = useState(initialfieldvalues);

	useEffect(() => {
		if (props.currentId == '')
			setValues({
				...initialfieldvalues,
			});
		else
			setValues({
				...props.contactObjects[props.currentId],
			});
	}, [props.currentId, props.contactObjects]);

	const handleInputChange = (e) => {
		var { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		props.addOrEdit(values);
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<div className="form-group input-group">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-user"></i>
						</div>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Full Name"
						name="fullName"
						value={values.fullName}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-row">
					<div className="form-group input-group col-md-6">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fas fa-mobile"></i>
							</div>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Mobile"
							name="mobile"
							value={values.mobile}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-group input-group col-md-6">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fas fa-envelope"></i>
							</div>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							name="email"
							value={values.email}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="form-grop">
					<textarea
						name="address"
						placeholder="Address"
						className="form-control"
						value={values.address}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-grop">
					{/* <input type="submit" /> */}
					<button className="btn btn-primary btn-block">
						{props.currentId == '' ? 'Save' : 'Update'}
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactsForm;
