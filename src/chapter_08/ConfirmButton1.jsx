import React, { useState } from "react";

function ConfirmButton1(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 방법1. 함수 안의 함수로 정의
    function handleConfirm () {      
        //setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
        setIsConfirmed(!isConfirmed);
    };
    /*
    // 방법2. arrow function을 사용하여 정의 
    const handleConfirm = () => {      
        //setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
        setIsConfirmed(!isConfirmed);
    };
    */
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton1;
