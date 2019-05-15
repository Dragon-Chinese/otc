import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
// import 'antd/dist/antd.css'; 
import './App.scss';
import { ws } from './api' 

//组件
import Lobby from "./components/lobby/Lobby"
import Header from './components/header'
import Pay from './components/payment/pay'
import Gathering from './components/payment/gathering'
import Order from './components/order/Order'
import Publish from './components/publish/publish'
import Home from './components/home/home'

class App extends Component {
  componentDidMount () {
      ws.onopen = function (e) {
          console.log('Connection to server opened');
      }
  }
  render() {
    return (
      <Router>
        <Header></Header>
        <Route exact path='/' component={() => {
                return (<Redirect to='/home' />)
            }}></Route>
        <Route path='/home' component={Home}></Route>
        <div className="App">
            {/* <Header></Header> */}
            
            {/* <Route path='/home' component={Home}></Route> */}
            <Route path='/index' component={Lobby}></Route>
            <Route path='/payment' component={Pay}></Route>
            <Route path='/gathering' component={Gathering}></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/publish' component={Publish}></Route>
        </div>
        {/* <div className='App2'> */}
          {/* <Header></Header> */}
          
        {/* </div> */}
      </Router>
    )
  }
}

export default App;
