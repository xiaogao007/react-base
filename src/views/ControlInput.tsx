import React, { Component } from 'react'

export default class ControlInput extends Component {
    // 默认属性
    constructor(props: any) {
        super(props)
        // 初始化状态
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleAdd = () => {
        console.log('添加的内容:', this.state.inputValue);
        let arr = [...this.state.list];
        arr.push(this.state.inputValue);
        this.setState(
            () => {
                return {
                    list: arr,
                    inputValue: '' // 清空输入框
                }
            }, () => {
                console.log('更新后的列表:', this.state.list);
            }
        )
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleAdd}>添加</button>
                <ul>
                    {this.state.list && this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
