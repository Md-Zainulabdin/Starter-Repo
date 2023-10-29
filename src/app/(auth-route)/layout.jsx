import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">{children}</div>
    </>
  );
};

export default AuthLayout;
