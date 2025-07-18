import React, { Component } from 'react'
import XgButton from "@/components/xg-button.tsx";
import XgDialog from "@/components/xg-dialog.tsx";
export default class Components extends Component {
  render() {
    return (
      <div>
        <h2>组件库</h2>
        <XgButton />
        <XgDialog />
      </div>
    )
  }
}
