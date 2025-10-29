import { useState,useEffect } from "react";

function Clock(props) {
    const [second, setSecond] = useState(5);
    // second = 1; // Error : Assignment to constant variable.
    useEffect( 
      /*본인이 작성하라*/

    );

    return (
        <div>
            <h3>second 값은 {second}</h3>
        </div>
    );
}

export default Clock;
