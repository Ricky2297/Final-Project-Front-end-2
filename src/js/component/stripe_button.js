import React, { useContext, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const StripeCheckoutButton = ({ price }) => {
	const { store, actions } = useContext(Context);
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HmKdoGsTlze78bFNFFCQeD31CoL1pX8N0ZaAq4UTeheT19d0yraN1AlGrKNIdciuMsTIwGC5t5LOVU6GiEbpKQ800P8qAeHVu";

	const onToken = token => {
		console.log(token);
		actions.resetCart();
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="AVIATO"
			billingAddress
			shippingAddress
			image=""
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

StripeCheckoutButton.propTypes = {
	price: PropTypes.number
};
