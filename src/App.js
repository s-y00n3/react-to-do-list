import React, { Component } from 'react';
import TodoListTemplate from './components/todoListTemplate';
import Form from './components/form';
import TodoItemList from './components/todoItemList';

class App extends Component {
  id = 3

  state = {
    input : '',
    todos : [
      {id: 0, text: 'react practice', checked : false},
      {id: 1, text: 'react study', checked : true},
      {id: 2, text: 'react study', checked : false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input :'',
      todos : todos.concat({ // 리액트는 배열에 추가할때 concat 사용 (push 사용 시 최적화 불가)
        id: this.id++,
        text : input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos]; // 배열 복사

    // 기존 배열 복사, checked 값 복사
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    }

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;

    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoItemList>
      </TodoListTemplate>
    );
  }
}

export default App;