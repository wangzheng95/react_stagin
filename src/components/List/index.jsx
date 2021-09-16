import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }  
  render() {
    const {todos,changeTodo,delTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item todo={todo} key={todo.id} id={todo.id} changeTodo={changeTodo} delTodo={delTodo}/>
          })
        }
      </ul>
    )
  }
}
