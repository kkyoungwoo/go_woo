import React from "react";
import './portfolio.css'

import Carousel from './Carousel'
import CarouselScroll from './CarouselScroll'

export default function Portfolio(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="portfolio_warp">
                        <div className="carousel">
                            <Carousel />
                        </div>
                        <div className="carousel_title">
                            사용 기능한 기능을 안내합니다.
                        </div>
                        <div className="carousel_scroll">
                            <CarouselScroll />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}