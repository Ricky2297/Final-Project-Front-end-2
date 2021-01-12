import { Product } from "../component/product";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// url: "https://3000-cf1d3bb8-7492-46d7-a42b-f1b9b7a01840.ws-us03.gitpod.io",
			url: "https://3000-cf1d3bb8-7492-46d7-a42b-f1b9b7a01840.ws-us03.gitpod.io",
			user: {},
			loggedin: false,
			search: "",
			favorites: [],
			cart: [],
			orders: [],
			transactions: [],
			products: []
		},
		actions: {
			login: event => {
				setStore({ loggedin: event });
			},

			updateSearch: newValue => {
				setStore({ search: newValue });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// Aqui va lo de Registrar un usuario
			newUser: param1 => {
				console.log(param1);
				console.log(param1.phonenumber);
				let store = getStore();
				fetch(store.url + "/new-user", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						first_name: param1.firstName,
						last_name: param1.lastname,
						email: param1.email,
						phone_number: param1.phonenumber,
						password: param1.password
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", response);
						setStore({
							user: response
						});
					})
					// sends error to user and to console log
					.catch(error => {
						setStore({ errors: error });
						console.error("Error:", error);
						return true;
					});
			},

			loggin: async (email, password) => {
				let store = getStore();
				let response = await fetch(store.url + "/new-user");
				if (response.ok) {
					let users = await response.json();
					let user = users.filter(user => {
						return user.email === email;
					});
					if (user.length == 1) {
						if (user[0].password == password) {
							setStore({ loggedin: true, user: user[0] });
						} else {
							alert("NO PUEDES ENTRAR!");
						}
					} else {
						alert("NO PUEDES ENTRAR!");
					}
				}
			},

			addFavorites: item => {
				let store = getStore();
				fetch(store.url + "/favorites", {
					method: "POST", // or 'POST'
					body: JSON.stringify({ item }), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", response);

						let tempStore = getStore();
						tempStore.favorites.push(response);

						setStore({ tempStore });
					})
					.catch(error => console.error("Error:", error));
			},

			// Aqui es donde se muestran los productos

			getProducts: async () => {
				let store = getStore();
				let response = await fetch(store.url + "/product");
				if (response.ok) {
					let products = await response.json();
					setStore({ products });
				} else {
					setStore({ products: [] });
				}
			},

			getFavorites: async () => {
				let store = getStore();
				let response = await fetch(store.url + "/favorites");
				if (response.ok) {
					let favorites = await response.json();
					setStore({ favorites });
				} else {
					setStore({ favorites: [] });
				}
			},

			deleteFromFavorites: favorite => {
				let store = getStore();

				fetch(store.url + "/favorites/" + favorite.id, {
					method: "DELETE", // or 'POST'

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", response);

						// let tempStore = getStore();
						// tempStore.favorites.push(response);

						setStore({ favorites: response });
					})
					.catch(error => console.error("Error:", error));
				// let { favorites } = getStore();
				// setStore({ favorites: favorites.filter(favorite => favorite.name != e.name) });
			},

			// Cart//
			addToCart: item => {
				let tempStore = getStore();
				///
				let store = getStore();
				fetch(store.url + "/cart_product", {
					method: "POST", // or 'POST'
					body: JSON.stringify(item), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", response);

						let tempStore = getStore();
						tempStore.cart.push(response);

						setStore({ tempStore });
					})
					.catch(error => console.error("Error:", error));

				//
				// tempStore.cart.push(item);
				// setStore({ tempStore });
			},

			getCart: async () => {
				let store = getStore();
				let response = await fetch(store.url + "/cart_product");
				if (response.ok) {
					let cart = await response.json();
					setStore({ cart });
				} else {
					setStore({ cart: [] });
				}
			},

			deleteFromCart: e => {
				let store = getStore();
				console.log(e, "Hola Mundo");
				fetch(store.url + "/cart_product/" + e.id, {
					method: "DELETE",

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", response);

						setStore({ cart: response });
					})
					.catch(error => console.error("Error:", error));

				//
				// let { cart } = getStore();
				// setStore({ cart: cart.filter((item, ind) => ind != e) });
			},
			resetCart: () => {
				setStore({ cart: [] });
			},
			getTotal: () => {
				let { cart } = getStore();
				var total = 0;
				for (let x of cart) {
					total += x.price;
				}
				return total;
			}
		}
	};
};

export default getState;
