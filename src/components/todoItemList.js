import React, {Component} from 'react';
import TodoItem from './todoItem';

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                color={color}
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