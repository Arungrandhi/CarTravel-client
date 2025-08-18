import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewService = () => {
    const [services, setServices] = useState([]);
    const [serviceType,setServiceType] = useState("");
    const [description,setDescription] = useState("");
    const [id,setId] = useState("");
    
    useEffect(() => {
        axios.get("https://cartravel-server.onrender.com/services")
            .then((res) => setServices(res.data))
            .catch((err) => console.log(err));
    })

    const deleteService = (serviceId) => {
        axios.delete(`https://cartravel-server.onrender.com/services/${serviceId}`)
            .then(() => alert("Service Deleted"))
            .catch((err) => console.log(err));
    }

    const getOnRecord = (serviceId) => {
        axios.get(`https://cartravel-server.onrender.com/services/${serviceId}`)
            .then((res) => {
                setServiceType(res.data.serviceType);
                setDescription(res.data.description);
                setId(res.data._id);
            })
            .catch((err) => console.log(err));
        }

    const updateService = (e) => {
        e.preventDefault();
        axios.put(`https://cartravel-server.onrender.com/services/${id}`,{serviceType, description })
            .then(() => alert("Service Updated"))
            .catch((err) => console.log(err));
    }

  return (
    <div className='container p-5'>
        <h2>View Service</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Service Type</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service, index) => {
                        return (
                            <tr key={index}>
                                <td>{service.serviceType}</td>
                                <td>{service.description}</td>
                                <td>
                                    <button onClick={() => getOnRecord(service._id)} className='btn btn-primary me-3' data-bs-target="#update" data-bs-toggle="modal">Edit</button>
                                    <button onClick={() => deleteService(service._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <div className='modal' id="update">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2>Update Enquiries</h2>
                    </div>
                    <div className='modal-body'>
                        <form  onSubmit={updateService}  className='bg-light p-3' >
                            <div className='form-floating mb-3'>
                                    <input type="text" value={serviceType} onChange={(e)=>setServiceType(e.target.value)} className='form-control mb-3' placeholder='Enter Service Type' />
                                    <label>Enter Service Type</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control mb-3' placeholder='Enter Description' />
                                    <label>Enter Description</label>
                            </div>
                            <input type="submit" className='form-control'  />         
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewService