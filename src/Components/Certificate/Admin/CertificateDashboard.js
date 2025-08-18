import React, { useState } from 'react'
import AddCertificate from '../AddCertificate'
import ViewCertificate from './ViewCertificate'

const CertificateDashboard = () => {
    const [view,setView] = useState()

    const dashboardView = (()=>{
        switch(view){
            case "addStudent":
                return <AddCertificate />
            case "viewCertificate" :
                return<ViewCertificate />   
            default:
                return <h2>Welcome to the Admin Dashboard</h2>;    
        }
    })
  return (
    <div className='container-fluid'>
        <div className='row'>
            <aside className='col-3'>
               <h3 onClick={() => setView("")} className='text-center'>Admin Dashboard</h3>
               <button onClick={() => setView("addStudent")}>Add Certificate</button>
               <button onClick={() => setView("viewCertificate")}>View Certificate</button>
            </aside>
            <div className='col-9'>
                {dashboardView()}
            </div>
        </div>
    </div>
  )
}

export default CertificateDashboard