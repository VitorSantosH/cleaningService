import React from "react";
import "./Slider1.css";
import Carousel from 'nuka-carousel';

//imgs 
import backgroundImage1 from '../../assets/imgs/hero-bg-6.jpg';
import backgroundImage2 from '../../assets/imgs/slider4.jpg';
import backgroundImage3 from '../../assets/imgs/hero-bg-5.jpg';

const Slider1 = () => {

    return (
        <div className="slider1">
            <div className="containerSlider">
                <Carousel autoplay={true}  autoplayInterval={5000}   >
                    <img src={backgroundImage1} alt="" />
                    <img src={backgroundImage2} alt="" />
                    <img src={backgroundImage3} alt="" />
                </Carousel>
            </div>
        </div>
    )
}


export default Slider1;