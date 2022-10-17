import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { instance } from "../../../../axios/admin-instance";
import AddNewUser from "../../../../components/add-new-user";
import EmployeeAdminLayout from "../../../../components/employee-admin-layout";
import PageHeader from "../../../../components/page-header";
import { ENDPOINT } from "../../../../axios/ENDPOINT";
import { getData } from "../../../../utility/getData";
const UserEdit = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      instance.get(`${ENDPOINT.userSingle}/${router.query.id}`).then((res)=>{if(res && res.data){setData(res.data.user[0])}})
    }
  }, [router.isReady]);
  const initialValues={
    ...data
  }
  if(!data){
    return null
  }
  return (
    <EmployeeAdminLayout>
      <PageHeader title="Edit User" />
      <AddNewUser init={initialValues}/>
    </EmployeeAdminLayout>
  );
};

export default UserEdit;
