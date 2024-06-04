import React, { useRef, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.css';

// 할 일 목록을 관리하고 표시하는 함수 기능
const Todos = () => {

    const no = useRef(1) // useRef를 이용해 초기값을 1로 설정하고 id 값을 할당
    const [todos, setTodos] = useState([]) // todos 상태변수와 setTodos 상태함수 정의, useState 훅을 사용해 초기값인 빈 배열 설정

    // text 매개변수를 받아와서 이전의 todos 배열과 새로운 할 일 객체를 병합하여 업데이트
    const onAdd = (text) => {
        // 새로운 할 일 객체는 id, text, done 속성을 가짐
        setTodos([
            ...todos,
            {
                id:no.current++,
                text:text,
                done:false
            }
        ])
    }

    // 특정 id에 해당하는 할 일을 삭제
    const onDel = (id) => {
        // filter 메서드 사용 -> todos 배열에서 해당 id와 일치하지 않는 할 일만 필터링하여 새로운 배열 생성
        // & 그 배열을 setTodos를 통해 업데이트
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    // 특정 id에 해당하는 할 일의 done 속성을 토글(완료 상태 토글)
    const onToggle = (id) => {
        // setTodos: useState 훅을 사용해 todos 상태 업데이트
        setTodos(todos.map(todo=>todo.id===id ? {
            // Todos.map을 사용해 todos 배열을 순회하며
            // id와 일치하는 todo 아이템을 찾아서 일치하면 아이템을 복사한 후, done 속성으로 토글
            // 일치하지 않다면, 아이템을 그대로 반환
            ...todo,
            done:!todo.done
        }
        :todo
        ))
    }

    return (
        <div className='Todos'>
            <h1> Todo List </h1>
            <TodoInput onAdd={onAdd}/>
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};
export default Todos;