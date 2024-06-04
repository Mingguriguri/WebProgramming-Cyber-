import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

// 할 일 목록의 각 항목을 표시하고, 체크 상태를 토글하고 항목을 삭제하는 기능
// todos, onDel, onToggle 세 개의 props를 받음: 부모 컴포넌트에서 전달되는 값
const TodoItem = ({todos, onDel, onToggle}) => {

    // todos 객체에서 id, text, done 값을 추출받음
    const {id, text, done} = todos

    return (
        <div>
            {/* done 값에 따라 클래스 이름을 동적으로 설정. done이 true-> on 클래스 / 아니면 빈 문자열*/}
            <li className={done ? 'on' : ''}>
                <span  onClick={()=>onToggle(id)}>
                    {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                </span>
                <em onClick={()=>onToggle(id)}>{text}</em>
                <button onClick={()=>onDel(id)}>
                    <FaRegTrashAlt color='rgb(175, 169, 169)' size='20'/>
                </button>
            </li>
        </div>
    );
};
export default TodoItem;