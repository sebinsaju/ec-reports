import React from 'react'
import EmployeeAdminLayout from '../../components/employee-admin-layout'
import Listing from '../../components/listing'
import Loading from '../../components/loading'
import PageHeader from '../../components/page-header'
import Sidebar from '../../components/sidebar'

const EmployeeAdmin = () => {
  return (
    <EmployeeAdminLayout>
      <PageHeader title="Dashboard"/>
    </EmployeeAdminLayout>
  )
}

export default EmployeeAdmin