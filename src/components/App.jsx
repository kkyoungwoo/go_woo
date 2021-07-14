import React, { useEffect } from "react";
import './app.css'
import Header from './default/Header'
import Footer from './default/Footer'
import Mainpage from './component/mainpage/Mainpage'
import NotFound from './common/NotFound'

import { BrowserRouter as Router ,Route ,Switch } from "react-router-dom";
import { connect } from 'react-redux'

function App(props) {

  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/" component={Mainpage} exact />
            <Route component={NotFound} />
          </Switch>
          {/*props.test*/}
        <Footer />
      </Router>
    </div>
  );
}

function storedata(state){
  return{
    test : state[0].name
  }
}

export default connect(storedata) (App)