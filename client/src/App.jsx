import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/common/login/login";
import LandingAboutPage from "./pages/About/About";
import TouristSignup from "./Components/tourist/signup/TouristSignup";
import { Toaster } from "react-hot-toast";
import TouristHome from "./Components/tourist/home/TouristHome";
import NotFound from "./Components/common/not-found/NotFound";
import ForgotPassword from "./Components/common/forgot-password/ForgotPassword";
import AgencyRegister from "./Components/Guide/signup/AgencySignup";
import AgencyHome from "./Components/Guide/home/agencyHome";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename="travel_guide">
      <div className="App">
        <Toaster />
        <Routes>
          <Route exact path="/" element={<AgencyHome />} />
          <Route path="/tourist/home" element={<TouristHome />} />
          <Route path="/tourist/signup" element={<TouristSignup />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Agency REGISTER  */}

          <Route path="/agency/signup" element={<AgencyRegister />} />
          <Route path="/agency/home" element={<Home />} />

          <Route path="/about" element={<LandingAboutPage />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
