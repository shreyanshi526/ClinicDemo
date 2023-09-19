import React from 'react'
import illS2 from './assets/illustrationS2.png'
import rectangle from './assets/Rectangle 2.jpg'
import element from './assets/element.jpg'

const LeadingHealthcare = () => {
    return (
        <>
            <div style={{ marginTop: "10vmax" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "9vmax" }}>

                    <img style={{ width: "37vmax" }} src={illS2} alt="illus2" />

                    <div style={{ display: "flex", flexDirection: "column", marginRight: "16vmax" }}>
                        <h3 style={{
                            fontSize: "2.5vmax", wordSpacing: "0.3vmax", lineHeight: "3vmax"
                        }}>
                            Leading healthcare <br /> providers
                        </h3>
                        <img style={{ marginTop: "-0.6vmax", height: "0.19vmax", width: "4.9vmax" }} src={rectangle} alt="rectnagle" />
                        <p style={{ fontSize:"1.3vmax",paddingTop: "1.6vmax", color: "#7D7987", fontWeight: 300, lineHeight: "2vmax" }}>
                            Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride<br />
                            in the solutions we deliver
                        </p>
                        <button style={{ marginTop: "1.2vmax", alignContent: "center", fontSize: "1.3vmax", width: "12.3vmax", color: "#458FF6", height: "3.7vmax", backgroundColor: "white", border: "0.19vmax solid #458FF6", borderRadius: "2vmax", paddingBottom: "0.4vmax" }}>
                            Learn more
                            
                        </button>
                    </div>
                </div>
                <div>
                    <img style={{ marginLeft: "89vmax",width:"5vmax" }} src={element} alt="elemnt" />
                </div>
            </div>
        </>
    )
}

export default LeadingHealthcare;