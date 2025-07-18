import React, { Component } from 'react'

export default class ComponentRefs extends Component {
    state = {
        isHot: true // 用于演示条件渲染
    };
    onIptClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const {input1} = this.refs;
        alert(input1.value);
    }
    onIptBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const {input2} = this.refs;
        alert(input2.value);
    }
     onIptClickF = (e: React.MouseEvent<HTMLInputElement>) => {
        alert(this.input3.value);
    }
    onIptBlurF = (e: React.FocusEvent<HTMLInputElement>) => {
        alert(this.input4.value);
    }
    getInput = (input: HTMLInputElement) => {
       this.input3 = input;
       console.log('#', this.input3)
    }
    render() {
        return (
            <div>
                <h5>Refs—字符串</h5>
                <p>Refs 是 React 提供的一种方式，可以直接访问 DOM 元素或组件实例。</p>
                <p>在这个例子中，我们使用字符串 refs 来获取 input 元素的值。</p>
                <p>注意：字符串 refs 已经被弃用，推荐使用回调 refs 或 React.createRef()。</p>
                <input ref="input1" type="text" />
                <button onClick={this.onIptClick} >获取值</button>
                <input ref="input2" type="text" onBlur={this.onIptBlur} />
                <br />
                <br />
                <h5>Refs-回调函数</h5>
                <p>回调函数 refs 是 React 推荐的方式，可以在组件中直接访问 DOM 元素或组件实例。</p>
                {/* <input ref={currentNode => {this.input3 = currentNode;console.log('#', currentNode)}} type="text" /> */}
                <p>*** 使用回调函数将进行代码写在模板中时，页面更新时会被执行两次</p>

                <input ref={this.getInput} type="text" />
                
                <p onClick={() => this.setState({ isHot: !this.state.isHot })}>今天天气很{this.state.isHot? '热' : '冷'}</p>
                <button onClick={this.onIptClickF} >获取值</button>
                <input ref={(input) => this.input4 = input} type="text" onBlur={this.onIptBlurF} />
            </div>
        )
    }
}
