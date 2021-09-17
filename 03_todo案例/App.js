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
  
  delTodo = (id) => {
    if(window.confirm){
      let newTodos = this.state.todos.filter(todo => todo.id !== id)
      this.setState({
        todos: newTodos
      })
    }
  }
  checkAll = (done) => {
    let newTodos = this.state.todos.map(todo => {
     return {...todo,done}
    })
    this.setState({
      todos: newTodos
    })
  }
  clearDone = () => {
    let newTodos = this.state.todos.filter(todo => todo.done === false)
      this.setState({
        todos: newTodos
      })
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} changeTodo={this.changeTodo} delTodo={this.delTodo}/>
          <Footer todos={this.state.todos} checkAll={this.checkAll} clearDone={this.clearDone}/>
        </div>
      </div>
    )
  }
}
