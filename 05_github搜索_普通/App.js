import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    items: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  updateItems = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div className="container">
        <Search updateItems={this.updateItems} {...this.state} />
        <List {...this.state}/>
      </div>
    )
  }
}
