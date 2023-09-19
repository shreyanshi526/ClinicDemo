import React from 'react'
import element from './assets/element.jpg'
import illustration from './assets/illustration.jpg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


const Landing = () => {
    return (
        <>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>

                <img src={element} style={{ marginTop: "3vmax", marginLeft: "-0.4vmax", width: "6vmax", height: "8vmax" }} alt='image1' />
                <div style={{marginTop:"6.7vmax",width:"32vmax"}}>
                    <h1 style={{ fontSize:"3.2vmax" }}>Virtual healthcare <br /> For you</h1>
                    <h5 style={{
                        color: "#7D7987",lineHeight:"1.7vmax",wordSpacing:"0.5vmax",
                        fontWeight:300,fontSize:"1.3vmax"
                    }}>Trafalgar  provides  progressive and  affordable<br />healthcare, accessible on mobile and online <br /> for everyone</h5>
                    <Button variant='filled' size='large' sx={{ backgroundColor: "#458FF6", borderRadius: 30, color: "white", fontSize:"1.2vmax" }}>consult today</Button>
                </div>
                <img style={{width:"40vmax",height:"34vmax",paddingRight:"6.7vmax",paddingTop:"2.5vmax"}} src={illustration} alt='image2' />

            </div>
        </>
    )
}

export default Landing;