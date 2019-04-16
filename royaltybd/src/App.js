import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import {connect} from 'react-redux'

import Navbar from './component/Navigation/Navbar'
import Home from './component/HomePage/Home'



class App extends Component {

  componentWillMount(){
    //call an authentication action
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
