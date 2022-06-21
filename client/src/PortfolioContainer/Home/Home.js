import "./home.scss";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

const Home = ({ isVisible, isVisible2, isVisible3, isVisible4 }) => {
	return (
		<div className="home-container" id="home">
			<Header
				isVisible={isVisible}
				isVisible2={isVisible2}
				isVisible3={isVisible3}
				isVisible4={isVisible4}
			/>
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
