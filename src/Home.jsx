import React from "react";
import './Home.css';
import logo from "./Assets/homebg1.jpg";


export const Home = () => {
    return (
        <>
        
            <a href="/login">
                <button className="HomeBtn">
                    <b>Get Started</b>
                </button>
            </a>
            <div className="tittle">
            <h1>URBAN WASTE COLLECTION AID - UWC 2.0</h1>
            </div>
            
            <img className="HomeBg" src={logo} />
        </>
    )
}
export default Home