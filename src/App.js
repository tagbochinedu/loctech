import SignIn from "./Components/Register/SignIn";
import SignUp from "./Components/Register/SignUp";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
