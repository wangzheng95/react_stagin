import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  checkAll = (e) => {
    this.props.checkAll(e.target.checked)
  }
  clearDone = () => {
    this.props.clearDone()
  }
  render() {
    const {todos}  =this.props
    const doneCount = todos.reduce((pre,now) => pre + (now.done ? 1 : 0),0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.checkAll} checked={doneCount === todos.length && todos.length !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
      </div>
    )
  }
}
