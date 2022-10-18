import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuMobile from "./MenuMobile/MenuMobile";

// imgs 
import logo from '../../assets/imgs/logoMelhor.png';



const Header = () => {

    const [state, setState] = useState({
        foco: 'HOME',
        menuPort: true

    })

    useEffect(() => {



    }, [state.foco])

    function setFocus(value) {

        console.log(value.target.attributes.value.value)

        setState({
            ...state,
            foco: value.target.attributes.value.value
        })
        //      <a href="#services"> Services</a>

    }

    function Menus() {


        return (
            <div className="menus">

                <div
                    className={state.foco === 'HOME' ? "buttons focus" : "buttons"}
                    value='HOME'
                    onClick={e => {
                        setFocus(e)
                    }}
                >
                    Home
                </div>


                <a href="#services">
                    <div
                        className={state.foco === 'SERVICES' ? "buttons focus" : "buttons"}
                        value='SERVICES'
                        onClick={e => {
                            setFocus(e)
                        }}
                    >
                        Services
                    </div>
                </a>

                <div
                    className={state.foco === 'ABOUT' ? "buttons focus" : "buttons"}
                    value='ABOUT'
                    onClick={e => {
                        setFocus(e)
                    }}
                >
                    About Us
                </div>

                <div
                    className={state.foco === 'PRICING' ? "buttons focus" : "buttons"}
                    value='PRICING'
                    onClick={e => {
                        setFocus(e)
                    }}
                >
                    Pricing Plans
                </div>

                <div
                    className={state.foco === 'CONTACT' ? "buttons focus" : "buttons"}
                    value='CONTACT'
                    onClick={e => {
                        setFocus(e)
                    }}
                >
                    Contact US
                </div>
            </div>
        )
    }

    function MenuPort() {

        if (state.menuPort) {

            return (

                <div
                    className="menuPort"
                    onClick={e => {
                        setState({
                            ...state,
                            menuPort: !state.menuPort
                        })
                    }}
                >
                    <i className="fa fa-bars"></i>
                </div>


            )

        } else {

            return (
                <div
                    className="menuPort menuAnime"
                    onClick={e => {
                        setState({
                            ...state,
                            menuPort: !state.menuPort
                        })
                    }}
                >
                    <i class="fa fa-times" aria-hidden="true"></i>

                </div>


            )

        }


    }


    return (
        <>
            <div
                className="header"


            >
                <div className="headerBody">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <Menus />
                    <MenuPort />

                </div>

            </div>
            <MenuMobile display={state.menuPort} />
        </>
    )
}



export default Header;