import React from 'react'
import './prodiction.css'

function prodiction() {

    const productions = [
        {
            name: "exco",
            img: "exco.png",
            link: "https://exco.co.kr/kor/index.html",
        },
        {
            name: "dearcare",
            img:  "dearcare.png",
            link: "https://dear.care/",
        },
        {
            name: "작업예정",
            img:  "mainbanner.jpg",
            link: "",
        },
        {
            name: "작업예정",
            img:  "mainbanner.jpg",
            link: "",
        },
        {
            name: "작업예정",
            img:  "mainbanner.jpg",
            link: "",
        },
        {
            name: "작업예정",
            img:  "mainbanner.jpg",
            link: "",
        },

    ]

    return (
        <div>
            <div className="production_warp">
                <div className="main_text">
                    PRODUCTION components
                </div>
                <div className="sub_text">
                    (I made this brand's website at the company.)
                </div>
            </div>
            <div className="production_list">
                {productions.map((item,idx)=>{
                     return(
                         <div key={idx} className="production_ea">
                            <a href={item.link} target="_blank">
                                <img src={"../assets/production/" + item.img} alt={item.name}/>
                                <div>{item.name}</div>
                            </a>
                         </div>
                     )
                })}
            </div>
        </div>
    )
}

export default prodiction
