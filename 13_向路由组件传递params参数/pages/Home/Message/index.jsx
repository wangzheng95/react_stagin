import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Deatil'
export default class Message extends Component {
  state = {
    msgData: [
      {id:'001',title:'消息1'},
      {id:'002',title:'消息2'},
      {id:'003',title:'消息3'}
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.msgData.map(msgObj => {
              return (
                <li key={msgObj.id}>
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
      </div>
    )
  }
}
