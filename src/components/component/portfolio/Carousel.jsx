import React from "react";
import { useState,useCallback } from "react";
import './carousel.css'

const vestCarousel = [
    {
        text:"first",
        img:"imgData",
        skills:"사용기술 안내",
        skills:"사용기술 안내1",
        skillimg:"skill img",
    },
    {
        text:"secound",
        img:"imgData",
        skills:"사용기술 안내2",
        skillimg:"skill img",
    },
    {
        text:"thred",
        img:"imgData",
        skills:"사용기술 안내3",
        skillimg:"skill img",
    },
    {
        text:"fourth",
        img:"imgData",
        skills:"사용기술 안내4",
        skillimg:"skill img",
    },
    {
        text:"five",
        img:"imgData",
        skills:"사용기술 안내5",
        skillimg:"skill img",
    },
    {
        text:"six",
        img:"imgData imgData imgData",
        skills:"사용기술 안내6",
        skillimg:"skill img",
    },
    {
        text:"sever",
        img:"imgData",
        skills:"사용기술 안내7",
        skillimg:"skill img",
    },
    {
        text:"eight",
        img:"imgData",
        skills:"사용기술 안내8",
        skillimg:"skill img",
    },
    {
        text:"nine",
        img:"imgData",
        skills:"사용기술 안내9",
        skillimg:"skill img",
    },
    {
        text:"ten",
        img:"imgData",
        skills:"사용기술 안내10",
        skillimg:"skill img",
    },
]

export default function Carousel(){

    const [displayControl,setDisplayControl] = useState("displaynone")

    const potfoiloData = useCallback((e)=>{
        if(displayControl === "displaynone"){
            setDisplayControl("block")
        }else if(displayControl === "block"){
            setDisplayControl("displaynone")
        }
    },[displayControl])

    return(
        <div>
            <div className="Carousel_wrap">
                {vestCarousel.map((item,idx)=>{
                    return(
                        <div className="Carousel_box" key={idx} onClick={(e)=>potfoiloData(e)}>
                            <div>{item.img}</div>
                        </div>
                    )
                })}
            </div>
            <div className="carousel_title">
                사용한 기능을 안내합니다.
            </div>
            <div className="Carousel_inpo">
                {vestCarousel.map((item,idx)=>{
                    return(
                        <div className={"Carousel_box " + displayControl} key={idx} >
                            <div>{item.skills}</div>
                            <div>{item.skillimg}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}