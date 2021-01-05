import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Check out our services!</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<CardItem
							src="images/image-2.jpg"
							text="Top quality haircut. Includes a relaxing wash with a head massage, quick face moisturizing and hair finishing."
							label="Haircuts"
							path="/services"
						/>
						<CardItem
							src="images/image-4.jpg"
							text="Traditional knife shaving. Includes relaxing hot baths and a facial massage"
							label="Beard shaves"
							path="/services"
						/>
					</ul>
					<ul className="cards-items">
						<CardItem
							src="images/image-5.jpg"
							text="A quick way to deepen your own hair color or fade the first grays. A natural looking result."
							label="Hair colouring"
							path="/services"
						/>
						<CardItem
							src="images/image-6.jpg"
							text="Buzz cut with machine. You can choose a few millimeter stubble from almost bald."
							label="Buzz cut"
							path="/services"
						/>
						<CardItem
							src="images/image-3.jpg"
							text="All designs includes a shortening of the beard and if necessary, trimming with a knife"
							label="Special shaving"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
