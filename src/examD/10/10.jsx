import { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 3;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(2);

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {/*본인이 작성하라*/}

            {count != 0 ? <p>사람 있음</p> : <p>사람 없음</p>}

            
        </div>
    );
}

export default Accommodate;
