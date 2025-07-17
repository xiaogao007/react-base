import React, { Component } from 'react'

export default class NotControlInput extends Component {
    constructor(props: any) {
        super(props)
        // 初始化状态
        this.state = {
            inputValue: '',
        }
    }
    // 通过ref获取input的值 非受控组件
    handleChange = (e) => {
        let val = this.refs.inputRef as HTMLInputElement;
        this.setState({
            inputValue: val.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref="inputRef" onChange={this.handleChange} />
                <h2>input:{this.state.inputValue}</h2>
            </div>
        )
    }
}
