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
			icon: "/assets/mobile.png",
			title: "Web Design",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
			img: "assets/capture3.png",
		},
		{
			id: "2",
			icon: "/assets/globe.png",
			title: "Mobile Application",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
		},
		{
			id: "3",
			icon: "/assets/writing.png",
			title: "Branding",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
		},
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
					style={{ transform: `translateX(-${currentSlide * 1450}px)` }}
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
											<img src={d.icon} alt="" />
										</div>
										<h2>{d.title}</h2>
										<p>{d.desc}</p>
										<span>Projects</span>
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
