import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <Link className="list-group-item" to='/home'>Home</Link>
              <Link className="list-group-item" to='/about'>About</Link>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
