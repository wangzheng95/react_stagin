import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <NavLink className="list-group-item" activeClassName="wangzheng" {...this.props}></NavLink>
    )
  }
}
