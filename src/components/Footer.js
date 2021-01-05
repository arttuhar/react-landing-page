import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-header">
					Join to our mailing list to get best deals and offers!
				</p>
				<p className="footer-subscription-text">
					You can unsubscibe newsletter at any time.
				</p>
				<div className="footer-subscription-inputs">
					<form>
						<input
							type="email"
							name="email"
							placeholder="Your email"
							className="footer-input"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-links-wrapper">
					<div className="footer-links-items">
						<h2>About us</h2>
						<Link to="/">Privacy policy</Link>
						<Link to="/">Media</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Our story</Link>
					</div>
					<div className="footer-links-items">
						<h2>About us</h2>
						<Link to="/">Privacy policy</Link>
						<Link to="/">Media</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Our story</Link>
					</div>
				</div>
				<div className="footer-links-wrapper">
					<div className="footer-links-items">
						<h2>About us</h2>
						<Link to="/">Privacy policy</Link>
						<Link to="/">Media</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Our story</Link>
					</div>
					<div className="footer-links-items">
						<h2>About us</h2>
						<Link to="/">Privacy policy</Link>
						<Link to="/">Media</Link>
						<Link to="/">FAQ</Link>
						<Link to="/">Our story</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrapper">
					<div className="footer-logo">
						<Link to="/" className="social-media-logo">
							<i class="fas fa-dharmachakra"></i> BARBERI
						</Link>
					</div>
					<small className="rights">Arttu Hartikainen © 2021</small>
					<div className="social-media-icons">
						<Link
							className="social-media-icons-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i class="fab fa-instagram"></i>
						</Link>
						<Link
							className="social-media-icons-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i class="fab fa-twitter"></i>
						</Link>
						<Link
							className="social-media-icons-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i class="fab fa-facebook"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
