import React, { Component } from 'react'

export default class HigherOrderFunction extends Component {
    state: Readonly<{}> = {
        username: '',
        password: ''
    };
    // handleUsernameBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    //     this.setState({ username: event.target.value });
    // }
    // handlePasswordBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    //     this.setState({ password: event.target.value });
    // }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('提交的用户名:', this.state.username);
        console.log('提交的密码:', this.state.password);
        // 这里可以添加更多处理逻辑，比如发送到服务器等
    }
    saveFormData = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`${field}:`, event.target.value);
        this.setState({
            [field]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" onBlur={this.handleUsernameBlur} placeholder="请输入内容" name='username' />
                    <input type="password" onBlur={this.handlePasswordBlur} placeholder="请输入内容" name='password' /> */}
                    <input type="text" onChange={this.saveFormData('username')} placeholder="请输入内容" name='username' />
                    <input type="password" onChange={this.saveFormData('password')} placeholder="请输入内容" name='password' />
                    <button>提交</button>
                </form>
            </div>
        )
    }
}
