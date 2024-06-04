import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

// 할 일 목록의 각 항목을 표시하고, 체크 상태를 토글하고 항목을 삭제하는 기능
const TodoItem = ({todos, onDel, onToggle}) => {

    const {id, text, done} = todos

    return (
        <div>
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