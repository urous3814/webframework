import { useState } from "react";

function Toolbar(props) {
    // 본인이 작성하라
    const onClickLogin = props.arg1
    const onClickLogout = props.arg2
    const isLoggedIn = props.isLog
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    김지훈<button onClick={onClickLogout}>로그아웃</button>
                </div>
            ) : (
                <div>
                    <button onClick={onClickLogin}>로그인</button>김지훈
                </div>
            )}
        </div>
    )
}

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Toolbar
          arg1={onClickLogin}
          arg2={onClickLogout}
          isLog={isLoggedIn}
        />
    );
}

export default LandingPage;
