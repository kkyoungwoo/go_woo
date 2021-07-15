import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './header.css'

export default function Header(){

    const [ menuBtn,setMenuBtn ] = useState(true)
    const [displayNone,setDisplayNone] = useState(" menu_btn")

    const menuHandling = useCallback(() => {
        setMenuBtn(!menuBtn)
        menuBtn ? setDisplayNone(" active") : setDisplayNone("")
    })

    return(
        <div className={"navigation" + displayNone}>
            <input type="checkbox" id="gnbcheck" name="gnbcheck" />
            <label for="gnbcheck" id="gnbbtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <header id="header">
                <h1 id="top_logo">
                    <Link to='/' className="default-link" >
                        <img src="../assets/common/logo/logo_white.png"  style={{ width: "80px"}}alt="Logo" />
                    </Link>
                </h1>
                <nav id="gnb">
                <label for="gnbcheck" id="mobile_close_btn"></label>
                <ul>
                    <li>
                    <Link to='/about' className="default-link" >About</Link>
                    </li>
                    <li>
                    <Link to='/portfolio' className="default-link" >Portfolio</Link>
                    </li>
                    <li>
                    <Link to='/contact' className="default-link" >Contact</Link>
                    </li>
                    <li>
                    <Link to='/gallery' className="default-link" >Gallery</Link>
                    </li>
                    <li>
                    <Link to='/login' className="default-link loginbtn" >Login</Link>
                    </li>
                </ul>
                </nav>
            </header>
        </div>
    )
}