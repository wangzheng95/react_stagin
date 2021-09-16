import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos: [
      {
        id:'001',
        name: '吃饭',
        done: false
      },
      {
        id:'002',
        name: '睡觉',
        done: false
      },
      {
        id:'003',
        name: '打豆豆',
        done: true
      },
    ]
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo,...this.state.todos]
    })
  }
  changeTodo = (id,done) => {
    let newTodos = this.state.todos.map(todo => {
      if(todo.id === id) return {...todo,done}
      return todo
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} changeTodo={this.changeTodo}/>
          <Footer todos={this.state.todos}/>
        </div>
      </div>
    )
  }
}
