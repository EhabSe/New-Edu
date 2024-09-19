import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Table from '../../components/Table/Table'
import './dashboardOpp.css'

const DashboardOpp = () => {

    const OppColumns = [
      "No .","Position", "Time","Team", "Available/Not", "Actions"
    ]


  const OppData = [
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
    {No:'1', Position: 'Graphic Design', Time:'5-7h /week', Team:'Editing', Available:'Available'},
  ]

  return (
    <>
        <div className="dashboard-container">
          <div className="opp-container">
            <Sidebar />
            <Table title="Opportunities" btn="Add Opportunity" columns={OppColumns} data={OppData} />
            {/* <Table /> */}
          </div>
        </div>
    </>
  )
}

export default DashboardOpp