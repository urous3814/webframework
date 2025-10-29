import React, { useState } from 'react'

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? '김지훈' : '확인하기'}
        </button>
    )
}

export default ConfirmButton
