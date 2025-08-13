import React, { Component } from 'react'
import logoUrl from '@/assets/logo.jpg'
import LifeCycle from './componetns/LifeCycle.tsx';
import Comment from './componetns/Comment.tsx';
import ControlInput from './componetns/ControlInput.tsx';
import NotControlInput from './componetns/NotControlInput.tsx';
import FormSimple from './componetns/FormSimple.tsx';
import FunctionComponentProps from './componetns/FunctionComponentProps.tsx';
import Components from './componetns/Components.tsx';
import ComponentRefs from './componetns/ComponentRefs.tsx';
import HigherOrderFunction from './componetns/HigherOrderFunction.tsx';
import Todo from './demo/index.tsx';
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
                <h2>待办事项</h2>
                <Todo />
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
                <br />
                <h2>高阶函数和函数柯里化</h2>
                <HigherOrderFunction />
            </div>
        );
    }
}

