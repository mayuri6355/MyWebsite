import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Login / Register Page</h1>
            <p className="main-para text-center">join Us Now</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}