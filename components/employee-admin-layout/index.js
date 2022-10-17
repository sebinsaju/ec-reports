import React from "react";
import Sidebar from "../sidebar";

const EmployeeAdminLayout = ({ children }) => {
  return (
      <div  style={{backgroundColor:"rgb(244, 244, 244)"}}>
      <Sidebar />
      <div style={{ paddingLeft: "350px" }}>
        <div className="container pb-2 pt-2" style={{minHeight:"100vh"}}>{children}</div>
      </div>
    </div>
  );
};

export default EmployeeAdminLayout;
