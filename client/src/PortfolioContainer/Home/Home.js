import "./home.scss";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";

const Home = () => {
	return (
		<div className="home-container">
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
