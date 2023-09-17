import React from 'react'
import element from './assets/element.jpg'
import illustration from './assets/illustration.jpg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


const Landing = () => {
    return (
        <>
            <div style={{ position: "relative" }}>
                <div>
                    <img src={element} style={{ marginTop: "70px", marginLeft: -10, }} alt='image1' />
                    <div style={{ position: "absolute", marginLeft: "210px", marginTop: "-53px", width: "445px", height: "338px" }}>
                        <h1 style={{ fontSize: 45 }}>Virtual healthcare <br /> For you</h1>
                        <h5 style={{
                            marginTop: -12, fontFamily: "Muli",
                            fontWeight: 300,
                            fontSize: "16px",
                            lineHeight: "25px",
                            alignContent: "center",
                            color: "#7D7987"
                        }}>transfugalr provides progressive and affordable<br />healthcare,accessible on mobile and online <br /> for everyone</h5>
                        <Button variant='filled' size='large' sx={{ backgroundColor: "#458FF6", borderRadius: 30, color: "white", fontSize: 12 }}>consult today</Button>
                    </div>
                    <img style={{ position: 'absolute', marginTop: "60px", marginLeft: "619px", width: "480px", }} src={illustration} alt='image2' />
                </div>
            </div>
        </>
    )
}

export default Landing;