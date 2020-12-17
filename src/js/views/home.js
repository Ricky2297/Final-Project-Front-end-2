import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../component/product";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	// static contextType = Context ---- esta linea declara que el componente usa el contexto Context
	static contextType = Context;
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{
					name: "Andethiouraye",
					price: 15.99,
					img:
						"https://www.madeinsenegal.app/wp-content/uploads/2020/08/Consommez-s%C3%A9n%C3%A9galais-images-91.png",
					description:
						"Ceramic 'Thiouraye' (Senegalese incense) burner, Thiouraye is a traditional blend of scented seeds and woods to burn. It is used on incandescent charcoal or embers.",
					continent: "AFRICA",
					country: "Algeria"
				},
				{
					name: "Ethnic Tuareg Bracelet",
					price: 49.99,
					img:
						"https://www.boutiquenirvana.com/5386-home_default/tuareg-flattened-silver-tribal-open-bangle.jpg",
					description:
						"Unique and exceptional bracelet made by expert goldsmiths of the Tuareg ethnic group, using as raw material ebony wood and sterling silver (925 parts of pure silver and 75 parts of copper).Typical ornament of Touareg women, exclusive and of great beauty that will be appreciated over time thanks to the quality of the materials used and their finish.",
					continent: "AFRICA",
					country: "Nigeria"
				},
				{
					name: "Coconut Kalimba Instrument",
					price: 25.99,
					img: "https://images-na.ssl-images-amazon.com/images/I/51A82KJzUxL._AC_SX466_.jpg",
					description:
						"The calimba is an African percussion instrument, which is spread throughout the continent, being the modern version of the traditional .It can be made of different materials, as well as having an indeterminate number of shades, which can range from 6 to 17.The thumbs of both hands are used to sound the calimba.",
					continent: "AFRICA",
					country: "Madagascar"
				},
				{
					name: "Opener Knife Rosewood",
					price: 15.99,
					img:
						"https://i5.walmartimages.com/asr/269d3c67-6e77-4294-923e-e6d868652c5a_1.ae71e066110dc84f9c5ace5e1ecd2570.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
					description:
						"Rosewood takes its name because of its reddish tones, although it is a richly toned wood, often brown with darker grains, but with many different hues.Rosewood wood is heavy, having an excellent polish, being suitable for making guitars, billiard cues and various crafts, as well as various household utensils.",
					continent: "AFRICA",
					country: "Ghana"
				},

				{
					name: "Drawn Peral Fan",
					price: 65.99,
					img: "https://artesamart.com/modules/ptssliderlayer/images/abanico1-sombra-giro-m.png",
					description:
						"Handmade fan, openwork rods made of pear wood. Cotton country. Hand painted, decorated on both sides with floral motifs and borders in various shades; representing the most classic and traditional style of the Spanish fan",
					continent: "EUROPE",
					country: "Espain"
				},
				{
					name: "Aran Jersey",
					price: 89.99,
					img:
						"https://3.bp.blogspot.com/-zrlJs7zSjrQ/WgOIGOhRyhI/AAAAAAAAET0/f8JPoXu0p5cy9fniW6WT7VrGCSQDjDlrQCLcBGAs/s1600/modnie_svitera_aranskoe_pletenie.jpg",
					description:
						"This snaphance is in overall very good condition showing a grey patina to metal surfaces. Engraving on lockplate and hammer. Action is working, but not staying back when cocked. The wood stock is very good with even wear and raised carving around the upper tang, lockplates and ramrod ferrule. There is a plaque in the wrist with the stylized initials",
					continent: "EUROPE",
					country: "Ireland"
				},
				{
					name: "Pocket-Size Snaphance Pistol ",
					price: 800.99,
					img: "https://images.bidsquare.com/item/xl/8425/842595.jpeg",
					description:
						"A snaphance or snaphaunce is a type of lock for firing a gun or is a gun using that mechanism.[1] The name is Dutch in origin but the mechanism cannot be attributed to the Netherlands with certainty. It is the mechanical progression of the wheellock firing mechanism, and along with the miquelet lock and doglock are predecessors of the flintlock mechanism. ",
					continent: "EUROPE",
					country: "Russia"
				},

				{
					name: "Feta Cheesse",
					price: 12.99,
					img: "https://cscateringcompany.co.za/wp-content/uploads/2017/08/FETA.png",
					description:
						"Though cheese made from sheep's or goat's milk is documented in Greece from the 8th century BC, and was widely consumed in ancient Greece and in later Greek gastronomy, feta cheese in particular is first recorded in the Byzantine period under the name prósphatos",
					continent: "EUROPE",
					country: "Bulgaria"
				},

				{
					name: "Dreamcatchers",
					price: 20.99,
					img:
						"https://panamericana.vteximg.com.br/arquivos/ids/348182-600-690/atrapasuenos-contrachapado-con-plumas-y-flores-54-cm-7701016738668.jpg?v=637182310405000000",
					description:
						"Dream catchers can be traced back to the Ojibwes. The Ojibwe people started the phenomenon and over time, dream catchers became adopted by other tribes, cultures and even Nations.",
					continent: "ASIA",
					country: "Nepal"
				},
				{
					name: "Happiness Bottle",
					price: 22.99,
					img: "https://www.arasia-shop.com/4616-large_default/botella-felicidad.jpg",
					description:
						"This beautiful bottle filled with Himalayan herbs is very popular in Thailand for its many benefits: it is refreshing and anti-fatigue, clears the nose, and relieves headaches and vertigo. It has a stimulating and relaxing effect at the same time.",
					continent: "ASIA",
					country: "Thailand"
				},
				{
					name: "Japanese Katana",
					price: 19.99,
					img: "https://images-na.ssl-images-amazon.com/images/I/71u-kukCSJL._AC_SX425_.jpg",
					description:
						"The Japanese Katana has long been thought of as one of the finest swords on the planet. At Swords, Knives and Daggers we have a huge selection of Katanas for any collector.  No matter if you are searching for something entry level, or if you are looking for a handcrafted sword, we have you covered. We have hundreds to choose from. Once you hold it in your hands you will feel the outstanding build quality and know what it was like for the ancient warrior to go into battle with these amazing Japanese swords.",
					continent: "ASIA",
					country: "Japan"
				},
				{
					name: "Ganesh Notebook",
					price: 22.0,
					img: "https://www.arasia-shop.com/4760/cuaderno-ganesh.jpg",
					description:
						"These beautiful notebooks are handmade in India from recycled leather and paper. Ganesh's decoration is metal. Can be used as a travel diary, guest book, journal, to record dreams.",
					continent: "ASIA",
					country: "India"
				},
				{
					name: "Idgeridoo",
					price: 70.0,
					img:
						"https://cdn.shopify.com/s/files/1/0141/6737/5930/products/didgeridoo-bamboo-with-painted-artwork_300x300.jpg?v=1575431289",
					description:
						"The Didgeridoo is a wooden BRASS instrument thought to have originated in Arnhem Land, Northern Territory, Australia. ... Researchers have suggested it may be the world's oldest musical instrument, over 40,000 years old. Oldest cave painting were dated 3000 to 5000 years old.",
					continent: "AUSTRALIA",
					country: "Arnhem Land"
				},
				{
					name: "Boomerang",
					price: 9.99,
					img: "https://www.visitgreaterhamilton.com.au/wp-content/uploads/2020/05/Boomerangs-3.jpg",
					description:
						"A boomerang is a thrown tool, typically constructed as a flat airfoil, that is designed to spin about an axis perpendicular to the direction of its flight. A returning boomerang is designed to return to the thrower. It is well known as a weapon used by some Aboriginal Australian peoples for hunting.",
					continent: "AUSTRALIA",
					country: "Adelaide"
				},
				{
					name: "Australian Opal",
					price: "$",
					img: "https://5.imimg.com/data5/IM/CM/MY-1069503/australian-opal-stone-500x500.jpg",
					description:
						"The first discovery of common opals in Australia was made near Angaston (SA) by the German geologist Johannes Menge in 1849. Both the Queensland Boulder Opal and Lightning Ridge fields attracted miners in the 1880's. ... He made doublets, jewellery, and was one of the first to buy opal by the carat.",
					continent: "AUSTRALIA",
					country: "Tasmania"
				},
				{
					name: "Nephrite Ax",
					price: 250.0,
					img:
						"https://www.carlsbergfondet.dk/~/media/Carlsbergfondet/Billeder/Forskningsartikler/Postdoc-stipendium-i-Danmark/Lasse-Soensen_New-Discoveries-Based-on-Brewer-Carl-Jacobsen/Jadeite.PNG?la=da",
					description:
						"Exceptional big old bride Celt green stone Jade/Nephrite axe, Sentani Papua New Guinea. This old axe is fitted on a bronze custom base. The condition is excellent for its age. Ex collection Jan Van Den Abbeel, Gent (artist/painter) acquired in Amsterdam '65.",
					continent: "AUSTRALIA",
					country: "Popua New Guinea"
				},
				{
					name: "Canada Gold Coin",
					price: 2000.0,
					img:
						"https://bulliontradingllc.com/wp-content/uploads/2017/05/1_oz_gold-coin-canadian-maple-leaf-_.999_-bulliontradingllc.jpg",
					description:
						"The Royal Canadian Mint introduced the 1-ounce coin in 1979. ... This coin made history as the first bullion coin to be struck from 99.99% pure gold. Not to be outdone, the Mint raised the coin's gold standard to 99.999% in 2007. Today, the Canadian Gold Maple Leaf Coin remains highly regarded for its purity and quality.",
					continent: "NORTH AMERICA",
					country: "Canada"
				},
				{
					name: "High-backed duho",
					price: 500.0,
					img:
						"https://www.researchgate.net/profile/Joanna_Ostapkowicz/publication/259181869/figure/fig5/AS:297214321676289@1447872824192/High-backed-duho-Guaiacum-sp-gold-guanin-AD-1292-e-1399-Hispaniola-3-L-435.png",
					description:
						"High-backed duho, Guaiacum sp., gold/guanin (?), AD 1292 e 1399, Hispaniola [3]. L: 435 mm; W: 164 mm (max). The degree to which the duho has been reconstructed during its long history of display does warrant caution with the date achieved. Courtesy, The Trustees of the British Museum, Am1949, 22.118.",
					continent: "NORTH AMERICA",
					country: "Republica Dominicana"
				},
				{
					name: "Cuban Cigar",
					price: 12.99,
					img: "https://www.simplycigars.co.uk/images/500x500_quaisampler.jpg",
					description:
						"By the time Christopher Columbus landed in Cuba in 1492, locals had been smoking tobacco for centuries. They called the tobacco plant “cohiba,” and used to roll its leaves in maize or palm leaves before smoking. This early form of cigar intrigued Columbus, and he took some tobacco to Spain.",
					continent: "NORTH AMERICA",
					country: "Cuba"
				},
				{
					name: "Frida Kahlo Painting",
					price: 299.0,
					img: "https://i.etsystatic.com/8021677/r/il/374acd/1276649132/il_570xN.1276649132_42du.jpg",
					description:
						"Artist Frida Kahlo was considered one of Mexico's greatest artists who began painting mostly self-portraits after she was severely injured in a bus accident. Kahlo later became politically active and married fellow communist artist Diego Rivera in 1929. She exhibited her paintings in Paris and Mexico before her death in 1954.",
					continent: "NORTH AMERICA",
					country: "Mexico"
				},
				{
					name: "Penca de Balangandan",
					price: 425.99,
					img:
						"https://cdn0.rubylane.com/_pod/item/798792/4000005439/Antique-Brazilian-Penca-De-Balangandan-Slave-full-1A-700%3A10.10-43a63993-f.png",
					description:
						"The balangandan is a religious object typical of Brazil, and particularly of the state of Bahia, that represents the encounter between African and European cultures.  In Portuguese, it is called a penca, or bouquet, while the name balangandan is an onomatopoetic word meant to recall the sound made by the object's dangling metal baubles.",
					continent: "SOUTH AMERICA",
					country: "Brazil"
				},
				{
					name: "Golden Bronze Key",
					price: 250.0,
					img:
						"https://cdn.shopify.com/s/files/1/1668/1677/products/bronze-key-pendant_grande.jpg?v=1544045844",
					description: "Solid golden bronze collector's key. Measurements: Length 11.5 cm Key head: 5 cm",
					continent: "SOUTH AMERICA",
					country: "Colombia"
				},
				{
					name: "Naval Sword of Navy of Peru",
					price: 2500.0,
					img:
						"https://cdn.shopify.com/s/files/1/1524/1342/products/on8737__3_275x275_crop_center@2x.jpg?v=1602850670",
					description:
						"The Naval Academy of Peru is the institution in charge of the undergraduate education of officers of the Peruvian Navy. It is located at La Punta, Callao, overlooking the Pacific Ocean. Its current director is Rear Admiral Luis José Polar Figari.",
					continent: "SOUTH AMERICA",
					country: "Peru"
				},
				{
					name: "argentina antique knife",
					price: 200.0,
					img:
						"https://cdn0.rubylane.com/_pod/item/338449/RL8248/Vintage-JUCA-Argentina-Gaucho-Knife-Sheath-pic-1A-2048-10-f.jpg",
					description:
						"The Argentine knives are one of the pieces that has been traditionally with the gauchos. This cutting weapon, was useful because with her the gaucho killed his meat, ate, was protected, it made other tools, and it used it like razor. ",
					continent: "SOUTH AMERICA",
					country: "Argentina"
				}
			]
		};
	}

	render() {
		const search = this.context.store.search;
		return (
			<div className="text-center  m-0">
				<div className="jumbotron d-flex align-items-center justify-content-center w-100 p-0 bg-light">
					<div className="lead text-white h-50">
						<h1 className="quirky h-100">Quirky Gifts for Quirky People</h1>
					</div>
				</div>

				<div>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AFRICA"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">AFRICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "EUROPE"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">EUROPE</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "ASIA"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">ASIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "AUSTRALIA"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">AUSTRALIA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "NORTH AMERICA"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">NORTH AMERICA</span>
					</Link>
					<Link
						to={{
							pathname: `/continent`,
							state: {
								products: this.state.products,
								continent: "SOUTH AMERICA"
							}
						}}>
						<span className="px-3 btn btn-outline-primary mx-2 mt-2">SOUTH AMERICA</span>
					</Link>
				</div>
				<div>
					{/* Cambiar linea 324 por this.context.products.map... */}
					{this.state.products.map((product, index) => {
						if (
							(search != "" &&
								(product.name.toLowerCase().includes(search.toLowerCase()) ||
									product.continent.toLowerCase().includes(search.toLowerCase()) ||
									product.country.toLowerCase().includes(search.toLowerCase()))) ||
							search == ""
						) {
							return <Product key={index} product={product} />;
						}
					})}
				</div>
			</div>
		);
	}
}
