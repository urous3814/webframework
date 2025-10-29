import { useState } from "react";

function Toolbar(props) {
    // 본인이 작성하라


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
