import React from "react";
import { connect } from 'react-redux'
import './mainpage.css'
import Mainbanner from './Mainbanner'

function Mainpage(props){

    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <Mainbanner />
                    1. 베너
                    <br/>
                    2. 포트폴리오 캐러셀
                    <br/>
                    3. production (I made this brand's website at the company.)
                    <br/>
                    4.contect me
                    <br/>
                    5.github 안내
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