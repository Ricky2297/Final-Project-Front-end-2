import React, { useContext, useState } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedFavorites, setClickedFavorites] = useState(false);
	const [clickedCart, setClickedCart] = useState(false);
	const [clickedUser, setClickedUser] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light  d-flex   ">
			<Link to="/home">
				<a className="navbar-brand" href="">
					<i className="fab fa-aviato fa-7x" />
				</a>
			</Link>
			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="text"
					onKeyPress={e => {
						if (e.key == "Enter") {
							e.preventDefault();
						}
					}}
					placeholder="Search"
					aria-label="Search"
					onChange={e => setSearch(e.target.value)}
					value={search}
				/>
				<button
					className="btn btn-outline-success my-2 my-sm-0 "
					onClick={e => {
						if (search.length > 0) {
							actions.updateSearch(search);
						}
					}}
					type="button">
					Search
				</button>
			</form>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
				<ul className="navbar-nav mr-0">
					<li>{store.loggedin ? <h5>Welcome back, Ricky!</h5> : <h5 className="pr-2">Please log in </h5>}</li>
					<li>
						{/* Log in */}
						<div className={"nav-item dropdown pr-3 " + (showDropdown ? "show" : "")}>
							<button
								className="btn btn-outline-primary dropdown-toggle "
								href="#"
								role="button"
								id="dropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded={clickedUser}
								onClick={() => setClickedUser(!clickedUser)}>
								<i className="fas fa-user" />
							</button>

							<div
								className={"dropdown-menu  " + (clickedUser ? "show" : "")}
								aria-labelledby="dropdownMenuLink">
								{store.loggedin ? (
									<>
										<Link to="/account">
											<span className="dropdown-item" href="#">
												Account
											</span>
										</Link>
										<Link to="/home">
											<span className="dropdown-item" onClick={() => actions.login(false)}>
												Log Out
											</span>
										</Link>
									</>
								) : (
									<>
										<Link to="/login">
											<span className="dropdown-item" href="#">
												Log In
											</span>
										</Link>
										<Link to="/register">
											<span className="dropdown-item" href="#">
												Sign Up
											</span>
										</Link>
									</>
								)}
							</div>
						</div>
					</li>

					{/* Boton Favorito 1 */}
					<li className="pr-3">
						<div className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
							<button
								className="faves btn btn-outline-danger nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded={clickedFavorites}
								onClick={() => setClickedFavorites(!clickedFavorites)}>
								<i className="fas fa-heart" />{" "}
								<span className="badge badge-danger">{store.favorites.length}</span>
							</button>
							<div
								id="dropdowm"
								className={
									store.favorites.length > 0
										? "dropdown-menu " + (clickedFavorites ? "show" : "")
										: "d-none"
								}
								aria-labelledby="navbarDropdown">
								{store.favorites.length > 0
									? store.favorites.map((elm, index) => (
											<li
												key={index}
												className="dropdown-item d-flex align-items-center justify-content-between text-danger">
												<Link to={`/details/${index + 1}`}>{elm.name}</Link>
												&nbsp;&nbsp;
												<i
													className="fas fa-backspace"
													onClick={() => actions.deleteFromFavorites(elm)}
												/>
											</li>
									  ))
									: null}
							</div>
						</div>
					</li>
					{/* Cart */}
					<li className="pr-3">
						<Link to="/cart">
							<button
								className="faves btn btn-outline-warning nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								// onClick={() => props.history.push("/cart")}
							>
								<i className="fas fa-shopping-cart" />
								<span className="badge badge-danger">{store.cart.length}</span>
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	location: PropTypes.object,
	history: PropTypes.object
};
