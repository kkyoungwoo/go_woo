import React from "react";
import { connect } from 'react-redux'

function Mainpage(props){

    return(
        <div>
            hellow Mainpage
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