import React from "react";
import { Link } from "react-router-dom";
export class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid p-4">
				<div className="card text-center">
					<div className="card-header d-flex justify-content-Start font-weight-bold">
						<h1>CREATE AN ACCOUNT</h1>
					</div>

					<div className="card-body">
						<form>
							<div className="form-row">
								<div className="form-group col-md-5 text-left">
									<div className="form-row">
										<div className="form-group col-md-6 text-left">
											<label htmlFor="firstName">
												<strong>First Name</strong>
											</label>
											<input type="text" className="form-control" id="firstName" />
										</div>
										<div className="form-group col-md-6 text-left">
											<label htmlFor="lastname">
												<strong>Last Name</strong>
											</label>
											<input type="text" className="form-control" id="lastname" />
										</div>
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
										<div className="form-group col-md-6 text-left">
											<label htmlFor="password">
												<strong>Comfirm Password </strong>
											</label>
											<input type="password" className="form-control" id="password" />
										</div>
									</div>
								</div>
							</div>

							<div className="form-row d-flex justify-content-between">
								<div className="form-group col-md-6">
									<div id="radiobutton" className=" col-12 col-sm-9 col-lg-7 bg-secondary mt-4">
										<div className="mt-1" />
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="card-footer text-muted d-flex justify-content-center">
						<Link to="/login">
							<button href="#" className="btn btn-primary">
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
