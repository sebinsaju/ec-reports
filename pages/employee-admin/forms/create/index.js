import React from 'react'
import CreateFormComponent from '../../../../components/create-form'
import EmployeeAdminLayout from '../../../../components/employee-admin-layout'
import PageHeader from '../../../../components/page-header'

const CreateForm = () => {
  return (
    <EmployeeAdminLayout>
        <PageHeader title="Create Form"/>
        <CreateFormComponent />
    </EmployeeAdminLayout>
  )
}

export default CreateForm