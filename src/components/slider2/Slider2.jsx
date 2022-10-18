import React from "react";
import { useState } from "react";
import "./Slider2.css";
import Carousel from 'nuka-carousel';

//imgs 
import img1 from '../../assets/imgs/índice1.jpg';
import img2 from '../../assets/imgs/índice13.jpg';
//import img3 from '../../assets/imgs/índice12.jpg';
import img3 from '../../assets/imgs/índice3.jpg';
import img4 from '../../assets/imgs/índice4.jpg';
import img5 from '../../assets/imgs/índice5.jpg';
import img6 from '../../assets/imgs/índice6.jpg';
import img7 from '../../assets/imgs/índice7.jpg';
import img8 from '../../assets/imgs/índice8.jpg';
import img13 from '../../assets/imgs/índice13.jpg';

import img15 from '../../assets/imgs/índice15.jpg';
import img16 from '../../assets/imgs/índice16.jpg';
import img17 from '../../assets/imgs/índice17.jpg';
import img18 from '../../assets/imgs/índice18.jpg';


const Slider2 = () => {

    const [state, setState] = useState({
        position: 0
    })



    return (
        <>

            <div className="slider2">
                <div className="titleSlider2">
                    <div className="hrHorizontal">

                    </div>
                    <h1>
                        G&C Cleaning Services
                    </h1>
                    <div className="hrHorizontal">

                    </div>
                </div>
                <div className="parte2">
                    <div className="containerSlider">
                        <Carousel
                        >
                            <img src={img1} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                            <img src={img15} alt="" />
                            <img src={img16} alt="" />
                            <img src={img17} alt="" />
                            <img src={img18} alt="" />
                            <img src={img13} alt="" />

                        </Carousel>

                    </div>
                    <div className="containerTitle3">
                        <h3>
                            The G&C Cleaning Services is a Rhode IslandRhode Island-based company (" ") a wide range of cleaning services for homes and offices throughout all ("  ") boroughs and anywhere within the (" "). Our professional cleaners are happy to take on all sorts of jobs, from  quick spot treatment for your home to a thorough top-to-bottom deep cleaning service for your home, office or commercial property. With our high standards, reasonable prices and special offers you get excellent value for your money.
                            Don’t hesitate to call us today on <a href="tel:+7819909812"> (781) 9909812 </a> .
                        </h3>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Slider2;