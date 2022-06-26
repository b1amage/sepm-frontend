import Toggle from "./components/toggle/Toggle";
import { Routes, Route } from "react-router-dom";
import OTPPage from "./views/OTPPage";

function App() {
	return (
		<div className="">
			<>
				<Routes>
					<Route path="/otp" element={<OTPPage />} />
				</Routes>
				<Toggle />
			</>
		</div>
	);
}

export default App;
