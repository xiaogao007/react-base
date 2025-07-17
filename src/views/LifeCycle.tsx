import React, { Component } from 'react'

class SubCount extends Component {
  componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log('子组件收到props', nextProps);
  }
  render() {
    return (
      <div>SubCount-{this.props.count}</div>
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
    console.log('1、组件将要挂载');
  }
  componentDidMount(): void {
    console.log('3、组件挂载完成');
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('4、shouldComponentUpdate--性能优化的点');
    // 控制组件是否更新
    // return true; // 组件会更新
    return nextState.count % 2 === 0; // 只有当count为偶数时组件才会更新
  }
  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('5、组件将要更新');
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('6、组件更新完成', prevProps, prevState);
  }
  componentWillUnmount(): void {
    console.log('7、组件将要卸载');
  }
  handleAdd = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    }, () => {
      console.log('状态更新后', this.state.count);
    })
  }
  render() {
    console.log('2、渲染组件');
    return (
      <>
        <div>{this.props.name}</div>
        <div>{this.state.count}</div>
        <SubCount count={this.state.count} />
        <button onClick={this.handleAdd}>递增</button>
      </>

    )
  }
}
