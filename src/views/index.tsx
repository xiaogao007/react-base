import React, { Component } from 'react'
import logoUrl from '@/assets/logo.jpg'
import LifeCycle from './LifeCycle';
import Comment from './Comment';
import ControlInput from './ControlInput';
import NotControlInput from './NotControlInput';
import FormSimple from './FormSimple';
import FunctionComponentProps from './FunctionComponentProps';
import Components from './components.tsx';
import ComponentRefs from './ComponentRefs.tsx';
interface UserInfoType {
    name: string;
    email: string;
    avatar: string;
}

export default class MyApp extends Component {
    UserInfo: UserInfoType = {
        name: 'XiaoGao',
        email: 'xiaogao@example.com',
        avatar: logoUrl
    };

    render() {
        return (
            <div>
                <h2>组件</h2>
                <Components />
                <h2>函数组件</h2>
                <FunctionComponentProps name="XiaoGao" age={18} />
                <br />
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
                <br />
                <h2>form</h2>
                <FormSimple />
                 <br />
                <h2>Refs</h2>
                <ComponentRefs />
            </div>
        );
    }
}

