import "./home.scss";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

const Home = ({ isVisible }) => {
	return (
		<div className="home-container" id="home">
			<Header isVisible={isVisible} />
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
