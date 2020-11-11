import React from "react";
import { Context } from "../store/appContext";
import { StripeCheckoutButton } from "../component/stripe_button";
import { CartItem } from "../component/cartItem";

export class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container mx-auto p-4">
						<div className=" d-flex justify-content-Start font-weight-bold">
							<h1>Your Cart</h1>
						</div>
						<div className="d-flex  justify-content-start">
							<div>
								{store.cart.map((cartItem, ind) => (
									<CartItem key={ind} index={ind} item={cartItem} />
								))}
							</div>
							<div className="d-block">
								<h3>Sub Total: {Math.round(actions.getTotal() * 100) / 100}</h3>
								<StripeCheckoutButton price={Math.round(actions.getTotal() * 100) / 100} />
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
