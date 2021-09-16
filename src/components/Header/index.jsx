import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  add = (e) => {
    const {addTodo} = this.props
    if(e.keyCode === 13){
      const todo = {
        id: nanoid(),
        name: e.target.value,
        done:false
      }
      addTodo(todo)
      e.target.value = ""
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.add} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
