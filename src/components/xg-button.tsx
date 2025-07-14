import React, { Component } from 'react'

type XgButtonProps = {
  title: string;
}

export default class XgButton extends Component<XgButtonProps> {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}
