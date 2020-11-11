import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Login = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid p-4">
			<div className="card text-center">
				<div className="card-header d-flex justify-content-Start font-weight-bold">
					<h1>MY ACCOUNT LOGIN</h1>
				</div>

				<div className="card-body">
					<form>
						<div className="form-row">
							<div className="form-group col-md-5 text-left">
								<div className="form-row">
									<div className="form-group col-md-6 text-left">
										<label htmlFor="email">
											<strong>Email</strong>
										</label>
										<input type="text" className="form-control" id="email" />
									</div>
									<div className="form-group col-md-6 text-left">
										<label htmlFor="password">
											<strong>Password</strong>
										</label>
										<input type="password" className="form-control" id="password" />
									</div>
								</div>
							</div>
						</div>

						<div className=" form-row d-flex justify-content-between">
							<div className="form-group col-md-6">
								<div id="radiobutton" className=" col-12 col-sm-9 col-lg-7 bg-secondary mt-4">
									<div className="mt-1" />
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="card-footer text-muted d-flex justify-content-center">
					<Link to="/account">
						<button onClick={() => actions.login(true)} href="#" className="btn btn-primary">
							Log in
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
