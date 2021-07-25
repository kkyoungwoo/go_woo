import React, { useState } from "react";
import './gallery.css'
import { useDrag } from "react-use-gesture"

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

    const [card,setCard] = useState({x:0,y:0})
    const initialPosition = useDrag((params) =>{
        setCard({
            x: params.offset[0],
            y: params.offset[1],
        });
    })

    return(
        <div className="warpper">
            <div className="page_defualt gallery">
                <div className="warp_defualt">
                    <div {...initialPosition()}
                    style={{
                        position:"relative",
                        top:card.x,
                        left:card.y
                    }}>
                        드래그테스트
                    </div>
                    <div className="cards" >
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