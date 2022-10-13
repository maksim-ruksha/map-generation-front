import React, {useState} from "react";
import RegisterPageComponent from "../../components/RegisterPage/RegisterPageComponent";
import {API_BASE} from "../../constants/App/App";
import {REGISTER_PAGE_API_REGISTER, REGISTER_PAGE_MAIN_REDIRECT_ROUTE} from "../../constants/RegisterPage/RegisterPage";
import axios from "axios";
import {setUser} from "../../services/UserService";
import {Navigate} from "react-router-dom";

export default function RegisterPageContainer() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [nameError, setNameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordRepeatError, setPasswordRepeatError] = useState();

    const [redirect, setRedirect] = useState(false);

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
        await axios.get(API_BASE + REGISTER_PAGE_API_REGISTER,
            {
                params: {
                    name: name,
                    password: password,
                    passwordRepeat: passwordRepeat
                }
            })
            .then((response) => {
                setUser(response.data.name, response.data.id);
                setRedirect(true);
            })
            .catch((error) => {
                if (error?.response.status === 404) {
                    setNameError(true);
                }
                if (error?.response.status === 400) {
                    setPasswordError(true);
                    setPasswordRepeatError(true);
                }
            });
    }

    return redirect ? <Navigate to={REGISTER_PAGE_MAIN_REDIRECT_ROUTE}/> : <RegisterPageComponent
        onLoginTextChange={onNameChange}
        onPasswordTextChange={onPasswordChange}
        onPasswordRepeatTextChange={onPasswordRepeatChange}
        onRegisterClick={onRegisterClick}
        nameError={nameError}
        passwordError={passwordError}
        passwordRepeatError={passwordRepeatError}
    />
}