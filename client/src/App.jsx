import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/common/login/login";
import LandingAboutPage from "./pages/About/About";
import TouristSignup from "./Components/tourist/signup/TouristSignup";
import { Toaster } from "react-hot-toast";
import TouristHome from "./Components/tourist/home/TouristHome";
import NotFound from "./Components/common/not-found/NotFound";
import ForgotPassword from "./Components/common/forgot-password/ForgotPassword";
import AgencyRegister from "./pages/agency/signup/AgencySignup";
import AgencyHome from "./pages/agency/home/home";
import LandingPage from "./Components/landing/home/landingPage";
import AddPackage from "./pages/agency/addPackage/addPackage";
import HotelRegister from "./pages/hotel/signup/hotelSignup";
import "./App.css";
import "./index.css";
import HotelDashboard from "./pages/hotel/dashboard/hotelDashboard";
function App() {
  return (
    <BrowserRouter basename="travel_guide">
      <div className="App">
        <Toaster />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/tourist/home" element={<TouristHome />} />
          <Route path="/tourist/signup" element={<TouristSignup />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Agency */}
          <Route path="/agency/signup" element={<AgencyRegister />} />
          <Route path="/agency/home" element={<AgencyHome />} />
          <Route path="/agency/add-package" element={<AddPackage />} />

          {/* hotels  */}
          <Route path="/hotel/signup" element={<HotelRegister />} />
          <Route path="/hotel/dashboard" element={<HotelDashboard />} />
          <Route path="/about" element={<LandingAboutPage />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
