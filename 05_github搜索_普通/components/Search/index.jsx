import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class index extends Component {
  search = () => {
    this.props.updateItems({isFirst: false, isLoading: true})
    axios.get(`api1/search/users?q=${this.searchVal.value}`).then(
      res => {
        console.log('成功了',res.data);
        this.props.updateItems({isLoading: false,items:res.data.items})
      },
      error => {
        console.log('失败了',error);
        this.props.updateItems({isLoading: false,err:error.message})
      }
    )
  }
  static propTypes = {
    updateItems: PropTypes.func.isRequired
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={c => this.searchVal = c} placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
