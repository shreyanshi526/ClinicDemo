import React from 'react'
import LA from './assets/lastAr.png'
import GR from './assets/Group (1).png'
import mg1 from './assets/mg1.png'
import mg2 from './assets/mg2.png'
import mg3 from './assets/mg3.png'
import rectangle from './assets/Rectangle 2.jpg'
import ele2 from './assets/elelatest.png'
import Card from '@mui/material/Card'

const Latest = () => {
    return (
        <>
            <div style={{ marginTop: "6vmax", position: "relative", display: "flex", flexDirection: "column", marginLeft: "14.5vmax" }}>
                <h4 style={{ paddingLeft: "20vmax", fontWeight: 700, fontSize: "2.7vmax" }}>Check out our latest article</h4>
                <img style={{ paddingLeft: "32.3vmax", marginTop: "-1.2vmax", width: "4.1vmax" }} src={rectangle} alt="rectangle2" />
            </div>
            <div style={{ position: "relative" }}>
                <div style={{ display: "flex", marginLeft: "13.5vmax", gap: "50.1vmax" }}>
                    <img style={{ width: "7.5vmax", height: "8vmax", marginTop: "8vmax", }} src={GR} />
                    <img style={{ marginTop: "0vmax", width: "27vmax", }} src={ele2} />
                </div>
                <div style={{ display: "flex", gap: "2vmax", marginTop: "-28vmax", marginLeft: "17vmax" }}>
                    <Card sx={{ width: "21vmax", height: "31vmax", backgroundColor: "white", borderRadius: "1.3vmax", }}>
                        <img style={{ width: "21vmax" }} src={mg1} />
                        <div style={{ paddingLeft: "2.7vmax", display: "flex", flexDirection: "column" }}>
                            <h4 style={{ fontSize: "1.27vmax", fontWeight: 800 }} >Disease detection, check <br />
                                up in the laboratory</h4>
                            <p style={{ fontSize: "1.2vmax", fontWeight: 0, color: "#7D7987", marginTop: "-0vmax" }}> In this case, the role of the health <br /> laboratory is very important to do <br />
                                a disease detection...</p>
                            <button style={{fontSize:"1vmax", backgroundColor: "white", border: "0vmax", color: "#458FF6", height: "2.5vmax", width: "9.5vmax" }}>Read more
                                <img style={{ width: "1.4vmax", marginBottom: "-0.15vmax", marginLeft: "0.5vmax" }} src={LA} />
                            </button>
                        </div>
                    </Card>
                    <Card sx={{ width: "21vmax", height: "31vmax", backgroundColor: "white", borderRadius: "1.3vmax" }}>
                        <img style={{ width: "21vmax" }} src={mg2} />
                        <div style={{ paddingLeft: "2.7vmax", display: "flex", flexDirection: "column" }}>
                            <h4 style={{ fontSize: "1.27vmax", fontWeight: 800 }}  >Herbal medicines that are <br />
                                safe for consumption</h4>
                            <p style={{ fontSize: "1.2vmax", fontWeight: 0, color: "#7D7987", marginTop: "-0vmax" }}>Herbal medicine is very widely used <br /> at this time because of its very good <br />for your health...</p>
                            <button style={{fontSize:"1vmax", backgroundColor: "white", border: "0vmax", color: "#458FF6", height: "2.5vmax", width: "9.5vmax" }}>Read more
                                <img style={{ width: "1.4vmax", marginBottom: "-0.15vmax", marginLeft: "0.5vmax" }} src={LA} />
                            </button>
                        </div>
                    </Card>
                    <Card sx={{ width: "21vmax", height: "31vmax", backgroundColor: "white", borderRadius: "1.3vmax" }}>
                        <img style={{ width: "21vmax" }} src={mg3} />
                        <div style={{ paddingLeft: "2.7vmax", display: "flex", flexDirection: "column" }}>
                            <h4 style={{ fontSize: "1.27vmax", fontWeight: 800 }} >Natural care for healthy <br />
                                facial skin</h4>
                            <p style={{ fontSize: "1.2vmax", fontWeight: 0, color: "#7D7987", marginTop: "-0vmax" }}>A healthy lifestyle should start from<br /> now and also for your skin health.<br />
                                There are some...</p>
                            <button style={{fontSize:"1vmax", backgroundColor: "white", border: "0vmax", color: "#458FF6", height: "2.5vmax", width: "9.5vmax" }}>Read more
                                <img style={{ width: "1.4vmax", marginBottom: "-0.15vmax", marginLeft: "0.5vmax" }} src={LA} />
                            </button>
                        </div>
                    </Card>
                </div>
            </div>

            <button style={{marginLeft:"45vmax", marginTop: "3vmax", alignContent: "center", fontSize: "1.3vmax", width: "12.3vmax", color: "#458FF6", height: "3.7vmax", backgroundColor: "white", border: "0.19vmax solid #458FF6", borderRadius: "2vmax", paddingBottom: "0.1vmax" }}>
                View all

            </button>
        </>
    )
}

export default Latest;