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
							text="Cut your hair with latest trends"
							label="Haircuts"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
