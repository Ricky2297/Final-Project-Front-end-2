const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				id: 2233,
				f_name: "Ricky",
				l_name: "Garcia",
				email: "ricky@gmail.com",
				phone: "3056785423",
				password: "123"
			},
			loggedin: false,
			search: "",
			favorites: [],
			cart: []
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
			addFavorites: name => {
				let tempStore = getStore();
				let newFavorite = { name: name };

				tempStore.favorites.push(newFavorite);
				setStore({ tempStore });
			},

			deleteFromFavorites: e => {
				let { favorites } = getStore();
				setStore({ favorites: favorites.filter(favorite => favorite.name != e.name) });
			},

			// Cart//
			addToCart: item => {
				let tempStore = getStore();
				tempStore.cart.push(item);
				setStore({ tempStore });
			},

			deleteFromFavorites: e => {
				let { favorites } = getStore();
				setStore({ favorites: favorites.filter(favorite => favorite.name != e.name) });
			}
		}
	};
};

export default getState;
