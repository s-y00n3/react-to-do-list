import React, {Component} from 'react';
import TodoItem from './todoItem';

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                >
                </TodoItem>
            )
        );


        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;