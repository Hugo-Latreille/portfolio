import "./home.scss";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

const Home = (props) => {
	return (
		<div className="home-container" id={props.id || ""}>
			<Header />
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
