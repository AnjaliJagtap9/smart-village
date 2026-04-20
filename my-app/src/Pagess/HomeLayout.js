import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import LeftSidebar from "../Component/LeftSidebar";
import RightSidebar from "../Component/RightSidebar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import "../Styles/HomeLayout.css";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
     
      <div className="layout">
        
        {/* LEFT SIDEBAR */}
        <div className="left">
          <LeftSidebar />
        </div>

        {/* CENTER CONTENT (CHANGES HERE) */}
        <div className="center">
          <Outlet />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="right">
          <RightSidebar />
        </div>

      </div>
       <Footer />
    </>
  );
}

export default HomeLayout;