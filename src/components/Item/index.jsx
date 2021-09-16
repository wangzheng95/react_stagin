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
  changeCheck = (e) => {
    const {changeTodo}  =this.props
    return (id) => {
      changeTodo(id,e.target.checked)
    }
  }
  render() {
    const {todo,id} = this.props
    return (
      <li onMouseEnter={this.moveIn} onMouseLeave={this.moveOut} style={{backgroundColor: this.state.isMouseIn ? '#ccc' : ''}}>
        <label>
          <input type="checkbox" onChange={this.changeCheck(id)} defaultChecked={todo.done?true:false}/>
          <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" style={{display:this.state.isMouseIn ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
