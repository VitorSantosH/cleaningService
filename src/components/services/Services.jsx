import React from "react";
import './Services.css';

import img3 from '../../assets/imgs/about-img.png';

const Services = () => {

    return (
        <>
            <div className="services">

                <div className="parte1">
                    <h2>
                        Domestic Cleaning Service in Rhode Island
                    </h2>
                    <h3>

                        Whenever you need residential cleaning, our professional Rhode Island cleaners can offer a helping hand. We know people are often busy with work and children to look after, so why not take a break and leave the mundane chores to us? Be it mopping, dusting, scrubbing or vacuuming, our professional cleaners are the right people for every housekeeping task. Whether you need a one-off spring clean or a regular service, our specialists are happy to help.
                    </h3>
                    <h2>
                        About Our Cleaners
                    </h2>
                    <h3>

                        Usually we assign a team of at least two cleaners to each job. We try to allocate the same crew to a regular booking in order to ensure a consistent service. Our expert cleaners are carefully selected and screened and then fully trained to give them a deep understanding of products and procedures and help them provide top-quality services at all times. They are adept in cleaning various surfaces and all textiles, including even the most delicate fabrics. Our professionals will clean thoroughly and get rid of any dirt, dust, grime and stains. Our teams are equipped with high-end professional equipment provided by the leading manufacturers in the industry

                    </h3>
                </div>
                <div className="parte2">
                    <img src={img3} alt="" />
                </div>
            </div>


        </>
    )
}


export default Services;