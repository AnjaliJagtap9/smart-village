import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pagess/Login";
import Register from "./Pagess/Register";
import HomeLayout from "./Pagess/HomeLayout"
import Home from "./Pagess/Home";
// import HowToApply from "./Pagess/HowToApply";
import Dashboard from "./Pagess/Citizen/CitizenDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout applied */}
         <Route path="/" element={<HomeLayout />}>
         {/* <Route path="Header" element={<Header />} />
          {/* Center content pages */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
           {/* <Route path="Navbar" element={<Navbar /> } />  */}
          {/* <Route path="howtoapply" element={<HowToApply />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
        
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
