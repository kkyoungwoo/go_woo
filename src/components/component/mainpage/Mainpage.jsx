import React from "react";
import { connect } from 'react-redux'
import './mainpage.css'

function Mainpage(props){

    return(
        <div className="warpper mainpage">
            <div>hellow Mainpage안녕</div>
            <div>hellow Mainpage안녕</div>
            <div>hellow Mainpage안녕</div>
            <div>hellow Mainpage안녕</div>
            <div>hellow Mainpage안녕</div>
            {props.test}
        </div>
    )
}

function storedata(state){
    return{
      test : state[0].name
    }
}

export default connect(storedata) (Mainpage)