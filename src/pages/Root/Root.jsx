import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <div className="bg-base-200 mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <div className=" max-w-11/12 mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
