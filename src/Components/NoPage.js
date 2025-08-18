import React from 'react'
import errorimg from './Car Travels/Assets/error image.webp'

const NoPage = () => {
  return (
    <div className='container text-center p-5'>
      <h1>404 - Page Not Found</h1>
      <img src={errorimg} alt="Error" className='w-50' />
    </div>
  )
}

export default NoPage