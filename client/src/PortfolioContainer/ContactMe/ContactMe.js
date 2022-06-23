/* eslint-disable react/jsx-no-target-blank */
import "./contactMe.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailSVG from "./../../assets/Contact/email-mail-svgrepo-com.svg";
import load1 from "./../../assets/Contact/load.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import HomeFooter from "../Home/Footer/Footer";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function ContactMe({ forwardRef, isVisible4 }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const data = {
				name,
				email,
				message,
			};
			setBool(true);
			const res = await axios.post(`http://localhost:5000/contact`, data);
			if (name.length === 0 || email.length === 0 || message.length === 0) {
				setBanner(res.data.msg);
				toast.error(res.data.msg);
				setBool(false);
			} else if (res.status === 200) {
				setBanner(res.data.msg);
				toast.success(res.data.msg);
				setBool(false);
				setName("");
				setEmail("");
				setMessage("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={
				isVisible4
					? "about-container fade-in reveal"
					: "about-container fade-in"
			}
		>
			{/* <HomeFooter /> */}
			<svg
				className="footer_svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				style={{
					backgroundColor: darkMode ? "#26233a" : "rgba(25, 138, 153, 1)",
				}}
			>
				<path
					fill="white"
					fillOpacity="1"
					d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,165.3C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
				></path>
			</svg>
			<div
				className="main-container screen-container"
				style={{
					backgroundColor: darkMode ? "#26233a" : "rgba(25, 138, 153, 1)",
				}}
				id="contact"
				ref={forwardRef}
			>
				<ScreenHeading subHeading={"Prenons contact"} title={"Contactez-moi"} />
				<div className="central-form">
					<div className="col">
						<h2 className="title">
							<Typical
								loop={Infinity}
								steps={["Envoyez-moi un mail 📧", 2000]}
							/>
						</h2>{" "}
						<a href="https://github.com/Hugo-Latreille" target="_blank">
							<BsGithub className="i" color="white" size="1.2rem" />
						</a>
						<a
							href="https://www.linkedin.com/in/hugo-latreille/"
							target="_blank"
						>
							<BsLinkedin className="i" color="white" size="1.2rem" />
						</a>
					</div>
					<div className="back-form">
						<div className="img-back">
							<h4>hugo.latreille@gmail.com</h4>
							<img src={emailSVG} alt="background email" />
						</div>
						<form onSubmit={submitForm}>
							<p>{banner}</p>
							<label htmlFor="name">Name</label>
							<input type="text" onChange={handleName} value={name} />

							<label htmlFor="email">Email</label>
							<input type="email" onChange={handleEmail} value={email} />

							<label htmlFor="message">Message</label>
							<textarea type="text" onChange={handleMessage} value={message} />

							<div className="send-btn">
								<button type="submit">
									send
									<FaPaperPlane className="fa fa-paper-plane" />
									{bool ? (
										<b className="load">
											<img src={load1} alt="chargement" />
										</b>
									) : (
										""
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
				<ToastContainer />
				<Footer />
			</div>
		</div>
	);
}
