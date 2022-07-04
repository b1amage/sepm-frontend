import NavBar from "./components/header/NavBar";
import Toggle from "./components/toggle/Toggle";
import AnimatedRoutes from "./utilities/AnimatedRoutes";
function App() {
	return (
		<div className="">
			<>
				<NavBar />
				<AnimatedRoutes />
				<Toggle />
			</>
		</div>
	);
}

export default App;
