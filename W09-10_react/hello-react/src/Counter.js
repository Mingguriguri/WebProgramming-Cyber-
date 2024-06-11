import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const onIncrease = () => {
        setValue(value + 1);
    }
    
    const onDecrease = () => {
        setValue(value - 1);
    }

    return (
        <div>
            <h1>{ value }</h1>
            <button onClick = {onIncrease}> +1</button>
            <button onClick = {onDecrease}> -1</button>
        </div>
    );
}

export default Counter;