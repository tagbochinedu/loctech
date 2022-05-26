import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import LandingPage from "./Components/Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/home" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
