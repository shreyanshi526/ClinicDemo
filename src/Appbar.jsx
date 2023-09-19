import React from 'react'
import logo from './assets/logo.jpg'

const Appbar = () => {
  return (
    <>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", marginLeft: "12vmax", marginRight:"6.7vmax", }}>
        <div><img style={{ width: "10vmax", marginTop: "2.5vmax" }} src={logo} alt="image0x" /></div>
        <div style={{
          display: "flex",
          gap: "2.9vmax",
          marginTop: "1.1vmax"
        }}>
          <h4 style={{  fontSize:"1.4vmax",color: "#1F1534", fontWeight: 900 }}>Home</h4>
          <h4 style={{  fontSize:"1.4vmax",fontWeight: 100, color: "#1F1534", opacity: "50%" }}>Find a doctor</h4>
          <h4 style={{  fontSize:"1.4vmax",fontWeight: 100, color: "#1F1534", opacity: "50%" }}>App</h4>
          <h4 style={{  fontSize:"1.4vmax",fontWeight: 100, color: "#1F1534", opacity: "50%" }}>Testimonials</h4>
          <h4 style={{  fontSize:"1.4vmax",fontWeight: 100, color: "#1F1534", opacity: "50%" }}>About Us</h4>
        </div>
      </div>
    </>
  )
}

export default Appbar;