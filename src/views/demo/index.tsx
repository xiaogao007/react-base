import React, { Component } from 'react'
import Header from './components/header/index'
import List from './components/list'
type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: TodoItem[];
};

export default class Todo extends Component<{}, TodoState> {
  state: TodoState = {
    todos: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a Todo App', completed: false }
    ]
  };

  addTodo = (obj: TodoItem) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, obj]
    }));
  };

  render() {
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}
