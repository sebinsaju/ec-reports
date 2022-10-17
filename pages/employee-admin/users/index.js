import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import { ENDPOINT } from "../../../axios/ENDPOINT";
import Button from "../../../components/button";
import EmployeeAdminLayout from "../../../components/employee-admin-layout";
import Listing from "../../../components/listing";
import Loading from "../../../components/loading";
import PageHeader from "../../../components/page-header";

const Users = () => {
  const router = useRouter();
  const userEditHandle = (id) => {
      router.push(`/employee-admin/users/edit/${id}`)
  };
  return (
    <EmployeeAdminLayout>
      <PageHeader title="Users" />
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginBottom: "10px",
        }}
      >
        <Button primary>
          <Link href="/employee-admin/users/add-new">
            <a>Add New</a>
          </Link>
        </Button>
      </div>
      <Listing endpoint={ENDPOINT.adminUsers}>
        {(data, error) => {
          return (
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  {/* <th>Password</th> */}
                  <th>Created on</th>
                  <th>Modified on</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.users &&
                  data.users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        {/* <td>{item.password}</td> */}
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td>
                          <span
                            style={{ cursor: "Pointer" }}
                            onClick={()=>{userEditHandle(item._id)}}
                          >
                            Edit
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                {/* {!data.users && <tr>No Users</tr>} */}
              </tbody>
            </Table>
          );
        }}
      </Listing>
    </EmployeeAdminLayout>
  );
};

export default Users;
