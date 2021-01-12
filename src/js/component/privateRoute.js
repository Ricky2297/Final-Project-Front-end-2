import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { store, actions } = useContext(Context);
	return (
		<Route
			{...rest}
			render={routeProps => (store.loggedin ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />)}
		/>
	);
};
