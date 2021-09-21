import React, { Component } from 'react'

export default class Deatail extends Component {
  state = {
    detailData: [
      {id: '001', content: '今天'},
      {id: '002', content: '昨天'},
      {id: '003', content: '明天'},
    ]
  }
  render() {
    const {id, title} = this.props.match.params
    const findres = this.state.detailData.find(item => {
      return item.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findres.content}</li>
        </ul>
      </div>
    )
  }
}
