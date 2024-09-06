import React from "react";
import "../../../src/styles/Home.css";

import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="content">{children}</div>
    </>
  );
};
export default Layout;
