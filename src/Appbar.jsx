import React from 'react'
import logo from './assets/logo.jpg'

const Appbar = () => {
  return (
   <>
     <div style={{position:"relative"}}>
        <div><img  style={{width:120, marginTop:36, marginLeft:210}} src={logo} alt="image0x"/></div>
        <div style={{ position:"absolute",marginTop:-62, marginLeft:"705px" ,display:"flex",justifyContent:"space-between"}}>
           <h4 style={{padding:12,fontSize:18}}>Home</h4>
           <h4 style={{padding:12,fontSize:18,fontWeight:1,color:"grey"}}>Find a Doctor</h4>
           <h4 style={{padding:12,fontSize:18,fontWeight:1,color:"grey"}}>App</h4>
           <h4 style={{padding:12,fontSize:18,fontWeight:1,color:"grey"}}>Testimonial</h4>
           <h4 style={{padding:12,fontSize:18,fontWeight:1,color:"grey"}}>About Us</h4>
        </div>
     </div>
   </>
  )
}

export default Appbar;