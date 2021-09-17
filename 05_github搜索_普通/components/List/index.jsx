import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './index.css'
export default class index extends Component {
  // static propTypes = {
  //   state: PropTypes.object.isRequired
  // }
  render() {
    const {items, isFirst, isLoading, err} = this.props
    return (
      <div className="row">
      {
        isFirst ? <h2>输入名字查找用户</h2> : isLoading ? <h2>正在搜索中，请稍后...</h2> : err ? <h2 stylele={{color: 'red'}}>{err}</h2> : items.map(itemObj => {
          return (
            <div className="card" key={itemObj.id}>
              <a href={itemObj.html_url} target="_blank" rel="noreferrer">
                <img alt="头像" src={itemObj.avatar_url} style={{width: '100px'}} />
              </a>
              <p className="card-text">{itemObj.login}</p>
            </div>
            )
          })
        }
      </div>
    )
  }
}
