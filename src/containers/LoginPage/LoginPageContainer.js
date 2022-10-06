import React, {useState} from "react";
import LoginPageComponent from "../../components/LoginPage/LoginPageComponent";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {LOGIN_PAGE_API_LOGIN, LOGIN_PAGE_REDIRECT_ROUTE} from "../../constants/LoginPage/LoginPage";
import {setToken} from "../../services/JwtService";
import {redirect} from "react-router-dom";

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
        await axios.get(API_BASE + LOGIN_PAGE_API_LOGIN, {
            params: {
                name: name,
                password: password
            }
        })
            .then((response) => {
                setToken(response.data);
            })
            .catch((error) => {
                if (error?.response.status === 404) {
                    setNameError(true);
                }
                if (error?.response.status === 400) {
                    setPasswordError(true);
                }
            })
    }

    const onRegisterClick = (e) => {
        redirect(LOGIN_PAGE_REDIRECT_ROUTE);
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