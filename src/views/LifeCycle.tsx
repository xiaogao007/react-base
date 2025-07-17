import React, { Component } from 'react'

class SubCount extends Component {
  componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log('SubCount componentWillReceiveProps', nextProps);
  }
  render() {
    return (
      <div>SubCount</div>
    )
  }
}

export default class LifeCycle extends Component {
  // 默认属性
  static defaultProps = {
    name: 'xiaogao'
  }
  constructor(props: any) {
    super(props)
    // 初始化状态
    this.state = {
      count: 0
    }
  }
  componentWillMount(): void {
    console.log('1、componentWillMount')
  }
  componentDidMount(): void {
    console.log('3、componentDidMount')
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('4、shouldComponentUpdate--性能优化的点');
    // 控制组件是否更新
    // return true; // 组件会更新
    return nextState.count % 2 === 0; // 只有当count为偶数时组件才会更新
  }
  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('5、componentWillUpdate');
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('6、componentDidUpdate');
  }
  handleAdd=()=>{
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    },()=>{
      console.log('状态更新后', this.state.count);
    })
  }
  render() {
    console.log('2、render');
    return (
      <>
        <div>{this.props.name}</div>
        <div>{this.state.count}</div>
        <SubCount count={this.state.count}/>
        <button onClick={this.handleAdd}>递增</button>
      </>
     
    )
  }
}
