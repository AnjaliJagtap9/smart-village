import { BrowserRouter, Routes, Route } from "react-router-dom";

import CitizenDashboard from "./Pagess/CitizenDashboard/CitizenDashboard";
import Login from "./Pagess/Login";
import Register from "./Pagess/Register";
import HomeLayout from "./Pagess/HomeLayout";
import Home from "./Pagess/Home";
import HowToApply from "./Pagess/HowToApply";


import AdminDashboard from "./Pagess/AdminDashboard/AdminDashboard";
import StudentSchemes from "./Pagess/CitizenDashboard/StudentSchemes";
import FarmerScheme from "./Pagess/CitizenDashboard/FarmerScheme";
import WomenSchemes from "./Pagess/CitizenDashboard/WomenSchemes";
import SeniorScheme from "./Pagess/CitizenDashboard/SeniorScheme";
import LabourScheme from "./Pagess/CitizenDashboard/LabourScheme";
import SchemesPortal from "./Pagess/CitizenDashboard/SchemesPortal";
import AIRecommender from "./Pagess/CitizenDashboard/AIRecommender";
import TrackApplication from "./Pagess/CitizenDashboard/TrackApplication";
import SarpanchDashboard from "./Pagess/SarpanchDashboard/SarpanchDashboard";
import SchemePage from "./Pagess/CitizenDashboard/SchemePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website Layout */}
        <Route path="/" element={<HomeLayout />}>

          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

          <Route path="howtoapply" element={<HowToApply />} />

          {/* <Route path="student-schemes" element={<StudentSchemes />} />

          <Route path="farmer-schemes" element={<FarmerScheme />} />

          <Route path="women-schemes" element={<WomenSchemes />} />

          <Route path="senior-schemes" element={<SeniorScheme />} />
          <Route path="labour-schemes" element={<LabourScheme />} /> */}
          <Route path="schemes" element={<SchemesPortal />} />
          <Route path="schemes/:type" element={<SchemePage />} />
          <Route path="ai-schemes" element={<AIRecommender />} />
          <Route path="track-application" element={<TrackApplication />} />
        </Route>

        {/* ONLY FULL PAGE DASHBOARD */}
        <Route path="/citizen" element={<CitizenDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/sarpanch" element={<SarpanchDashboard />} />
       

       {/* Add more routes as needed */}  
      </Routes>
    </BrowserRouter>
  );
}

export default App;