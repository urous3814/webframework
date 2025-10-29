import useNum from "./6";

function Accommodate2(props) {
    const [num1, num2, setNum1, setNum2] = useNum(3);

    return (
        <div>
            <p>A값 {num1} B값 {num2} </p>
            <button onClick={setNum1}>
                A버튼 클릭
            </button>
            <button onClick={setNum2}>
                B버튼 클릭
            </button>
        </div>
    );
}

export default Accommodate2;
