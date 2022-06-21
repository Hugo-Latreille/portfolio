import "./App.scss";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import Slider from "./PortfolioContainer/Slider/Slider";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import { useObserver } from "./utilities/scrollObserver";
import ReactCursorPosition from "react-cursor-position";
// import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";

function App() {
	const [testRef, isVisible, isRevealed] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 0.6,
	});
	const [testRef2, isVisible2, isRevealed2] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 0.6,
	});
	const [testRef3, isVisible3, isRevealed3] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 0.6,
	});
	const [testRef4, isVisible4, isRevealed4] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 0.6,
	});
	const [testRef5, isVisible5] = useObserver({
		root: null,
		rootMargin: "0px",
		threshold: 0.6,
	});

	// useEffect(() => {
	// 	console.log(testRef2.current);
	// 	console.log(isVisible2);
	// }, [testRef2, isVisible2]);
	// useEffect(() => {
	// 	console.log(isRevealed);
	// 	console.log(isVisible);
	// }, [testRef, isVisible, isRevealed]);

	return (
		<div className="App" id="app">
			{/* <PortfolioContainer /> */}
			<ReactCursorPosition>
				<Home
					isVisible={isVisible}
					isVisible2={isVisible2}
					isVisible3={isVisible3}
					isVisible4={isVisible4}
					isVisible5={isVisible5}
					forwardRef={testRef5}
				/>
			</ReactCursorPosition>
			<AboutMe forwardRef={testRef} isVisible={isRevealed} />
			<Resume forwardRef={testRef2} isVisible2={isRevealed2} />
			<Slider forwardRef={testRef3} isVisible3={isRevealed3} />
			{/* <Testimonial /> */}
			<ContactMe forwardRef={testRef4} isVisible4={isRevealed4} />
		</div>
	);
}

export default App;
