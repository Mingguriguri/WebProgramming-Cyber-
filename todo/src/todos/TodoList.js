import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

// 할 일 목록을 보여주는 기능
// todos, onDel, onToggle 세 개의 props를 받음
// todos: 할 일 목록을 담은 배열
// onDel: 할 일 삭제 함수
// onToggle: 할 일의 완료 상태를 변경하는 함수
const TodoList = ({todos, onDel, onToggle}) => {
    return (
        <ul className='TodoList'>
            {
                // Todos 배열 순회하면서 TodoItem 컴포넌트 생성
                todos.map(todos =>
                    // 각각의 할 일은 todos 배열의 각 요소로 todos로 전달되며 key 속성으로 todos.id 값을 사용
                    <TodoItem key={todos.id}
                              todos={todos}
                              // onDel과 onToggle 함수도 함께 전달
                              onDel={onDel}
                              onToggle={onToggle}
                    />
                )
            }
        </ul>
    );
};
export default TodoList;