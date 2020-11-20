import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "./userDetails";
import { UserOrders } from "./userOrders";
import { UserTransactions } from "./userTransactions";
export const Account = props => {
	const [show, setShow] = useState(false);
	return (
		<div className="container-fluid p-4">
			<h1 className=" d-flex justify-content-center font-weight-bold">Welcome Back Ricky</h1>
			<div id="section" className="nav nav-pills d-flex justify-content-center font-weight-bold">
				<div className="nav-item">
					<p>My Details</p>

					<button id="visit1" className=" btn btn-primary" onClick={() => setShow("details")}>
						Visit
					</button>
				</div>
				<div className="nav-item">
					<p>My Orders</p>

					<button id="visit2" className="btn btn-primary" onClick={() => setShow("orders")}>
						Visit
					</button>
				</div>
				<div className="nav-item">
					<p>My Transaction</p>

					<button id="visit3" className="btn btn-primary" onClick={() => setShow("transactions")}>
						Visit
					</button>
				</div>
			</div>

			<div className="pt-0 mt-0">
				{show == "details" ? (
					<div className="" id="details">
						<UserDetails />
					</div>
				) : show == "orders" ? (
					<div className="" id="orders">
						<UserOrders />
					</div>
				) : show == "transactions" ? (
					<div className="" id="transactions">
						<UserTransactions />
					</div>
				) : null}
			</div>
		</div>
	);
};
