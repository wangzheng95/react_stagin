import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
export default class App extends Component {
  add1 = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res => {
        console.log('111',res.data);
      },
      error => {
        console.log('222',error);
      }
    )
  }
  add2 = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res => {
        console.log('111',res.data);
      },
      error => {
        console.log('222',error);
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.add1}>获取1</button>
        <button onClick={this.add2}>获取2</button>
      </div>
    )
  }
}
