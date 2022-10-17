import React from 'react'
import AddNewUser from '../../../../components/add-new-user'
import EmployeeAdminLayout from '../../../../components/employee-admin-layout'
import PageHeader from '../../../../components/page-header'

const AddNew = () => {
  return (
    <EmployeeAdminLayout>
        <PageHeader title="Create New User"/>
        <AddNewUser/>
    </EmployeeAdminLayout>
  )
}

export default AddNew;