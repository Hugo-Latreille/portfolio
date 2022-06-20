import "./App.scss";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import Slider from "./PortfolioContainer/Slider/Slider";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";

function App() {
	return (
		<div className="App" id="app">
			{/* <PortfolioContainer /> */}

			<Home />
			<AboutMe />
			<Resume />
			<Slider />
			{/* <Testimonial /> */}
			<ContactMe />
		</div>
	);
}

export default App;
