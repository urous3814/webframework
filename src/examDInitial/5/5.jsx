import { useState, useEffect } from "react";

function Counter2(props) {
    /* 본인이 작성시작 */

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
