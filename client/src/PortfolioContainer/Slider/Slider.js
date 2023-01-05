import "./slider.scss";
import { useContext, useState } from "react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { ThemeContext } from "../../context";
//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ forwardRef, isVisible3 }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [currentSlide, setCurrentSlide] = useState(0);

	//? Régler slider à 4, composant modale avec prop useState true, modale absolute on click élément develott, gérer mobile

	const data = [
		{
			id: "1",
			icon: "/assets/github.svg",
			title: "QuasiQuiz",
			desc: (
				<p>
					QuasiQuiz est un jeu de quiz multijoueur. Chaque joueur répond à une
					série de questions minutées, l'un d'entre eux assurera la correction
					"en direct". Le site est doté d'un backoffice côté Front pour gérer
					les questions et l'upload des fichiers. La sécurité est assurée par un
					système de JWT / refreshTokens (cookies HTTP only) <br /> <br />{" "}
					Front-End : Javascript, React, Mercure, React Admin, Sass, Vite <br />{" "}
					Back-End : Symfony 6.1, ApiPlatform, Mercure, PostgresSQL / MariaDB{" "}
				</p>
			),
			img: "assets/quasiquiz.gif",
			link: "https://github.com/Hugo-Latreille?tab=repositories&q=quasiquiz&type=&language=&sort=",
			liveLink: "https://quasiquiz.fr/",
		},
		{
			id: "2",
			icon: "/assets/github.svg",
			title: "Develott",
			desc: (
				<p>
					Develott est une plateforme de mise en relation, d'échange et de
					collaboration entre développeurs juniors autour de projets
					open-sources proposés par la communauté. <br /> <br /> Front-End :
					Javascript, React, Redux (Redux Toolkit / RTK Query), Sass <br />{" "}
					Back-End : Javascript, NodeJs, Express, PostgreSql, Swagger, Sqitch,
					JWT, NodeMailer, Passport.js{" "}
				</p>
			),
			img: "assets/develott.png",
			link: "https://github.com/Hugo-Latreille?tab=repositories&q=develott&type=&language=&sort=",
			liveLink: "https://develott.fr/",
			video: "https://tinyurl.com/develott",
		},
		{
			id: "3",
			icon: "/assets/github.svg",
			title: "Chat React / socket.io",
			desc: "App fullstack de chat React/Socket.io/MongoDB",
			img: "assets/chatApp.gif",
			link: "https://github.com/Hugo-Latreille/ReactSocketMongoChat",
			liveLink: "https://chat.hugolatreille.dev/",
		},
		{
			id: "4",
			icon: "/assets/github.svg",
			title: "Travel App",
			desc: (
				<p>
					App fullstack permettant de noter et de partager ses destinations de
					voyage. <br />
					Front : Mapbox, React, CSS <br />
					Back : Node.js, Express, MongoDB
				</p>
			),
			img: "assets/travelApp.gif",
			link: "https://github.com/Hugo-Latreille/travelApp",
		},
		{
			id: "5",
			icon: "/assets/github.svg",
			title: "VanillaJs SUTOM",
			desc: "Une copie du SUTOM/Wordle en vanilla JS",
			img: "assets/sutom.gif",
			link: "https://github.com/Hugo-Latreille/hugo-latreille.github.io/tree/master/sutom",
			liveLink: "https://hugo-latreille.github.io/sutom/",
		},
		{
			id: "6",
			icon: "/assets/github.svg",
			title: "Porfolio CSS",
			desc: "Un premier essai de porfolio en pur HTML/CSS après une semaine de formation",
			img: "assets/portfolio.gif",
			link: "https://github.com/Hugo-Latreille/hugo-latreille.github.io",
			liveLink: "https://hugo-latreille.github.io/",
		},
	];

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

				<Swiper
					breakpoints={{
						// when window width is >= 300px
						300: {
							width: 300,
							slidesPerView: 1,
						},
						// when window width is >= 760px
						760: {
							width: 760,
							slidesPerView: 1,
						},
						// when window width is >= 900px
						900: {
							width: 800,
							slidesPerView: 1,
						},
					}}
					spaceBetween={30}
					freeMode={true}
					grabCursor={true}
					// navigation
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Navigation, EffectCoverflow]}
					effect={"coverflow"}
					className="slider"
				>
					{data.map((d) => (
						<SwiperSlide className="container" key={d.id}>
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
										{d.id !== "4" && (
											<a href={d.liveLink} target="_blank" rel="noreferrer">
												<span>Demo</span>
											</a>
										)}
									</div>
								</div>
								<div className="right">
									{d.video ? (
										<div className="video">
											<iframe
												width="560"
												height="315"
												src="https://www.youtube.com/embed/PNj_SqhSVg8?start=5153"
												title="YouTube video player"
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>
										</div>
									) : (
										<img src={d.img} alt="" />
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* <MdOutlineArrowBackIosNew
					className="arrow left"
					onClick={() => handleClick("left")}
				/>
				<MdArrowForwardIos
					className="arrow right"
					onClick={() => handleClick()}
				/> */}
			</div>
		</div>
	);
};

export default Slider;
