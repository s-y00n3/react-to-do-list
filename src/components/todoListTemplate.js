import React from 'react';
import './todoListTemplate.css';

const TodoListTemplate = ({form, children}) => { // (props) => {} 로 작성 가능, 해당 방식은 비구조화 할당 방식
    return (
        <main className='todo-list-template'>
            <div className='title'>
                To-Do List
            </div>
            <section className='form-wrapper'>
                {form}
            </section>
            <section className='todos-wrapper'>
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;

