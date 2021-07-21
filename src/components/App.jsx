import React, { useEffect } from "react";
import './app.css'
import Header from './default/Header'
import Footer from './default/Footer'
import Mainpage from './component/mainpage/Mainpage'
import About from './component/about/About'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Gallery from './component/gallery/Gallery'
import Login from './component/login/Login'

import NotFound from './common/NotFound'

import { BrowserRouter as Router ,Route ,Switch } from "react-router-dom";
import { connect } from 'react-redux'
function App(props) {

  return (
    <div className="App">
      {/*콘솔오류확인필요*/}
      <Router>
        <Header />
          <Switch>
            <Route path="/" component={Mainpage} exact />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/login" component={Login} />
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