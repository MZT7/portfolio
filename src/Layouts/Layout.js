import React from "react";
import Navbar from "../inc/Navbar";
const Layout = (props) => {
  return (
    <div className="min-h-screen px-4 pt-16 mx-auto bg-gray-300">
      <Navbar />
      <main className="container min-h-screen px-4 mx-auto overflow-hidden">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
