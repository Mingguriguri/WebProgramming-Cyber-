import React, { useState } from "react";

function InputSample(){
    // css
    const box = {
        width: '500px',
        padding: '15px',
        margin: '30px',
        border: '1px solid darkgrey'
    };

    // useState(): 값이 변화되는 것을 저장
    const [inputs, setInputs] = useState({
        username:'',
        useremail:''
    });

    // 비구조화 할당을 통해 객체 값 추출
    const {username, useremail} = inputs;

    // 상태값이 변화되는 함수: 타겟대상 2개 처리
    const onDataChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    // 상태값을 초기화시키는 함수
    const onDataReset = () => {
        setInputs({
            username:'',
            useremail:''
        });
    }
    return (
        <div style={box}>
            <input  type="text" 
                    placeholder="이륾 입력"
                    name="username" 
                    value={username}
                    onChange={onDataChange}/>
            <input  type="text"
                    placeholder="이메일 입력"
                    name="useremail" 
                    value={useremail}
                    onChange={onDataChange}/>
            <button onClick={onDataReset}>초기화</button>
            <h3>값: {username}({useremail})</h3>
        </div>
    );
}

export default InputSample;