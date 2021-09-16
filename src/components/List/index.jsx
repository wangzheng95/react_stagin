import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  
  render() {
    const {todos,changeTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item todo={todo} key={todo.id} id={todo.id} changeTodo={this.changeTodo}/>
          })
        }
      </ul>
    )
  }
}
