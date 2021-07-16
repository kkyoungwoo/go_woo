import React from "react";
import './gallery.css'

export default function Gallery(){
    return(
        <div className="warpper">
            <div className="page_defualt gallery">
                <div className="warp_defualt">Gallery</div>
                <div>
                    <img src="../assets/gallery/adak.jpg" alt="adak" />
                    <img src="../assets/gallery/army.jpg" alt="army" />
                    <img src="../assets/gallery/bike.jpg" alt="bike" />
                    <img src="../assets/gallery/design.jpg" alt="design" />
                    <img src="../assets/gallery/enjoy.jpg" alt="enjoy" />
                    <img src="../assets/gallery/game.jpg" alt="game" />
                    <img src="../assets/gallery/insur.jpg" alt="insur" />
                    <img src="../assets/gallery/seoul.jpg" alt="seoul" />
                    <img src="../assets/gallery/teach.jpg" alt="teach" />
                    <img src="../assets/gallery/tv.jpg" alt="tv" />
                </div>
            </div>
        </div>
    )
}