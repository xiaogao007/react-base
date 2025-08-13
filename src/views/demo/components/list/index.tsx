import React, { Component } from 'react'
import Item from '../item/index'
export default class List extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        {todos.map(todo=>{
          return <Item key={todo.id} {...todo} />
        })}
      </div>
    )
  }
}
