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
  constructor(props: any) {
    super(props)
    this.state = {
      publishTime: '2025/07/15 21:30:00'
    }
  }
  handleUpdateDate = () => {
    this.props.updateDate(new Date().toLocaleString())
  }
  render() {
    return (
      <div>
        <h3>Comment Content</h3>
        <p>This is a comment content area where users can write their comments.</p>
        <p>发布时间：{this.state.publishTime}</p>
        <button onClick={this.handleUpdateDate}>更新</button>
      </div>
    )
  }
}

export default class Comment extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      updateTime: '2025/07/15 21:13:00'
    }
  }
  updeTime = new Date().toLocaleString()
  // 第一种
  // updateDate = (val: any) => {
  //   this.setState({
  //     updateTime: val
  //   })
  // }
 
  // 第二种
  // updateDate(e){
  // console.log(e);
  //   this.setState({
  //     updateTime: new Date().toLocaleString()
  //   })
  // }

  // 第三种
  updateDate(){
    this.setState({
      updateTime: new Date().toLocaleString()
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        <div>
          <UserInfo {...this.props.UserInfo} />
          <p>更新时间：{this.state.updateTime}</p>
          {/* 第一种 */}
          {/* <CommentCont updateDate={this.updateDate} /> */}
          {/* 第二种：可传递参数 */}
          {/* <CommentCont updateDate={(e)=>{this.updateDate(e)}} /> */}
          <CommentCont updateDate={this.updateDate.bind(this)} />
        </div>
      </div>
    )
  }
}
