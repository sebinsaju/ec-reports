import React from "react";
import Sidebar from "../sidebar";

const EmployeeAdminLayout = ({ children }) => {
  return (
      <div>
      <Sidebar />
      <div style={{ paddingLeft: "350px" }}>
        <div className="container pb-2">{children}</div>
      </div>
    </div>
  );
};

export default EmployeeAdminLayout;
