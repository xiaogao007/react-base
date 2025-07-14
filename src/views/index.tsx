import React, { Component } from 'react'
import Comment from "./comment";
import logoUrl from '@/assets/logo.jpg'

interface UserInfo {
    name: string;
    email: string;
    avatar: string;
}
export default class MyApp extends Component {
    UserInfo = {
        name: 'XiaoGao',
        email: 'xiaogao@example.com',
        avatar: logoUrl
    };
    render() {
        return (
            <div>
                <Comment UserInfo={this.UserInfo} />
            </div>
        );
    }
}

