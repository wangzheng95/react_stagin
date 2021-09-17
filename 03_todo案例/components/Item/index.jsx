import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    isMouseIn: false
  }
  moveIn = (e) => {
    this.setState({
      isMouseIn: true
    })
  }
  moveOut = () => {
    this.setState({
      isMouseIn: false
    })
  }
  changeCheck = (id) => {
    const {changeTodo}  =this.props
    return (e) => {
      changeTodo(id,e.target.checked)
    }
  }
  del = (id) => {
    return () => {
      this.props.delTodo(id)
    }
  }
  render() {
    const {todo,id} = this.props
    return (
      <li onMouseEnter={this.moveIn} onMouseLeave={this.moveOut} style={{backgroundColor: this.state.isMouseIn ? '#ccc' : ''}}>
        <label>
          <input type="checkbox" onChange={this.changeCheck(id)} checked={todo.done ? true : false}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" style={{display:this.state.isMouseIn ? 'block' : 'none'}} onClick={this.del(id)}>删除</button>
      </li>
    )
  }
}
