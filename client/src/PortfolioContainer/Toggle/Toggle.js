import "./toggle.scss";
import Sun from "./../../assets/sun.png";
import Moon from "./../../assets/moon.png";
import { useContext } from "react";
import { ThemeContext } from "./../../context";

const Toggle = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const handleClick = () => {
		theme.dispatch({ type: "TOGGLE" });
	};

	return (
		<div className="toggle" onClick={handleClick}>
			<img src={Sun} alt="" className="toggle__img" />
			<img src={Moon} alt="" className="toggle__img" />
			<div
				className="toggle__button"
				style={{
					left: theme.state.darkMode ? "0" : "25px",
					backgroundColor: darkMode ? "rgba(25, 138, 153, 1)" : "#26233a",
				}}
			></div>
		</div>
	);
};

export default Toggle;
