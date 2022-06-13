import "./footer.scss";
import ScrollService from "../../utilities/ScrollService";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="scroll-container">
			<button
				className="btn-scroll"
				onClick={() => ScrollService.scrollHandler.scrollToHome()}
			>
				{" "}
				<FaArrowUp />
			</button>
		</div>
	);
};

export default Footer;
