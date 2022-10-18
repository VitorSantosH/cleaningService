import React from "react";
import { useState } from "react";
import './MenuMobile.css';


const MenuMobile = (props) => {

    const [state, setState] = useState({
        display: false
    })

    if (props.display != state.display) {
        setState({
            ...state,
            display: props.display
        })
    }

    return (

        <div className={state.display? 'menuMobile' : 'menuMobile show'} >
            Menu
        </div>
    )
}

export default MenuMobile;