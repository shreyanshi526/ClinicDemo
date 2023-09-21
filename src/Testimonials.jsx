import React from 'react'
import GR from './assets/Group (1).png'
import GL from './assets/groupLeft.png'
import RA from './assets/frameT.png'
import LA from './assets/lastAr.png'
import slider from './assets/slider.png'
import MaskGroup from './assets/Mask Group.png'
import rectangle from './assets/Rectangle 17.png'
import Card from '@mui/material/Card'


const Testimonials = () => {
    return (
        <>
            <div style={{ marginTop: "13vmax", display: "flex", position: "relative" }}>

                <img style={{ width: "6vmax", height: "6vmax", marginTop: "12.8vmax", marginLeft: "14.6vmax" }} src={GR} />

                <Card sx={{ marginLeft: "-3.8vmax", width: "67vmax", height: "24vmax", backgroundImage: "linear-gradient(#67C3F3, #5A98F2)", borderRadius: "1.3vmax", }}>

                    <div style={{ marginLeft: "21vmax", display: "flex", flexDirection: "column", marginTop: "2.3vmax" }}>
                        <h4 style={{ color: "white", fontSize: "1.8vmax", wordSpacing: "0.5vmax", wordBreak: "1vmax" }}>What our customer are saying?</h4>
                        <img style={{ marginTop: "-0.4vmax", paddingLeft: "9vmax", height: "0.17vmax", width: "4.9vmax", color: "white", backgroundColor: "#FFFFF" }} src={rectangle} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <div style={{ display: "flex" }}>
                            <img style={{ marginTop: "2.8vmax", marginLeft: "6.9vmax", width: "8vmax", height: "8vmax", border: "0.3vmax solid white", borderRadius: "17vmax" }} src={MaskGroup} />
                            <div style={{ marginTop: "4vmax", marginLeft: "2.8vmax", color: "white" }}>
                                <p style={{ fontWeight: 700, fontSize: "1.6vmax" }}>Edward  &nbsp; Newgate</p>
                                <h5 style={{ marginTop: "-0.7vmax", fontWeight: 50, fontSize: "1.1vmax" }}>Founder circle</h5>
                            </div>
                        </div>
                        <div style={{marginRight:"5vmax",marginTop:"2.8vmax",color:"#FFFFFF",lineHeight:"1.6vmax",wordSpacing:"0.3vmax",fontSize:"1.2vmax"}}>
                            <p>
                                “Our dedicated patient engagement app and<br/>
                                web portal allow you to access information <br/> instantaneously (no tedeous form, long calls,<br/>
                                or administrative hassle) and securely”
                            </p>
                        </div>
                    </div>
                </Card>

                <img style={{ width: "6vmax", height: "6vmax", marginTop: "1vmax", marginLeft: "-4vmax" }} src={GL} />
            </div>
            <div style={{display:"flex",gap:"3vmax",marginLeft:"42vmax",marginTop:"2vmax",}}>
                <img  style={{width:"2vmax"}} src={RA} />
                <img style={{width:"6vmax",height:"1vmax"}} src={slider} />
                <img style={{width:"2vmax"}} src={LA} />
            </div>
        </>
    )
}

export default Testimonials;