
import React from 'react';
// 组件的两种创建方式
// 类组件
type ClassComponentProps = {
    title: string;
};

class ClassComponent extends React.Component<ClassComponentProps> {
    constructor(props: ClassComponentProps) {
        super(props);
    }
    render() {
        return <div>{this.props.title}</div>;
    }
}

// 函数组件
const FunctionalComponent = (props) => {
    return <div>{props.title}</div>;
};
ReactDOM.render(
    <div>
        <ClassComponent title="Hello from Class Component!" />
        <FunctionalComponent title="Hello from Functional Component!" />
    </div>,
    document.getElementById('root')
);