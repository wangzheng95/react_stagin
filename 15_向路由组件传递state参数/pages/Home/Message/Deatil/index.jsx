import React, { Component } from 'react'
// import qs from 'querystring'
export default class Deatail extends Component {
  state = {
    detailData: [
      {id: '001', content: '今天'},
      {id: '002', content: '昨天'},
      {id: '003', content: '明天'},
    ]
  }
  render() {
    // 接收params参数
    // const {id, title} = this.props.match.params

    console.log(this);

    // 接收search参数
    // const search = this.props.location.search
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state参数
    const propstate = this.props.location.state
    const {id,title} = propstate

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
