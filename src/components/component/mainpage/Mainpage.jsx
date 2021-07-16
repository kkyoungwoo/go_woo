import React from "react";
import { connect } from 'react-redux'
import './mainpage.css'

import MainBanner from './MainBanner'
import Carousel from '../portfolio/Carousel'
import Prodiction from '../about/Prodiction'
import Github from '../../common/Github'
import FooterBanner from './FooterBanner'

function Mainpage(props){

    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <MainBanner />
                    <Carousel/>
                    <Prodiction />
                    <Github />
                    <FooterBanner />
                    
                    {props.test}
                </div>
            </div>
        </div>
    )
}

function storedata(state){
    return{
      test : state[0].name
    }
}

export default connect(storedata) (Mainpage)