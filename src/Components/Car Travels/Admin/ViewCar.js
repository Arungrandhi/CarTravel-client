import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCar = () => {
   const [car,setCars] = useState([])
   const [carName, setCarName] = useState("")
   const [carModel, setCarModel] = useState("")
   const [category, setCategory] = useState("")
   const [pricePerDay, setPricePerDay] = useState("")
   const [id, setId] = useState("")

   useEffect(() => {
      axios.get("https://cartravel-server.onrender.com/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err))
   })

   const getOneRecord = (carid) => {
      axios.get(`https://cartravel-server.onrender.com/cars/${carid}`)
      .then((res) => {
            setCarName(res.data.carName)
            setCarModel(res.data.carModel)
            setCategory(res.data.category)
            setPricePerDay(res.data.pricePerDay)
            setId(res.data._id)  
      })
      .catch((err) => console.log(err))
    }

    const deleteCar=(carId)=>{
            axios.delete(`https://cartravel-server.onrender.com/cars/${carId}`)
            .then(()=>alert("Car Deleted"))
            .catch((err)=>console.log(err))
    }

    const updateCar=(e)=>{
        e.preventDefault();
        axios.put(`https://cartravel-server.onrender.com/cars/${id}`,{carName,carModel,category,pricePerDay})
        .then((res)=> alert(" Car Updated"))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container p-5'>
        <h2>View Car Details</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Car Name</th>
                    <th>Car Model</th>
                    <th>Category</th>
                    <th>Price Per Day</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    car.map((car, index) => {
                        return (
                            <tr key={index}>
                                <td>{car.carName}</td>
                                <td>{car.carModel}</td>
                                <td>{car.category}</td>
                                <td>{car.pricePerDay}</td>
                                <td>
                                    <button className='btn btn-primary me-2' onClick={()=>getOneRecord(car._id)} data-bs-target="#update" data-bs-toggle='modal'>Edit</button>
                                    <button className='btn btn-danger' onClick={()=>deleteCar(car._id)} >Delete</button>                                
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <div className='modal fade' id="update">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2>Update Enquiries</h2>
                    </div>
                    <div className='modal-body'>
                        <form  onSubmit={updateCar}  className='bg-light p-3' >
                            <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' value={carName} placeholder='name' onChange={(e)=>setCarName(e.target.value)}/ >
                                    <label>Enter Car Name</label>
                            </div>
                            <div className='form-floating mb-3'>
                                    <input type='text' className='form-control' value={carModel} placeholder='name' onChange={(e)=>setCarModel(e.target.value)}/ >
                                    <label>Car Model</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type='text' className='form-control'value={category} placeholder='name' onChange={(e)=>setCategory(e.target.value)}/ >
                                    <label>Category</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input type='text' className='form-control'value={pricePerDay} placeholder='name' onChange={(e)=>setPricePerDay(e.target.value)}/ >
                                    <label>Price Per Day</label>
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

export default ViewCar