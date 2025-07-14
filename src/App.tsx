// import XgButton from "./components/xg-button.tsx";
// import XgDialog from "./components/xg-dialog.tsx";
import MyApp from "./views/index.tsx";
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isDialogOpen: false
  }

  handleDialog = () => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen })
  }

  render() {
    return (
      <div>
        {/* <XgButton title="按钮1" />
        <XgButton title="按钮2" />
        <button onClick={this.handleDialog}>弹框</button>
        <XgDialog content="这是一个测试对话框" open={this.state.isDialogOpen} /> */}
        <MyApp />
      </div>
    )
  }
}
