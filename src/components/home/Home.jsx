import React from "react";
import './Home.css';

import Header from "../header/Header";
import Slider1 from "../slider1/Silder1";
import Slider2 from "../slider2/Slider2";
import Services from "../services/Services";
import Services2 from "../services2/Services2";

//imgs 
//<i class="fa fa-commenting-o" aria-hidden="true"></i>

const Home = () => {

    return (
        <div
            className="Home"
       
        >
            <Header />
            <div className="textContainer">
                <div className="textPrincipal">

                    <h2>Best Clean Service</h2>
                 
                    <h1>Home Clean &amp; Professional Services</h1>
                    <div className="buttonContact">
                        <a 
                            href="sms:+7819909812"
                            style={{'textDecoration': 'none', 'color': 'white'}}
                        > Contact Us</a>
                        

                    </div>


                </div>
             
            </div>
            <Slider1/>
            <Services2/>
            <Slider2/>
            <Services/>
          
            
        </div>
    )
}



export default Home;


/**
 * 
 */