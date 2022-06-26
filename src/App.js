import Toggle from "./components/toggle/Toggle";
import { Routes, Route } from "react-router-dom";
import OTPPage from "./views/OTPPage";
import LoginPage from "./views/LoginPage";

function App() {
	return (
		<div className="">
			<>
				<Routes>
					<Route path="/otp" element={<OTPPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
				<Toggle />
			</>
		</div>
	);
}

export default App;
