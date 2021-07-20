import React from "react";
import './portfolio.css'

import Carousel from './Carousel'

export default function Portfolio(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="portfolio_warp">
                        <div className="carousel">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}