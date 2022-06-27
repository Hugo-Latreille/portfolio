import "./header.scss";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Toggle from "../../Toggle/Toggle";
import { ThemeContext } from "../../../context";

const Header = ({
	isVisible,
	isVisible2,
	isVisible3,
	isVisible4,
	isVisible5,
}) => {
	// const [selected, setSelected] = useState(0);
	const [hamburgerOptions, setHamburgerOptions] = useState(false);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			style={{
				backgroundColor: darkMode ? "#2e517a" : "rgba(25, 138, 153, 1)",
			}}
			className="header-container"
		>
			<div className="header-parent">
				<div
					className="header-hamburger"
					onClick={() => setHamburgerOptions(!hamburgerOptions)}
				>
					<FaBars className="header-hamburger-bars" />
				</div>
				<div
					className={
						isVisible5 ? "header-logo selected-logo-option" : "header-logo"
					}
				>
					<span>
						<a href="#home">
							Hugo<span style={{ color: "#F39C12" }}>~</span>
						</a>
					</span>
				</div>
				<div
					className={
						hamburgerOptions
							? "header-options show-hamburger-options"
							: "header-options"
					}
					onClick={() => setHamburgerOptions(!hamburgerOptions)}
				>
					<div
						className={
							isVisible
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
					>
						<span>
							<a href="#about">À propos</a>
						</span>
					</div>
					<div
						className={
							isVisible2
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
					>
						<span>
							<a href="#resume">Parcours</a>
						</span>
					</div>
					<div
						className={
							isVisible3
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
					>
						<span>
							<a href="#slider">Projets</a>
						</span>
					</div>
					<div
						className={
							isVisible4
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
					>
						<span>
							<a href="#contact">Contact</a>
						</span>
					</div>
				</div>
				<Toggle />
			</div>
		</div>
	);
};

export default Header;
