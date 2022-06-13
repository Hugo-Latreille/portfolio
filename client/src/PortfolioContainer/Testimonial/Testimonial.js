import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonial.scss";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import lady from "../../assets/Testimonial/lady.png";
import mike from "../../assets/Testimonial/mike.png";
import man from "../../assets/Testimonial/man.png";
import { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonial = (props) => {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	useEffect(() => {
		return () => {
			fadeInSubscription.unsubscribe();
		};
	}, [fadeInSubscription]);

	const options = {
		loop: true,
		margin: 0,
		nav: true,
		animateIn: "bounceInRight",
		animateOut: "bounceOutRight",
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1000: {
				items: 3,
			},
		},
	};

	return (
		<div>
			<ScreenHeading
				title={"Testimonial"}
				subHeading={"What My Client Say About Me"}
			/>
			<section className="testimonial-section fade-in" id={props.id || ""}>
				<OwlCarousel
					className="container"
					id="testimonial-carousel"
					{...options}
				>
					<div className="card">
						<div className="testi-item">
							<div className="testi-comment">
								<p>
									<FaQuoteLeft className="i" />
									Ceci est un test
									<FaQuoteRight className="i" />
								</p>
								<ul className="stars list-unstyled">
									<li>
										<FaStar className="stars-icon" />
									</li>
									<li>
										<FaStar className="stars-icon" />
									</li>
									<li>
										<FaStar className="stars-icon" />
									</li>
									<li>
										<FaStar className="stars-icon" />
									</li>
								</ul>
							</div>
							<div className="client-info">
								<img src={lady} alt="no internet connection"></img>
								<h5>Daisy Dominic</h5>
								<p>CEO InansGlobal</p>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</section>
			<div className="footer-image">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="white"
						fillOpacity="1"
						d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,165.3C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default Testimonial;
