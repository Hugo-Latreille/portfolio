import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./screenHeading.scss";

const ScreenHeading = (props) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="heading-container">
			<div
				className="screen-heading"
				style={{ color: darkMode ? "white" : "#1f2235" }}
			>
				<span>{props.title}</span>
			</div>
			{props.subHeading && (
				<div
					className="screen-sub-heading"
					style={{ color: darkMode ? "white" : "#1f2235" }}
				>
					<span>{props.subHeading}</span>
				</div>
			)}
			<div className="heading-separator">
				<div
					className="separator-line"
					style={{ backgroundColor: darkMode ? "white" : "#1f2235" }}
				></div>
				<div className="separator-blob">
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default ScreenHeading;
