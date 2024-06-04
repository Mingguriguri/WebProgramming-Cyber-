import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
// 할 일 목록을 보여주는 기능
const TodoList = ({todos, onDel, onToggle}) => {
    return (
        <ul className='TodoList'>
            {
                todos.map(todos =>
                    <TodoItem key={todos.id}
                              todos={todos}
                              onDel={onDel}
                              onToggle={onToggle}
                    />
                )
            }
        </ul>
    );
};
export default TodoList;