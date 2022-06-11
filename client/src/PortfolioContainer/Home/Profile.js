/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Profile.scss";
import { IoLogoFacebook } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import TypeIt from "typeit-react";

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="profile-details-name">
						<div className="colz">
							<div className="colz-icon">
								<a href="https://github.com/Hugo-Latreille" target="_blank">
									<BsGithub color="white" size="1.2rem" />
								</a>
								<a
									href="https://www.linkedin.com/in/hugo-latreille/"
									target="_blank"
								>
									<BsLinkedin color="white" size="1.2rem" />
								</a>
							</div>
						</div>
						<p className="primary-text">
							{" "}
							Bonjour, je suis <span className="highlighted-text">Hugo</span>
						</p>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							<h1>
								<TypeIt
									options={{
										loop: true,
									}}
									getBeforeInit={(instance) => {
										instance
											.type("Développeur junior")
											.pause(750)
											.delete(7)
											.pause(2500)
											.type(" Fullstack")
											.pause(2500)
											.delete(10)
											.pause(2500)
											.type(" JavaScript")
											.pause(2500)
											.delete(10)
											.pause(2500)
											.type(" React")
											.pause(2500);

										return instance;
									}}
								/>
							</h1>
							<p className="profile-subtitle">
								Actuellement en reconversion chez O'clock
							</p>
						</span>
					</div>
					<div className="profile-options">
						<button className="btn primary-btn">Prendre contact</button>
						<a href="/CV2022.pdf" download="CVHugo.pdf">
							<button className="btn highlighted-btn">
								Téléchargez mon CV
							</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
