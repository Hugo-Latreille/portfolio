import "./slider.scss";
import { useContext, useState } from "react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { ThemeContext } from "../../context";

const Slider = ({ forwardRef, isVisible3 }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [currentSlide, setCurrentSlide] = useState(0);
	const data = [
		{
			id: "1",
			icon: "/assets/github.svg",
			title: "Test",
			desc: "test",
			// img: "assets/portfolio.gif",
			video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PNj_SqhSVg8?start=5153" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
			link: "https://github.com/Hugo-Latreille/hugo-latreille.github.io",
			liveLink: "https://hugo-latreille.github.io/",
		},
		// {
		// 	id: "2",
		// 	icon: "/assets/github.svg",
		// 	title: "Porfolio CSS",
		// 	desc: "Un premier essai de porfolio en pur HTML/CSS après une semaine de formation",
		// 	img: "assets/portfolio.gif",
		// 	link: "https://github.com/Hugo-Latreille/hugo-latreille.github.io",
		// 	liveLink: "https://hugo-latreille.github.io/",
		// },
		// {
		// 	id: "3",
		// 	icon: "/assets/github.svg",
		// 	title: "Chat React / socket.io",
		// 	desc: "App fullstack de chat React/Socket.io/MongoDB",
		// 	img: "assets/chatApp.gif",
		// 	link: "https://github.com/Hugo-Latreille/ReactSocketMongoChat",
		// 	liveLink: "https://reactsocketchat.herokuapp.com/",
		// },
		// {
		// 	id: "4",
		// 	icon: "/assets/github.svg",
		// 	title: "VanillaJs SUTOM",
		// 	desc: "Une copie du SUTOM/Wordle en vanilla JS",
		// 	img: "assets/sutom.gif",
		// 	link: "https://github.com/Hugo-Latreille/hugo-latreille.github.io/tree/master/sutom",
		// 	liveLink: "https://hugo-latreille.github.io/sutom/",
		// },
	];

	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div
			className="slider-container"
			id="slider"
			ref={forwardRef}
			style={{
				backgroundColor: darkMode ? "#32364d" : "white",
			}}
		>
			<div
				className={
					isVisible3 ? "slider-parent fade-in reveal" : "slider-parent fade-in"
				}
			>
				<ScreenHeading
					subHeading={"Réalisés en 2022"}
					title={"Quelques projets"}
				/>
				<div
					className="slider"
					style={{ transform: `translateX(-${currentSlide * 3150}px)` }}
				>
					{data.map((d) => (
						<div className="container" key={d.id}>
							<div className="item">
								<div className="browser">
									<div className="browser-circle"></div>
									<div className="browser-circle"></div>
									<div className="browser-circle"></div>
								</div>
								<div className="left">
									<div className="leftContainer">
										<div className="imgContainer">
											<a href={d.link} target="_blank" rel="noreferrer">
												<img src={d.icon} alt="" />
											</a>
										</div>
										<h2>{d.title}</h2>
										<p>{d.desc}</p>
										<a href={d.liveLink} target="_blank" rel="noreferrer">
											<span>Demo</span>
										</a>
									</div>
								</div>
								<div className="right">
									<img src={d.img} alt="" />
								</div>
							</div>
						</div>
					))}
				</div>
				<MdOutlineArrowBackIosNew
					className="arrow left"
					onClick={() => handleClick("left")}
				/>
				<MdArrowForwardIos
					className="arrow right"
					onClick={() => handleClick()}
				/>
			</div>
		</div>
	);
};

export default Slider;
