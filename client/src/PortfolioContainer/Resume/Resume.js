import "./resume.scss";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context";

const Resume = ({ forwardRef, isVisible2 }) => {
	/* STATES */
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	/* REUSABLE MINOR COMPONENTS */
	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.heading ? props.heading : ""}</span>
					{props.fromDate && props.toDate && (
						<div className="heading-date">
							{props.fromDate + "-" + props.toDate}
						</div>
					)}
					{!props.fromDate && props.toDate && (
						<div className="heading-date">{props.toDate}</div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ""}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ""}</span>
				</div>
			</div>
		);
	};

	/* STATIC RESUME DATA FOR THE LABELS*/
	const resumeBullets = [
		{ label: "Formation", logoSrc: "education.svg" },
		{ label: "Expériences Professionnelles", logoSrc: "work-history.svg" },
		{ label: "Compétences", logoSrc: "programming-skills.svg" },
		{ label: "Soft Skills", logoSrc: "projects.svg" },
		{ label: "Centres d'intérêt", logoSrc: "interests.svg" },
	];

	//here we have
	const programmingSkillsDetails = [
		{ skill: "JavaScript", logoSrc: "js.svg" },
		{ skill: "React JS", logoSrc: "react.svg" },
		{ skill: "Express JS", logoSrc: "expressjs.svg" },
		{ skill: "Node JS", logoSrc: "nodejs.svg" },
		{ skill: "Mongo Db", logoSrc: "mongodb.svg" },
		{ skill: "HTML", logoSrc: "html5.svg" },
		{ skill: "CSS", logoSrc: "css3.svg" },
		{ skill: "Redux", logoSrc: "redux.svg" },
		{ skill: "PostgreSQL, Sequelize", logoSrc: "postgresql-vertical.svg" },
		{ skill: "Git", logoSrc: "git.svg" },
	];

	const projectsDetails = [
		{
			title: "Coordination d'une équipe, sens de l'organisation",
		},
		{
			title: "Capacité de synthèse et de recherche documentaire",
		},
		{
			title: "Maîtrise du code ortho-typographique français",
		},
		{
			title: "Adaptable / curieux / autonome",
		},
		{
			title: "Anglais courant, lu, parlé, écrit",
		},
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={
					"Formation Développeur FullStack JavaScript, spécialisation React"
				}
				subHeading={"École O'clock"}
				fromDate={""}
				toDate={"2022"}
			/>

			<ResumeHeading
				heading={"Brevet Professionnel de Libraire"}
				subHeading={"Institut National de Formation des Libraires, Montreuil"}
				fromDate={"2012"}
				toDate={"2014"}
			/>
			<ResumeHeading
				heading={"Master Journalisme"}
				subHeading={"Institut d’Études Politiques de Grenoble"}
				fromDate={"2006"}
				toDate={"2008"}
			/>
			<ResumeHeading
				heading={"Section Politique et Économie Sociale"}
				subHeading={"Institut d’Études Politiques de Grenoble"}
				fromDate={"2004"}
				toDate={"2006"}
			/>
			<ResumeHeading
				heading={"Hypokhâgne-Khâgne Lettres et Sciences Sociales"}
				subHeading={"Lycée Michel de Montaigne, Bordeaux"}
				fromDate={"2002"}
				toDate={"2004"}
			/>
		</div>,

		/* WORK EXPERIENCE */
		<div className="resume-screen-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={"École O'clock"}
					subHeading={"Développeur React"}
					// fromDate={"2021"}
					toDate={"2022"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Apothéose, projet fullstack d'un mois en groupe de 5. Challenges
						quotidiens
					</span>
				</div>
				<ResumeHeading
					heading={"Libraire"}
					subHeading={
						"Librairie Nouvelle, Asnières-sur-Seine / Librairie Vent de Soleil, Auray - CDI"
					}
					fromDate={"2012"}
					toDate={"2020"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						- Responsable d’une équipe de 5 libraires, maître d’apprentissage de
						deux apprentis, libraire Littérature et Sciences Humaines
					</span>
					<br />
					<span className="resume-description-text">
						- Recherches bibliographiques, gestions des réseaux sociaux et des
						sites web.
					</span>
				</div>
				<ResumeHeading
					heading={"Journaliste"}
					subHeading={
						"Collaboration avec la Revue Médias et les éditions Mordicus / Agence Webcastory"
					}
					fromDate={"2008"}
					toDate={"2011"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						- Rédaction : articles, brèves, interviews
					</span>
					<br />
					<span className="resume-description-text">
						- Gestion des sites internet / Webmaster éditorial, organisation
						d’émissions WebTv et réalisation de podcasts
					</span>
					<br />
					<span className="resume-description-text">
						- Stages : Aujourdhuilinde.com (New Delhi, 2008) / Rue89.com (2007,
						Paris) / Journal Sud Ouest (La Rochelle, Royan 2003-2005)
					</span>
				</div>
			</div>
		</div>,

		/* PROGRAMMING SKILLS */
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills"
		>
			{programmingSkillsDetails.map((skill, index) => (
				<div className="skill-parent" key={index}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<img
						className="skill-logo"
						src={require(`../../assets/Resume/icons/${skill.logoSrc}`)}
						alt="B"
					/>
					{/* <div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + "%" }}
							className="active-percentage-bar"
						></div>
					</div> */}
				</div>
			))}
		</div>,

		/* PROJECTS */
		<div className="resume-screen-container" key="projects">
			{projectsDetails.map((projectsDetails, index) => (
				<ResumeHeading
					key={index}
					heading={projectsDetails.title}
					// subHeading={projectsDetails.subHeading}
					// description={projectsDetails.description}
					// fromDate={projectsDetails.duration.fromDate}
					// toDate={projectsDetails.duration.toDate}
				/>
			))}
		</div>,

		/* Interests */
		<div className="resume-screen-container" key="interests">
			<ResumeHeading
				heading="Voyages"
				description="Séjours de longue durée en Chine et en Inde , nombreux voyages en Europe."
			/>
			<ResumeHeading
				heading="Associatif"
				description="Fondateur de l’association littéraire de l’IEP de Grenoble : L’Entre Deux Lettres. Réalisation de cinq numéros de sa revue.
			 "
			/>
			<ResumeHeading heading="Photographie / Littérature" />
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;

		let newCarousalOffset = {
			style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
		};

		setCarousalOffsetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
				}
				key={index}
			>
				<img
					className="bullet-logo"
					src={require(`../../assets/Resume/${bullet.logoSrc}`)}
					alt="B"
				/>
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreens = () => {
		return (
			<div
				style={carousalOffsetStyle.style}
				className="resume-details-carousal"
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};

	return (
		<div
			className="resume-container screen-container "
			style={{
				backgroundColor: darkMode ? "#32364d" : "white",
			}}
			id="resume"
			ref={forwardRef}
		>
			<div
				className={
					isVisible2
						? "resume-content fade-in reveal"
						: "resume-content fade-in"
				}
			>
				<ScreenHeading
					title={"CV"}
					subHeading={"Développeur Fullstack JavaScript"}
				/>
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>

					<div className="resume-bullet-details">{getResumeScreens()}</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
