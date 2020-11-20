import React, { useContext, useState, useEffect, useRef } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedFavorites, setClickedFavorites] = useState(false);
	const [clickedCart, setClickedCart] = useState(false);
	const [clickedUser, setClickedUser] = useState(false);
	const [search, setSearch] = useState("");
	const signInRef = useRef();
	const favRef = useRef();
	const history = useHistory();
	useEffect(
		() => {
			const handleDropUp = event => {
				if (signInRef.current.contains(event.target)) {
					return;
				}
				setShowDropdown(false);
			};
			if (showDropdown) {
				document.addEventListener("mousedown", handleDropUp);
			} else {
				document.removeEventListener("mousedown", handleDropUp);
			}
			return () => document.removeEventListener("mousedown", handleDropUp);
		},
		[showDropdown]
	);
	useEffect(
		() => {
			const handleClickOutsideFav = event => {
				if (favRef.current.contains(event.target)) {
					return;
				}
				setClickedFavorites(false);
			};
			if (clickedFavorites) {
				document.addEventListener("mousedown", handleClickOutsideFav);
			} else {
				document.removeEventListener("mousedown", handleClickOutsideFav);
			}
			return () => document.removeEventListener("mousedown", handleClickOutsideFav);
		},
		[clickedFavorites]
	);
	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-light  d-flex   ">
			<Link to="/home" className="navbar-brand">
				<i className="fab fa-aviato fa-7x" />
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
					className="btn btn-outline-primary my-2 my-sm-0 "
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
					<li>
						{store.loggedin ? (
							<h5>Welcome back, Ricky! &nbsp;</h5>
						) : (
							<h5 className="pr-5">Please log in! </h5>
						)}
					</li>
					<li>
						{/* Log in */}
						<div ref={signInRef} className={"nav-item dropdown pr-3 " + (showDropdown ? "show" : "")}>
							<button
								className="btn btn-outline-primary dropdown-toggle "
								href="#"
								role="button"
								id="dropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded={showDropdown}
								onClick={() => setShowDropdown(!showDropdown)}>
								<i className="fas fa-user" />
							</button>
							<div
								className={"dropdown-menu dropdown-menu-right  " + (showDropdown ? "show" : "")}
								aria-labelledby="dropdownMenuLink">
								{store.loggedin ? (
									<>
										<span
											onClick={() => {
												setShowDropdown(!showDropdown);
												history.push("/account");
											}}
											className="dropdown-item">
											Account
										</span>
										<span
											onClick={() => {
												setShowDropdown(!showDropdown);
												actions.login(false);
												history.push("/home");
											}}
											className="dropdown-item">
											Log Out
										</span>
									</>
								) : (
									<>
										<span
											onClick={() => {
												setShowDropdown(!showDropdown);
												history.push("/login");
											}}
											className="dropdown-item">
											Log In
										</span>
										<span
											onClick={() => {
												setShowDropdown(!showDropdown);
												history.push("/register");
											}}
											className="dropdown-item">
											Sign Up
										</span>
									</>
								)}
							</div>
						</div>
					</li>
					{/* Boton Favorito 1 */}
					<li className="pr-3">
						<div ref={favRef} className={"nav-item dropdown " + (clickedFavorites ? "show" : "")}>
							<button
								className="faves btn btn-outline-success nav-link dropdown-toggle"
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
										? "dropdown-menu dropdown-menu-right " + (clickedFavorites ? "show" : "")
										: "d-none"
								}
								aria-labelledby="navbarDropdown">
								<ul className="pl-0">
									{store.favorites.length > 0
										? store.favorites.map((elm, index) => (
												<li
													key={index}
													className="dropdown-item d-flex align-items-center justify-content-between text-danger">
													<Link
														to={{
															pathname: `/details/${index + 1}`,
															state: {
																product: elm
															}
														}}>
														{elm.name}
														&nbsp; ${elm.price}
													</Link>
													&nbsp;&nbsp;
													<i
														className="fas fa-backspace"
														onClick={() => {
															actions.deleteFromFavorites(elm);
														}}
													/>
												</li>
										  ))
										: null}
								</ul>
							</div>
						</div>
					</li>
					{/* Cart */}
					<li className="pr-3">
						<Link to="/cart">
							<button
								className="faves btn btn-outline-primary nav-link dropdown-toggle"
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
	history: PropTypes.object,
	index: PropTypes.number,
	product: PropTypes.object
};
