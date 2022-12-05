import React from 'react'
import bgImg from "./assets/logocolor.jpg"

export default function Navbar() {
  return (
    <nav className='p-3' style={{backgroundColor:"#F8F7FA"}}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
          <a href="" className='col-2 fs-4 fw-bold'>
                <img src={bgImg} width="100" alt="navbar logo" />
            </a>
            <div className=" d-flex gap-4">
                <a href="#" className='text-decoration-none fw-bold primary-color'>Home</a>
                <a href="#" className='text-decoration-none fw-bold primary-color'>About</a>
                <a href="#" className='text-decoration-none fw-bold primary-color'>Events</a>
            </div>
          </div>
        </div>

    </nav>
  )
}
