import React, {useState} from "react";
import LoginPageComponent from "../../components/LoginPage/LoginPageComponent";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {API_LOGIN, API_VALIDATE_TOKEN} from "../../constants/LoginPage/LoginPage";

export default function LoginPageContainer() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [nameError, setNameError] = useState();
    const [passwordError, setPasswordError] = useState();

    const [jwt, setJwt] = useState();


    const onLoginChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(false);
    }

    const onLoginClick = async (e) => {
        try {
            const response = await axios.get(API_BASE + API_LOGIN, {
                params: {
                    name: name,
                    password: password
                }
            });
            // TODO: save token somewhere
            setJwt(response.data)
        } catch (error) {
            if (error?.response.status === 404) {
                setNameError(true);
            }
            if (error?.response.status === 400) {
                setPasswordError(true);
            }
        }


    }

    const onRegisterClick = (e) => {

    }

    return <LoginPageComponent
        onLoginTextChange={onLoginChange}
        onPasswordTextChange={onPasswordChange}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        nameError={nameError}
        passwordError={passwordError}
    />
}