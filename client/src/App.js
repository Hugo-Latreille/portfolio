import "./App.scss";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
// import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
// import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
	return (
		<div className="App">
			{/* <PortfolioContainer /> */}

			<Home />
			<AboutMe />
			{/* <Resume /> */}
		</div>
	);
}

export default App;
