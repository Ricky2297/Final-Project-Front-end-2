import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}

	componentDidMount = () => {
		const { product } = this.props.location.state;
		this.setState({ results: product });
	};
	render() {
		console.log("Results: ", this.state.results);
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container productDetails">
						<div className="row">
							<div className="col-6">
								<img src={this.props.location.state.product.img} className="productImage" />
							</div>
							<div className="col-6">
								<div className="text-center m-3">
									<h2 className="text-dark">{this.props.location.state.product.name}</h2>
									<p className="text-secondary">{this.props.location.state.product.description}</p>
									<button
										className="nav-item btn btn-outline-primary"
										onClick={() => actions.addToCart(this.props.location.state.product)}>
										<i className="fas fa-shopping-cart" />
									</button>
									<button
										type="button"
										id="like"
										className="btn btn-outline-success mx-2"
										onClick={() => actions.addFavorites(this.props.location.state.product.name)}>
										{<i className="fas fa-heart" />}
									</button>
								</div>
							</div>
						</div>
						<div className="row ml-1 mr-1 mt-4 background border-top border-secondary">
							<div className="col-12 d-flex justify-content-between text-secondary text-center">
								<div className=" p-2 m-3">
									<h6>Name</h6>
									<p>{this.props.location.state.product.name}</p>
								</div>
								<div className=" m-3 p-2">
									<h6>Price</h6>
									<p className="text-center">{this.props.location.state.product.price}</p>
								</div>
								<div className=" p-2 m-3">
									<h6>Continent</h6>
									<p>{this.props.location.state.product.continent}</p>
								</div>
								<div className=" p-2 m-3">
									<h6>Country</h6>
									<p>{this.props.location.state.product.country}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
ProductDetails.propTypes = {
	product: PropTypes.object,
	location: PropTypes.object
};
