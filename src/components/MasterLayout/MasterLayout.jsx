import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import "./MasterLayout.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
function MasterLayout() {
  return (
    <div className="master-layout">
      <div>
        <Navbar />
      </div>
      <div>
        {" "}
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MasterLayout;
