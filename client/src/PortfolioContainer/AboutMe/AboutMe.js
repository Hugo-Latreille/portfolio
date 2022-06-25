/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import "./AboutMe.scss";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const AboutMe = ({ forwardRef, isVisible }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const SCREEN_CONSTANTS = {
		description:
			"Ancien journaliste et libraire, je suis avec passion la formation Développeur JavaScript FullStack avec l'école O'clock pour 6 mois.",
		highlights: {
			bullets: [
				"HTML5, CSS3(SASS)",
				"ReactJS, Redux, JavaScript Vanilla",
				"NodeJs, Express, PostGreSQL, MongoDB, Socket.io, MVP, API REST",
				"Git/GitHub",
				"Curieux / Autonome / Travail d'équipe / Communication",
				"Anglais courant",
				"Capacité de synthèse et de recherche documentaire",
			],
			heading: "Mes compétences : ",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div
			className="about-me-container screen-container"
			id="about"
			ref={forwardRef}
			style={{
				backgroundColor: darkMode ? "#32364d" : "white",
			}}
		>
			<div
				className={
					isVisible
						? "about-me-parent fade-in reveal"
						: "about-me-parent fade-in"
				}
			>
				<ScreenHeading title={"A propos de moi"} subHeading={"Qui suis-je ?"} />
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTANTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>{SCREEN_CONSTANTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className="about-me-options">
							<a href="#contact">
								<button className="btn primary-btn"> Prendre contact </button>
							</a>
							<a href="/CV2022.pdf" download="CVHugo.pdf">
								<button className="btn highlighted-btn">
									Téléchargez mon CV
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
