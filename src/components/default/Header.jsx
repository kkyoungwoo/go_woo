import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './header.css'

export default function Header(){

    const [ menuBtn,setMenuBtn ] = useState(true)
    const [displayNone,setDisplayNone] = useState(" menu_btn")
    const [ menuPosition,setMenuPosition ] = useState("relative")

    const menuHandling = useCallback(() => {
        setMenuBtn(!menuBtn)
        menuBtn ? setDisplayNone(" menu_btn") : setDisplayNone("")
        menuBtn ? setMenuPosition("heights") : setMenuPosition("")
    })

    return(
        <header className="warpper">
            <nav className={menuPosition}>
                <img src="/assets/header/menu.png" className={"menu_btn"}/>
                <div className={"menu_warp" + displayNone}>
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
                    </ul>
                    <ul className="login_warp">
                        <li className="login">
                            <Link to='/login' className="default-link loginbtn" >Login</Link>
                        </li>
                        <div className="closebtn">
                            close
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
}