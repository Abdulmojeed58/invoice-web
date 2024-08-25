import React from "react";
import Navbar from "./Navbar";

// Components

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div id="modal"></div>
      {children}
    </>
  );
};

export default AuthLayout;
