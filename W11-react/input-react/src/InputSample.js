import React, { useState } from "react";

function InputSample(){
    // css
    const box = {
        width: '500px',
        padding: '15px',
        margin: '30px',
        border: '1px solid darkgrey'
    };

    return (
        <div style={box}>
            <input  type="text" 
                    placeholder="이륾 입력"
                    name="username" />
            <input  type="text"
                    placeholder="이메일 입력"
                    name="useremail" />
            <button >초기화</button>
            <h3>값: 이름(이메일)</h3>
        </div>
    );
}

export default InputSample;