/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Profile.scss";
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
						{/* <svg
							width="75"
							height="75"
							viewBox="0 0 75 75"
							fill="none"
							stroke="white"
							className="profile-scroll-btn"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="scroll">
								<path
									id="Vector"
									d="M40.5 15L34.5 9L28.5 15"
									stroke-width="3"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									id="Vector_2"
									d="M28.5 24L34.5 30L40.5 24"
									stroke-width="3"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<g id="Group">
									<path
										id="Vector_3"
										d="M9 37.5H60"
										stroke-width="3"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
								<path
									id="Vector_4"
									d="M34.5 27V9"
									stroke-width="2.9895"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<g id="Group_2">
									<path
										id="Vector_5"
										d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
										stroke-width="3"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</g>
						</svg> */}
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
