import React from 'react'
import mainBanner from './Assets/mainBanner.jpg';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='container-fluid row'>
        <div className='col-md-6 p-5'>
            <h1>Welcome to Naveen Car Travels – Your Trusted Travel Partner</h1>
            <p>Looking for a safe, reliable, and comfortable ride? Look no further than Naveen Car Travels – your one-stop destination for premium car rental and travel services. With years of experience in the travel industry, we take pride in offering top-notch transportation solutions to meet your every need.</p>
            <NavLink to="/services"><button className='btn btn-primary me-2'>Explore Our Services</button></NavLink>
            <NavLink to="/contact"><button className='btn btn-secondary'> Contact Us</button></NavLink>
        </div>
        <div className='col-md-6 p-5'>
           <img src={mainBanner} className='w-100 mainBanner' alt="Car Travels" />
        </div>
    </div>
  )
}

export default Home