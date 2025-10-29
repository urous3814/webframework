//본인이 작성하라
import { useState } from 'react'

function useNum(initialValue) {
    const [num1, setRealNum1] = useState(initialValue)
    const [num2, setRealNum2] = useState(initialValue)
    const setNum1 = () => {
      setRealNum1(1);
    }
    const setNum2 = () => {
      setRealNum2(5);
    }

    return [num1, num2, setNum1, setNum2]
}

export default useNum
