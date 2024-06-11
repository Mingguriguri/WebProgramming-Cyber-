import React from "react";

function Child(props){
    return (
        <div>
            <h3> 이름: {props.name}</h3>
        </div>
    );
}

export default Child;