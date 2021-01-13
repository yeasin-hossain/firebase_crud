import React, { useState, useEffect } from 'react';
import ContactsForm from './ContactForm';
import database from '../firebase';

const Contacts = () => {
	var [contactObjects, setContactObjects] = useState({});
	var [currentId, setCurrentId] = useState({});

	useEffect(() => {
		database.child('contacts').on('value', (snapshot) => {
			if (snapshot.val() != null)
				setContactObjects({
					...snapshot.val(),
				});
			else setContactObjects({});
		});
	}, []);

	const addOrEdit = (obj) => {
		if (currentId == ' ')
			database.child('contacts').push(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
		else
			database.child(`contacts/${currentId}`).set(obj, (err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
	};

	const onDelete = (key) => {
		if (window.confirm('Are you sure to delete this record?')) {
			database.child(`contacts/${key}`).remove((err) => {
				if (err) console.log(err);
				else setCurrentId('');
			});
		}
	};

	return (
		<>
			<div className="card w-75">
				<div className="card-body bg-success p-5">
					<h5 className="card-title text-center">Register</h5>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5">
					<ContactsForm {...{ addOrEdit, currentId, contactObjects }} />
				</div>
				<div className="col-md-7">
					<table className="table table-borderless table-stripped">
						<thead className="thead-light">
							<tr>
								<th>Full Name</th>
								<th>Mobile</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(contactObjects).map((id) => {
								return (
									<tr key={id}>
										<td>{contactObjects[id].fullName}</td>
										<td>{contactObjects[id].mobile}</td>
										<td>{contactObjects[id].email}</td>
										<td>
											<a
												className="btn text-primary"
												onClick={() => {
													setCurrentId(id);
												}}
											>
												<i className="fas fa-pencil-alt"></i>
											</a>
											<a
												className="btn text-danger"
												onClick={() => {
													onDelete(id);
												}}
											>
												<i className="fas fa-trash-alt"></i>
											</a>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Contacts;
