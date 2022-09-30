import React, {useState} from "react";
import RegisterPageComponent from "../../components/RegisterPage/RegisterPageComponent";
import {API_BASE} from "../../constants/App/App";
import {REGISTER_API_REGISTER} from "../../constants/RegisterPage/RegisterPage";
import axios from "axios";

export default function RegisterPageContainer() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [nameError, setNameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordRepeatError, setPasswordRepeatError] = useState();

    const onNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(false);
    }

    const onPasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value);
        setPasswordRepeatError(false);
    }

    const onRegisterClick = async (e) => {
        if (password !== passwordRepeat) {
            setPasswordRepeatError(true);
            return;
        }
        try {
            const response = await axios.get(API_BASE + REGISTER_API_REGISTER,
                {
                    params: {
                        name: name,
                        password: password,
                        passwordRepeat: passwordRepeat
                    }
                });
            console.log(response.data);
        } catch (error) {
            if (error?.response.status === 404) {
                setNameError(true);
            }
            if (error?.response.status === 400) {
                setPasswordError(true);
                setPasswordRepeatError(true);
            }
        }
    }

    const onLoginClick = (e) => {

    }

    return <RegisterPageComponent
        onLoginTextChange={onNameChange}
        onPasswordTextChange={onPasswordChange}
        onPasswordRepeatTextChange={onPasswordRepeatChange}
        onRegisterClick={onRegisterClick}
        onLoginClick={onLoginClick}
        nameError={nameError}
        passwordError={passwordError}
        passwordRepeatError={passwordRepeatError}
    />
}