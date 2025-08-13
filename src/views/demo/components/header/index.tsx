import React, { Component } from 'react'
import { nanoid } from 'nanoid';
export default class Header extends Component {
  handleKeyUp=(e)=>{
    const {keyCode, target} = e
    if (keyCode === 13) {
      console.log(target.value);
      const todoObj={
        id:nanoid(),
        text:target.value,
        done:false
      }
      this.props.addTodo(todoObj)
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='请输入代办，回车添加' onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
