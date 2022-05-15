import { useState } from "react";
import SignIn from "./Components/Register/SignIn";
import SignUp from "./Components/Register/SignUp";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [home, setHome] = useState(false);
  
  const signInHandler = (response) => {
    setHome(response);
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn signIn={signInHandler} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<LandingPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
