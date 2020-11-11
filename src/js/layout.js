import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ContinentView } from "./views/continentView";
import { ProductDetails } from "./views/productDetails";
import { Register } from "./views/register";
import { Login } from "./views/login";
import { Cart } from "./views/cart";
import { Account } from "./views/account";
import { UserDetails } from "./views/userDetails";
import { UserOrders } from "./views/userOrders";
import { UserTransactions } from "./views/userTransactions";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route path="/usertransaction" component={UserTransactions} />
						<Route path="/userorders" component={UserOrders} />
						<Route path="/userdetails" component={UserDetails} />
						<Route path="/account" component={Account} />
						<Route path="/details/:id" component={ProductDetails} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/cart" component={Cart} />
						<Route path="/continent" component={ContinentView} />
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
