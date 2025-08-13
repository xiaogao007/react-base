import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { text, completed } = this.props
    return (
      <div>
        <input type="checkbox" defaultChecked={completed} />
        <span>{text}</span>
      </div>
    )
  }
}
