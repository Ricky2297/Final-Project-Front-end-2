const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://3000-cf1d3bb8-7492-46d7-a42b-f1b9b7a01840.ws-us03.gitpod.io",
			user: {
				id: 2233,
				f_name: "Ricky",
				l_name: "Garcia",
				email: "rickysgb@gmail.com",
				phone: "786-241-4331",
				password: "123"
			},
			loggedin: false,
			search: "",
			favorites: [],
			cart: [],
			orders: [],
			transactions: []
		},
		actions: {
			resetCart: () => {
				setStore({ cart: [] });
			},
			deleteFromCart: e => {
				let { cart } = getStore();
				setStore({ cart: cart.filter((item, ind) => ind != e) });
			},
			getTotal: () => {
				let { cart } = getStore();
				var total = 0;
				for (let x of cart) {
					total += x.price;
				}
				return total;
			},

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
				tempStore.cart.push(item);
				setStore({ tempStore });
			}
		}
	};
};

export default getState;
