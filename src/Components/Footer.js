import React from 'react'
import bgImg from "./assets/logocolor.jpg"

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#F8F7FA"}} className="px-md-5">
        <div className="container">
            <div className="d-flex flex-md-row flex-column gap-md-0 gap-4 py-5 justify-content-between">
            <a href="#"><img src={bgImg} width={150} height={50} alt="footer logo" /></a>
                <div className="d-flex flex-column gap-2">
                    <p className='fw-bold primary-color mb-2'>Links</p>
                    <a href="#" className='text-muted text-decoration-none'>Home</a>
                    <a href="#" className='text-muted text-decoration-none'>About</a>
                    <a href="#" className='text-muted text-decoration-none'>Events</a>
                    <a href="#" className='text-muted text-decoration-none'>Contact</a>
                </div>
                <div className="d-flex flex-column gap-2">
                    <p className='fw-bold primary-color mb-2'>Links</p>
                    <a href="#" className='text-muted text-decoration-none'>Home</a>
                    <a href="#" className='text-muted text-decoration-none'>About</a>
                    <a href="#" className='text-muted text-decoration-none'>Events</a>
                    <a href="#" className='text-muted text-decoration-none'>Contact</a>
                </div>
                <div className="d-flex flex-column gap-2">
                    <p className='fw-bold primary-color mb-2'>Links</p>
                    <a href="#" className='text-muted text-decoration-none'>Home</a>
                    <a href="#" className='text-muted text-decoration-none'>About</a>
                    <a href="#" className='text-muted text-decoration-none'>Events</a>
                    <a href="#" className='text-muted text-decoration-none'>Contact</a>
                </div>
            </div>
            <hr />

            <div className="py-2 text-center text-muted">
                <h6>Copyright © agendacultural.es 2022 - 2023</h6>
                <p className='m-0'>Developed By <a href="https://era-coding.com/" className='fw-bold text-decoration-none text-muted'>Era Coding</a></p>
            </div>
        </div>
    </footer>
  )
}
