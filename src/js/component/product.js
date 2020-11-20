import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Product = props => {
	const { store, actions } = useContext(Context);
	const found = store.favorites.find(element => element.name == props.product.name);
	const foundCart = store.cart.find(element => element.name == props.product.name);
	return (
		<div className="product d-inline-flex align-self-start pr-5 ">
			{/* post */}
			<div id="product" className="card mt-5">
				<div>
					<img className="card-img-top" src={props.product.img} alt="Card image cap" />
				</div>
				<div id="productInfo" className="card-body p-2">
					<h5 className="card-title">{props.product.name}</h5>
					<h5 className="card-title">{props.product.continent}</h5>
					<h5 className="card-title">{props.product.country}</h5>

					<Link
						to={{
							pathname: `/details/${props.index + 1}`,
							state: {
								product: props.product
							}
						}}>
						<button id="learnMore" href="#" className="mt-2 btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						id="cartFront"
						className="nav-item btn btn-outline-primary "
						onClick={foundCart ? null : () => actions.addToCart(props.product)}>
						<i className="fas fa-shopping-cart" />
					</button>
					<button
						id="likeFront"
						type="button"
						className="btn btn-outline-success mb-0"
						onClick={found ? null : () => actions.addFavorites(props.product)}>
						{<i className="fas fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};
Product.propTypes = {
	product: PropTypes.object,
	index: PropTypes.number
};
