import "./App.scss";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import Slider from "./PortfolioContainer/Slider/Slider";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import { useObserver } from "./utilities/scrollObserver";
// import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";

function App() {
	const [testRef, isVisible] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 1,
	});

	return (
		<div className="App" id="app">
			{/* <PortfolioContainer /> */}

			<Home isVisible={isVisible} />
			<AboutMe forwardRef={testRef} />
			<Resume />
			<Slider />
			{/* <Testimonial /> */}
			<ContactMe />
		</div>
	);
}

export default App;
