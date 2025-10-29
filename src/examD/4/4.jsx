import {useState } from "react";

function Counter(props) {
    const [clickA, setClickA] = useState(2);
    const [clickB, setClickB] = useState(1);

    return (
        <div>
            {/*본인이 작성하라*/}
            <p>
                A버튼값 {clickA} B버튼값 {clickB}
            </p>
            <button
                onClick={() => {
                    setClickA(0)
                }}
            >
                A버튼 클릭
            </button>
            <button
                onClick={() => {
                    setClickB(3)
                }}
            >
                B버튼 클릭
            </button>
            
        </div>
    );
}

export default Counter;
