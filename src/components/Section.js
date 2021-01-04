import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Section.css";

function Section() {
	return (
		<div className="section-container">
			<img src="/images/image-1.jpg" />
			<h1>CUT YOUR HAIR</h1>
			<p>Yes, we do beards aswell</p>
			<div className="section-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					READ MORE
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					READ MORE
				</Button>
			</div>
		</div>
	);
}

export default Section;
