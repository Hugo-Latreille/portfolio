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
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import ContactHeader from "./ContactHeader";

export default function ContactMe({ forwardRef, isVisible4 }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleURLNodeEnv = () => {
		if (process.env.NODE_ENV === "development") {
			return "http://localhost:5000/contact";
		}
		return `/contact`;
	};

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

			const res = await axios.post(handleURLNodeEnv(), data);
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
			className="about-container"
			style={{
				backgroundColor: darkMode ? "#2e517a" : "rgba(25, 138, 153, 1)",
			}}
		>
			<ContactHeader />
			<div
				className={
					isVisible4
						? "main-container fade-in--last reveal"
						: "main-container fade-in--last"
				}
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
