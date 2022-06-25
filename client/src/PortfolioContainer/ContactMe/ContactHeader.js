import "./contactHeader.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const ContactHeader = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="contact-header">
			<svg
				className="footer_svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				style={{
					backgroundColor: darkMode ? "#2e517a" : "rgb(25, 138, 153)",
					color: darkMode ? "#32364d" : "white",
				}}
			>
				<path
					fill="currentColor"
					fillOpacity="1"
					d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,165.3C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
				></path>
			</svg>
		</div>
	);
};

export default ContactHeader;
