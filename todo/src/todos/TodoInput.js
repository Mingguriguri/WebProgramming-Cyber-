import React, { useRef, useState } from 'react';
import './TodoInput.css';
import {MdAddCircle} from "react-icons/md";

// 할 일을 입력하는 기능
// onAdd라는 props를 받아옴 (props는 TodoInput 컴포넌트가 입력된 텍스트를 추가할 때 호출할 함수
const TodoInput = ({onAdd}) => {

    // useRef 훅을 사용해 textRef 변수 생성
    const textRef = useRef()
    // useState('')를 사용해 text 상태 변수와 상태 변경함수 생성
    const [text, setText] = useState('') // text 변수는 현재 입력된 텍스트

    // <input> 태그의 값이 변경될 때 호출
    const changeInput = (evt) => {
        // evt.target.value를 사용해 입력된 텍스트 값을 가져와서 setText 함수를 사용해 text 변수 값 변경
        const { value } = evt.target; // evt.target() -> evt.targe
        setText(value)
    }

    // <form> 태그가 제출될 때 호출
    const onSubmit = (evt) => {
        evt.preventDefault() // 새로고침 방지

        // text 변수가 공백이면 함수 종료.
        if(!text) return // text 아무것도 없을 때- 공백 입력 방지

        onAdd(text) // text 변수가 공백이 아니면 onAdd 함수 호출하여 입력된 텍스트 전달
        setText('') // setText 함수를 사용해 text 변수 초기화
        textRef.current.focus(); // 다시 입력할 수 있도록 <input> 태그에 포커스 설정
    }

    return (
        <form className='TodoInput' onSubmit={onSubmit}>
            <input type='text'
                   value={text}
                   onChange={changeInput}
                   ref={textRef}/>
            <button>
                <MdAddCircle className='icon' size='50'>
                </MdAddCircle>
            </button>
        </form>
    );
};
export default TodoInput;