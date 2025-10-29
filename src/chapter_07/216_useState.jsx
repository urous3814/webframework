import React, { useState } from "react";

function Counter(props) {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    console.log(`>> Counter(count = ${countA}) called`);
    return (
        <div>
            <h1>제출자: 김지훈 </h1>
            <p>총 A버튼 {countA}번, B버튼 {countB}번 클릭했습니다.</p>
            <button onClick={()=> setCountA(countA+1)}>
                A버튼 클릭
            </button>
            <button onClick={()=> setCountB(countB+1)}>
                B버튼 클릭
            </button>
        </div>
    );
}

export default Counter;
