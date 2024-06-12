import React, { useState } from "react";

function InputTest(){
    // css
    const box = {
        width: '500px',
        padding: '15px',
        margin: '30px',
        border: '1px solid darkgrey'
    };

    // useState(): 값이 변화되는 것을 저장
    const [text, setText] = useState('');
    
    // 상태값이 변화되는 함수: input에 입력한 값으로 바뀜
    const onTextChange = (e) => {
        setText(e.target.value);
    };

    // 상태값을 초기화시키는 함수
    const onDataReset = () => {
        setText('');
    }
    return (
        <div style={box}>
            <input type="text" onChange={onTextChange} value={text}/>
            <button onClick={onDataReset}>초기화</button>
            <h3>값: {text}</h3>
        </div>
    );
}

export default InputTest;