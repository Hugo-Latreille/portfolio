import "./footer.scss";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="scroll-container">
			<button className="btn-scroll">
				{" "}
				<FaArrowUp />
			</button>
		</div>
	);
};

export default Footer;
