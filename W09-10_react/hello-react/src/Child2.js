import React from "react";

function Child2({name, sno, department}){
    return (
        <div>
            <h3> 학과: {department}</h3>
            <h3> 학번: {sno}</h3>
            <h3> 이름: {name}</h3>
        </div>
    );
}

// 컴포넌트 밖에 선언
Child2.defaultProps = {
    name: '심미소',
    sno: '202030027',
    department: '응용통계학과'
};
export default Child2;