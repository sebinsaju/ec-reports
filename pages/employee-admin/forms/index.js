import React from "react";
import { Table } from "reactstrap";
import { ENDPOINT } from "../../../axios/ENDPOINT";
import EmployeeAdminLayout from "../../../components/employee-admin-layout";
import Listing from "../../../components/listing";
import PageHeader from "../../../components/page-header";
import Button from "../../../components/button";
import Link from "next/link";
const Forms = () => {
  return (
    <EmployeeAdminLayout>
      <PageHeader title="Forms" />
      <div
        style={{
          display: "flex",
          justifyContent: "right", 
          marginBottom: "10px",
        }}
      >
        <Button primary>
          <Link href="/employee-admin/forms/create">
            <a>Add New</a>
          </Link>
        </Button>
      </div>
      <Listing endpoint={ENDPOINT.adminForm}>
        {(data) => {
          return(
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Form</th>
                </tr>
              </thead>
              <tbody>
                {data&&data.data&& data.data.map((item,index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                    </tr>
                  )
                })}
                {data && !data.data&& <tr className="py-1"><td>No  Forms</td></tr>}
              </tbody>
            </Table>
          )
        }}
      </Listing>
    </EmployeeAdminLayout>
  );
};

export default Forms;
