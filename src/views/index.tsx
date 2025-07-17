import React, { Component } from 'react'
import logoUrl from '@/assets/logo.jpg'
import LifeCycle from './LifeCycle';
import Comment from './Comment';
import ControlInput from './ControlInput';
import NotControlInput from './NotControlInput';

export default class MyApp extends Component {
    UserInfo = {
        name: 'XiaoGao',
        email: 'xiaogao@example.com',
        avatar: logoUrl
    };
  
    render() {
        return (
            <div>
                <h2>组件通信</h2>
                <Comment UserInfo={this.UserInfo} />
                <br />
                <h2>生命周期</h2>
                <LifeCycle />
                <br />
                <h2>受控组件</h2>
                <ControlInput />
                <br />
                <h2>非受控组件</h2>
                <NotControlInput />
            </div>
        );
    }
}

