import React, { useState } from "react";

function ConfirmButton(props) {
    const [isChecked, setIsChecked] = useState(false);


    function handle() {
        setIsChecked((prevIsChecked) => !prevIsChecked);
    };

    return (
        // 본인이 작성하라
        <>
        <button onClick={handle}>
            {isChecked ? <span style={{color: "blue"}}>확인됨</span> : "확인하기"}
        </button>
        </>
    );
}

export default ConfirmButton;
