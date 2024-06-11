import React from "react";

function Child(props){
    return (
        <div>
            <h3> 이름: {props.name}</h3>
        </div>
    );
}

// 컴포넌트 밖에 선언
Child.defaultProps = {
    name: '심미소'
};
export default Child;