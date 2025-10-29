import React, { useState } from "react";

function ConfirmButton(props) {
    const [isChecked, setIsChecked] = useState(false);


    function handle() {
        setIsChecked((prevIsChecked) => !prevIsChecked);
    };

    return (
        // 본인이 작성하라


    );
}

export default ConfirmButton;
