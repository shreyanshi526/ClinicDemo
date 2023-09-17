import React from 'react'
import rectangle from './assets/Rectangle 2.jpg'
import bgelment from './assets/bg element.jpg'

const Services = () => {
    return (
        <>
            <div>
                <div style={{ width: "830px", height: "177px", marginTop: "410px", marginLeft: "270px" }}>
                    <h1 style={{ marginLeft: "269px" }}>Our services</h1>
                    <img style={{ marginLeft: 333, marginTop:"-19px" }} src={rectangle} alt="rectangle2" />
                    <p style={{
                        fontFamily:"Muli",
                        fontWeight:300,
                        fontSize:"16px",
                        lineHeight:"25px",
                        alignContent:"center",
                        color:"#7D7987",
                        marginLeft:"25px"
                    }}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment
                        <br /> &nbsp;&nbsp;&nbsp;with our highly qualified doctors you can consult with us which type of service is suitable for your health
                    </p>
                </div>
            </div>
        </>
    )
}

export default Services;