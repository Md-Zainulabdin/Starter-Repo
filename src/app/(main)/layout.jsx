import React from "react";
import Navbar from "@/components/Navbar";

const MainLayot = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-[70px] px-[20px] md:px-[50px]">{children}</div>
      </div>
    </>
  );
};

export default MainLayot;
