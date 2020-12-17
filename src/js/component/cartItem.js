import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartItem = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container  d-flex  justify-content-start">
			<div id="cardCart" className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={props.item.img} id="cartBody" className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.item.name}</h5>

							<h6>
								Price: &nbsp;
								{props.item.price}
							</h6>
							<h6>
								Continent: &nbsp;
								{props.item.continent}
							</h6>
							<h6>Qty: 1</h6>
							<h6>ID: 123456</h6>

							<button
								onClick={() => actions.deleteFromCart(props.item)}
								type="button"
								className="btn btn-secondary ">
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.object,

	index: PropTypes.number
};
