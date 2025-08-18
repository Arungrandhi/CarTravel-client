import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from './Cars'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import NoPage from '../NoPage'
import Login from './Admin/Login'
import DashBoard from './Admin/DashBoard'
import CarDetails from '../CarDetails'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/cars' Component={Cars} />
      <Route path='/carDetails/:id' Component={CarDetails} />
      <Route path='/services' Component={Services} />
      <Route path='/contact' Component={Contact} />
      <Route path='*' Component={NoPage} />
      <Route path='/admin' Component={Login} />
      <Route path='/Dashboard' Component={DashBoard} />
    </Routes>

  )
}

export default Routing