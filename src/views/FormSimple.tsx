import React, { Component } from 'react'

export default class FormSimple extends Component {
    constructor(props: any) {
        super(props);
        // 初始化状态
        this.state = {
            formData: {
                name: '',
                password: ''
            }
        };
    }
    handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
            formData: {
                name:e.target.value,
                password: prevState.formData.password // 保持密码不变
            }
        }));
    }
     handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => ({
            formData: {
                name: prevState.formData.name, // 保持用户名不变
                password:e.target.value
            }
        }));
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('提交的表单数据:', this.state.formData);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <p>
                <label htmlFor="name">Name：</label>
                <input type="text" id='name' value={this.state.formData.name} onChange={this.handleNameChange} />
            </p>
            <p>
                <label htmlFor="password">Password：</label>
                <input type="password" id='password' value={this.state.formData.password} onChange={this.handlePasswordChange} />
            </p>
            <button type='submit' onClick={this.handleSubmit}>登录</button>
        </form>
      </div>
    )
  }
}
