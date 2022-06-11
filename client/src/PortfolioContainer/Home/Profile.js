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
					<div className="colz">
						<a href="https://github.com/Hugo-Latreille">
							<BsGithub color="white" size="1.5rem" />
						</a>
						<a href="https://www.linkedin.com/in/hugo-latreille/">
							<BsLinkedin color="white" size="1.5rem" />
						</a>
					</div>

					<div className="profile-details-name">
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
											.type("Développeur junior 🧒")
											.pause(750)
											.delete(9)
											.pause(2500)
											.type(" Fullstack 💻")
											.pause(2500)
											.delete(12)
											.pause(2500)
											.type(" JavaScript 🤒")
											.pause(2500)
											.delete(12)
											.pause(2500)
											.type(" React ❤️‍🔥")
											.pause(2500);

										return instance;
									}}
								/>
							</h1>
						</span>
						<p className="profile-subtitle">En reconversion chez O'clock</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
