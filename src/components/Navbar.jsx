import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] border-b fixed top-0 left-0 px-[50px] flex items-center justify-between">
      <div className="logo">
        <Link href={"/"}>
          <h1>starter-repo</h1>
        </Link>
      </div>
      <div className="menu">
        <Link href={"/signin"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
