import { useState, useEffect } from "react";

function Counter2(props) {
    /* 본인이 작성시작 */
    const [clk, setClk] = useState(1);
    useEffect(() => {
        const BID = document.getElementById("click")
        BID.innerText = "클릭횟수 " + clk
    })

    /* 본인이 작성종료 */
    return (
        <div>
            <button id="click" onClick={()=> setClk(clk+1)}>
                결과화면
            </button>
        </div>
    );
}

export default Counter2;
