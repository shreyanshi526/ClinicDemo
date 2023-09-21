import React from 'react'
import GR from './assets/Group (1).png'
import LName from './assets/Trafalgar.png'
import ellipse from './assets/Ellipse 8.png'
import Card from '@mui/material/Card'
import Ti from './assets/T.png'


const Footer = () => {
    return (
        <>
            <div style={{ marginBottom: "-1vmax" }}>
                <div style={{}}>
                    <img style={{ marginBottom: "-30vmax", width: "7.5vmax", height: "7vmax", }} src={GR} />
                    <img style={{ marginBottom: "-3vmax", width: "7.5vmax", height: "7vmax", marginLeft: "79vmax" }} src={GR} />
                    <Card style={{ display: "flex", justifyContent: "space-between", marginLeft: "-1vmax", width: "99.09vmax", marginBottom: "-0vmax", height: "30vmax", backgroundImage: "linear-gradient(#67C3F3, #5A98F2)" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "13.5vmax", marginTop: "6.8vmax" }}>
                            <div style={{ display: "flex", }}>
                                <img style={{width:"3vmax"}} src={ellipse} />
                                <img style={{ marginLeft: "-2.2vmax", paddingTop: "0.8vmax", height: "1.5vmax" }} src={Ti} />
                                <img style={{ marginLeft: "2vmax", height: "1.6vmax", marginTop: "1vmax" }} src={LName} />
                            </div>
                            <p  style={{marginTop:"2.9vmax",color:"#FFFFFF",fontSize:"1.2vmax",lineHeight:"1.6vmax"}}>
                                Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br />
                                for everyone
                            </p>
                            <p style={{color:"#FFFFFF",fontSize:"1.2vmax",lineHeight:"1.4vmax"}}>
                                ©Trafalgar PTY LTD 2020. All rights reserved
                            </p>
                        </div>
                        <div style={{display:"flex",color:"white",marginRight:"12vmax",gap:"4.5vmax", marginTop: "6.8vmax"}}>
                             <div style={{display:"flex",flexDirection:"column",}}>
                                   <p style={{fontWeight:"800",fontSize:"1.25vmax"}}>Company</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"1.2vmax"}}>About</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Testimonials</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Find a doctor</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Apps</p>
                             </div>
                             <div style={{display:"flex",flexDirection:"column",}}>
                                   <p style={{fontWeight:"800",fontSize:"1.25vmax"}}>Region</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"1.2vmax"}}>Indonesia</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Singapore</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Hong Kong</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Canada</p>
                             </div>
                             <div style={{display:"flex",flexDirection:"column",}}>
                                   <p style={{fontWeight:"800",fontSize:"1.25vmax"}}>Help</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"1.2vmax"}}>Help center</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Contact supports</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>Instructions</p>
                                   <p style={{fontSize:"1.2vmax",marginTop:"-0vmax"}}>How it works</p>
                             </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Footer;