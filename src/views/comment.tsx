import React, { Component } from 'react'
import '@/views/comment.css'

class UserInfo extends Component {
  render() {
    return (
      <div>
        <div className='user-info'>
            <img className='user-avatar' src={this.props.avatar} alt="User Avatar" />
        <span>{this.props.name}</span>
        </div>
        <p>Email: {this.props.email}</p>
      </div>
    )
  }
}
class CommentCont extends Component {
  render() {
    return (
      <div>
        <h3>Comment Content</h3>
        <p>This is a comment content area where users can write their comments.</p>
        <p>发布时间：{new Date().toLocaleString()}</p>
      </div>
    )
  }
}

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div>
            <UserInfo {...this.props.UserInfo} />
            <CommentCont />
        </div>
      </div>
    )
  }
}
