import "./header.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
	const [selected, setSelected] = useState(0);
	const [hamburgerOptions, setHamburgerOptions] = useState(false);

	return (
		<div
			className="header-container"
			onClick={() => setHamburgerOptions(!hamburgerOptions)}
		>
			<div className="header-parent">
				<div
					className="header-hamburger"
					onClick={() => setHamburgerOptions(!hamburgerOptions)}
				>
					<FaBars className="header-hamburger-bars" />
				</div>
				<div className="header-logo">
					<span>Hugo~</span>
				</div>
				<div
					className={
						hamburgerOptions
							? "header-options show-hamburger-options"
							: "header-options"
					}
				>
					<div
						className={
							selected === 1
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
						onClick={() => setSelected(1)}
					>
						<span>{/* <a href="#aboutMe">À propos</a> */}À propos</span>
					</div>
					<div
						className={
							selected === 2
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
						onClick={() => setSelected(2)}
					>
						<span>Mon Parcours</span>
					</div>
					<div
						className={
							selected === 3
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
						onClick={() => setSelected(3)}
					>
						<span>Projets</span>
					</div>
					<div
						className={
							selected === 4
								? "header-option header-option-separator selected-header-option"
								: "header-option header-option-separator"
						}
						onClick={() => setSelected(4)}
					>
						<span>Contact</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
