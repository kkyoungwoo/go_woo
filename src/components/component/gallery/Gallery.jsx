import React from "react";
import './gallery.css'

const cards = [
    '../assets/gallery/insur.jpg',
    '../assets/gallery/teach.jpg',
    '../assets/gallery/seoul.jpg',
    '../assets/gallery/enjoy.jpg',
    '../assets/gallery/game.jpg',
    '../assets/gallery/tv.jpg',
    '../assets/gallery/adak.jpg',
    '../assets/gallery/army.jpg',
    '../assets/gallery/design.jpg',
    '../assets/gallery/bike.jpg',
]

export default function Gallery(){



    return(
        <div className="warpper">
            <div className="page_defualt gallery">
                <div className="warp_defualt">
                    <div className="cards">
                        {cards.map((item,idx)=>{
                            return(
                                <div key={idx} className="card">
                                    <img src={item} alt={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}