import { useContext } from "react";
import { ThemeContext } from "../../../context";
import "./footer.scss";

const HomeFooter = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="footer-container">
			<div className="footer-parent">
				{/* <img src={background} alt="background shape" /> */}
				{/* <img src={wave} alt="background shape" /> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					style={{
						backgroundColor: darkMode ? "#26233a" : "rgba(25, 138, 153, 1)",
					}}
				>
					<path
						fill="white"
						fillOpacity="1"
						d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,165.3C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
				{/* <div className="background-image"></div> */}
			</div>

			<div className="mouse-icon">
				<span className="mouse">
					<span className="wheel"></span>
				</span>
			</div>
		</div>
	);
};

export default HomeFooter;
