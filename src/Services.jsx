import React from 'react'
import rectangle from './assets/Rectangle 2.jpg'
import bgelment from './assets/bg element.png'
import eleOrS from './assets/elemntOurS.png'
import doctorF from './assets/Frame (1).png'
import consultation from './assets/consultation.jpg'
import detail from './assets/detail info.jpg'
import emergency from './assets/emergency.jpg'
import pharmacy from './assets/pharmacy.png'
import tracking from './assets/tracking.jpg'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

const Services = () => {
    return (
        <>
            <div>
                <div style={{ marginTop: "5.7vmax", marginLeft: "21vmax", display: "flex", flexDirection: "column" }}>
                    <h4 style={{ paddingLeft: "20vmax", fontWeight: 700, fontSize: "2.7vmax" }}>Our services</h4>
                    <img style={{ paddingLeft: "25.3vmax", marginTop: "-1.5vmax", width: "4.1vmax" }} src={rectangle} alt="rectangle2" />
                    <p style={{
                        marginTop: "2vmax",
                        fontFamily: "Muli",
                        fontWeight: 300,
                        fontSize: "1.3vmax",
                        lineHeight: "1.7vmax",
                        alignContent: "center",
                        color: "#7D7987",   
                        marginLeft: "-1vmax"
                    }}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
                        <br /> &nbsp;&nbsp;&nbsp;    with our highly qualified doctors you can consult with us which type of service is suitable for your health
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", position: "relative", marginTop: " -6vmax" }}>

                <img style={{ width: "56vmax", height: "52vmax", marginLeft: "-1vmax", marginTop: "-5vmax" }} src={bgelment} alt="bgelement" />
                <img style={{ marginLeft: "18vmax", width: "8vmax", height: "8vmax", paddingTop: "23.5vmax" }} src={eleOrS} alt="elemntOR" />

                <div style={{ display: "flex", marginTop: "9vmax", marginLeft: "-63vmax", gap: "2vmax", flexWrap: "wrap", flexBasis: "60vmax" }}>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax", }}>

                        <img style={{ width: "4.9vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax", }} src={doctorF} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.9vmax" }}>Search doctor</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>Choose your doctor from thousands  <br />of specialist, general, and <br /> trusted hospitals</p>
                    </Card>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax" }}>

                        <img style={{ width: "3.8vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax" }} src={pharmacy} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.4vmax" }}>Online pharmacy</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>Buy  your medicines with our mobile application with a simple delivery system</p>
                    </Card>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax" }}>

                        <img style={{ width: "3.8vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax" }} src={consultation} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.4vmax" }}>Consultation</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>Free consultation with our trusted doctors and get the best  <br /> recomendations</p>
                    </Card>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax" }}>

                        <img style={{ width: "3.7vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax" }} src={detail} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.7vmax" }}>Detail info</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>Free consultation with our trusted doctors and get the best  <br />recomendations </p>
                    </Card>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax" }}>

                        <img style={{ width: "4.9vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax" }} src={emergency} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.4vmax" }}>Emergency</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>You can get 24/7 urgent care for yourself or your children and your
                            <br /> lovely family</p>
                    </Card>

                    <Card variant="filled" elevation={5} sx={{ width: "18.5vmax", height: "19vmax", borderRadius: "1.8vmax" }}>

                        <img style={{ width: "3.7vmax", paddingTop: "1.8vmax", paddingLeft: "2.3vmax" }} src={tracking} alt="searchaDoctore" />
                        <h5 style={{ fontSize: "1.4vmax", paddingLeft: "2.3vmax", paddingTop: "-1vmax", marginTop: "1.4vmax" }}>Tracking</h5>
                        <p style={{ fontSize: "1vmax", paddingLeft: "2.3vmax", marginTop: "-1.3vmax", lineHeight: "1.39vmax", color: "#7D7987", fontWeight: 300 }}>Track and save your medical <br /> history and health data </p>
                    </Card>

                </div>

            </div>

            <button style={{ marginTop: "1.2vmax", alignContent: "center", fontSize: "1.3vmax", width: "12.3vmax", color: "#458FF6", height: "3.7vmax", backgroundColor: "white", border: "0.19vmax solid #458FF6", borderRadius: "2vmax", 
              marginLeft:"41vmax",fontWeight:500,paddingBottom: "0.4vmax" }}>
                Learn More
               
            </button>
        </>

    )
}

export default Services;