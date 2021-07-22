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
        size:"80",
    },
    {
        text:"secound",
        img:"imgData",
        skills:"사용기술 안내2",
        skillimg:"skill img",
        size:"60",
    },
    {
        text:"thred",
        img:"imgData",
        skills:"사용기술 안내3",
        skillimg:"skill img",
        size:"40",
    },
    {
        text:"fourth",
        img:"imgData",
        skills:"사용기술 안내4",
        skillimg:"skill img",
        size:"20",
    },
    {
        text:"five",
        img:"imgData",
        skills:"사용기술 안내5",
        skillimg:"skill img",
        size:"0",
    },
    {
        text:"six",
        img:"imgData imgData imgData",
        skills:"사용기술 안내6",
        skillimg:"skill img",
        size:"-20",
    },
    {
        text:"sever",
        img:"imgData",
        skills:"사용기술 안내7",
        skillimg:"skill img",
        size:"-40",
    },
    {
        text:"eight",
        img:"imgData",
        skills:"사용기술 안내8",
        skillimg:"skill img",
        size:"-60",
    },
    {
        text:"nine",
        img:"imgData",
        skills:"사용기술 안내9",
        skillimg:"skill img",
        size:"-80",
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


    const [currentIdx, setCurrentIdx] = useState(Math.floor(vestCarousel.length / 2));


    const hendlePrev = () => {
        setCurrentIdx((prev) => (prev + (vestCarousel.length - 1)) % vestCarousel.length)
    }

    const hendleNext = () => {
        setCurrentIdx((next) => (next + (vestCarousel.length + 1)) % vestCarousel.length)
    }

    return(
        <div>
            <div className="Carousel_wrap">
                <div className="prev_btn" onClick={hendlePrev}>◀</div>
                {vestCarousel.map((item,idx)=>{
                    return(
                        <div className="Carousel_box" key={idx} onClick={(e)=>potfoiloData(e)}
                            style={{
                            transform:`translateX(${vestCarousel[currentIdx].size/3}rem)`,
                        }}
                        >
                            <div>{item.img}</div>
                        </div>
                    )
                })}
                <div className="next_btn" onClick={hendleNext}>▶</div>
            </div>
            <div className="carousel_title">
                사용한 기능을 안내합니다.
            </div>
            <div className="Carousel_inpo">
                {vestCarousel.map((item,idx)=>{
                    return(
                        <div className={"Carousel_box " + displayControl} key={idx}>
                            <div>{item.skills}</div>
                            <div>{item.skillimg}</div>
                            {/* filter 함수 더 알아보고 필터링 해보기*/}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}