import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink title='about' to='/about'>About</MyNavLink>
              <MyNavLink title='home' to='/home/a/b'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/home" component={Home}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
