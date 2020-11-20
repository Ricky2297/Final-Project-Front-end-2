import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserDetails = props => {
	const { store, actions } = useContext(Context);
	const [updateDetails, setUpdateDetails] = useState({
		f_name: store.user.f_name,
		l_name: store.user.l_name,
		password: store.user.password,
		email: store.user.email,
		phone: store.user.phone,
		id: store.user.id
	});

	const handleChange = e => {
		setUpdateDetails({ ...updateDetails, [e.target.name]: e.target.value });
	};

	return (
		<div className="container-fluid p-4">
			<h1 className=" d-flex justify-content-center font-weight-bold">Rickys Details</h1>

			<div>
				<form className=" d-flex justify-content-center font-weight-bold">
					<div id="input" className="inline-block">
						<div className="form-group col-md-6 text-left">
							<label htmlFor="firstName">
								<strong>First Name</strong>
							</label>
							<input
								type="text"
								name="f_name"
								id="firstName"
								className="form-control"
								value={updateDetails.f_name}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group col-md-6 text-left">
							<label htmlFor="firstName">
								<strong>Last Name</strong>
							</label>
							<input
								type="text"
								name="l_name"
								id="lastName"
								className="form-control"
								value={updateDetails.l_name}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group col-md-6 text-left">
							<label htmlFor="email">
								<strong>Email</strong>
							</label>
							<input
								type="text"
								name="email"
								id="email"
								className="form-control"
								value={updateDetails.email}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6 text-left">
							<label htmlFor="Phone Number">
								<strong>Phone Number</strong>
							</label>
							<input
								type="text"
								name="phone"
								id="phone"
								className="form-control"
								value={updateDetails.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group col-md-6 text-left">
							<label htmlFor="password">
								<strong>Password</strong>
							</label>
							<input
								type="text"
								name="password"
								id="password"
								className="form-control"
								value={updateDetails.password}
								onChange={handleChange}
							/>
						</div>
						<div className="text-center">
							<button className="btn btn-primary">SAVE</button>
						</div>

						<div className=" form-row d-flex justify-content-between">
							<div className="form-group col-md-6">
								<div id="radiobutton" className=" col-12 col-sm-9 col-lg-7 bg-secondary mt-4">
									<div className="mt-1" />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
