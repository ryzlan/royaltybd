import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetch_home_Data} from './redux/actions/HomeActions'


import Navbars from './component/Navigation/Navbars'
import Home from './component/HomePage/Home'
import PageNotFound from './component/ErrorPages/PageNotFound'


class App extends Component {

  componentWillMount(){
    //call an authentication action or some initial actions 
    this.props.fetch_home_Data();

  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}




export default connect(null , {fetch_home_Data})(App);
