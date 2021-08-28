import React from 'react';
import {FlexColumnCenter, H3} from "../../../main/ui/commonStyle";
import {Login} from "./Login"
import {useHistory} from "react-router-dom";


const LoginForm = () => {

    const history = useHistory();
    return (
        <FlexColumnCenter>
            <H3>Log in with your account</H3>
            <Login/>
            <br/>
            <button onClick={() => history.push('/forgotPassword')}>{"<<Forget you password?>>"}</button>

        </FlexColumnCenter>
    )
}

export default LoginForm;
