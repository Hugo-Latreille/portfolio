import "./home.scss";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import ApiSVG from "../../assets/Home/api.js";
import BackSVG from "../../assets/Home/back.js";
import JsSVG from "../../assets/Home/js.js";
import WebSVJ from "../../assets/Home/web.js";
import CssSVJ from "../../assets/Home/css.js";
import HtmlSVJ from "../../assets/Home/html.js";
import SqlSVJ from "../../assets/Home/sql.js";
import ResponsiveSVJ from "../../assets/Home/responsive.js";
import TerminalSVJ from "../../assets/Home/terminal.js";

const Home = ({
	isVisible,
	isVisible2,
	isVisible3,
	isVisible4,
	isVisible5,
	forwardRef,
	position,
	elementDimensions,
}) => {
	const { x, y } = position;
	const { height, width } = elementDimensions;
	const activeParallax = (depth = 15) => {
		let posX = (width / 2 - x) / depth;
		let posY = (height / 2 - y) / depth;
		return {
			transform: `translate(${posX}px, ${posY}px)`,
		};
	};

	return (
		<div className="home-container" id="home" ref={forwardRef}>
			<Header
				isVisible={isVisible}
				isVisible2={isVisible2}
				isVisible3={isVisible3}
				isVisible4={isVisible4}
				isVisible5={isVisible5}
			/>
			<Profile />
			<Footer />
			<div className="parallax" data-relative-input="true">
				<ApiSVG
					width="27"
					height="29"
					className="layer p1"
					style={activeParallax(15)}
				/>
				<BackSVG
					width="26"
					height="26"
					className="layer p2"
					style={activeParallax(20)}
				/>

				<JsSVG
					width="30"
					height="25"
					className="layer p3"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(25)}
				/>

				<WebSVJ
					width="15"
					height="23"
					className="layer p4"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(10)}
				/>

				<CssSVJ
					width="15"
					height="23"
					className="layer p5"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(8)}
				/>

				<HtmlSVJ
					width="49"
					height="17"
					className="layer p6"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(18)}
				/>

				<SqlSVJ
					width="26"
					height="26"
					className="layer p7"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(22)}
				/>

				<ResponsiveSVJ
					width="19"
					height="21"
					className="layer p8"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(15)}
				/>

				<TerminalSVJ
					width="30"
					height="25"
					className="layer p9"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(10)}
				/>

				{/* <svg
					width="47"
					height="29"
					className="layer p10"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(23)}
				>
					<g fill="#44D7B6" fillRule="evenodd">
						<path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z" />
						<path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z" />
					</g>
				</svg>

				<svg
					width="33"
					height="20"
					className="layer p11"
					xmlns="http://www.w3.org/2000/svg"
					style={activeParallax(18)}
				>
					<path
						d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z"
						fill="#FFD15C"
						fillRule="evenodd"
					/>
				</svg> */}
			</div>
		</div>
	);
};

export default Home;
