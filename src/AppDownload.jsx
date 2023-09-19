import React from 'react'
import illS3 from './assets/illS3.png'
import download from './assets/vector.png'
import rectangle from './assets/Rectangle 2.jpg'
import { Button } from '@mui/material'

const AppDownload = () => {
    return (
        <>

            <div style={{display:"flex",justifyContent :"space-between",marginTop:"8vmax"}}>
                <div style={{ marginLeft: "16vmax", display: "flex", flexDirection: "column" }}>
                    <h3 style={{
                        fontSize: "2.5vmax", wordSpacing: "0.3vmax", lineHeight: "3vmax"
                    }}>
                        Download Our <br /> mobile apps
                    </h3>
                    <img style={{ marginTop: "-0.6vmax", height: "0.19vmax", width: "4.9vmax" }} src={rectangle} alt="rectnagle" />
                    <p style={{ fontSize:"1.3vmax", paddingTop: "1.6vmax", color: "#7D7987", fontWeight: 300, lineHeight: "2vmax" }}>
                        Our dedicated patient engagement app and<br /> web portal allow you to access information <br />instantaneously (no tedeous form, long calls,<br /> or administrative hassle) and securely
                    </p>
                    <button style={{ marginTop: "1.2vmax", alignContent: "center", fontSize: "1.3vmax", width: "12.3vmax", color: "#458FF6", height: "3.7vmax", backgroundColor: "white", border: "0.19vmax solid #458FF6", borderRadius: "2vmax", paddingBottom: "0.4vmax" }}>
                        Download
                        <img style={{ width:"1.1vmax",paddingLeft: "0.5vmax", paddingTop: "0.2vmax" }} src={download} />
                    </button>
                </div>
                <div>
                    <img style={{width:"35vmax",marginRight:"11vmax",marginTop:"1vmax"}} src={illS3} alt="illS2" />
                </div>
            </div>
        </>
    )
}

export default AppDownload;