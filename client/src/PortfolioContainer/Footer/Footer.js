import "./footer.scss";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="scroll-container">
			<a href="#app">
				<button className="btn-scroll">
					<FaArrowUp />
				</button>
			</a>
		</div>
	);
};

export default Footer;
