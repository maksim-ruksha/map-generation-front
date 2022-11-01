import React, {useState} from "react";
import RegisterPageComponent from "../../components/RegisterPage/RegisterPageComponent";
import {API_BASE} from "../../constants/App/App";
import {
    REGISTER_PAGE_API_LOGIN,
    REGISTER_PAGE_API_REGISTER,
    REGISTER_PAGE_MAIN_REDIRECT_ROUTE
} from "../../constants/RegisterPage/RegisterPage";
import axios from "axios";
import {setUser} from "../../services/UserService";
import {Navigate} from "react-router-dom";
import {setToken} from "../../services/JwtService";

export default function RegisterPageContainer() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordRepeatError, setPasswordRepeatError] = useState(false);

    const [userLoaded, setUserLoaded] = useState(false);
    const [jwtLoaded, setJwtLoaded] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const getUser = () => {
        axios.get(API_BASE + REGISTER_PAGE_API_REGISTER,
            {
                params: {
                    name: name,
                    password: password,
                    passwordRepeat: passwordRepeat
                }
            })
            .then((response) => {
                getJwt();
                setUser(response.data.name, response.data.id);
                setUserLoaded(true);
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

    const getJwt = () => {
        axios.get(API_BASE + REGISTER_PAGE_API_LOGIN, {
            params: {
                name: name, password: password
            }
        })
            .then((response) => {
                setToken(response.data);
                setJwtLoaded(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }

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

    const onRegisterClick = (e) => {
        if (password !== passwordRepeat) {
            setPasswordRepeatError(true);
        } else {
            getUser();
        }
    }

    React.useEffect(() => {
        if (userLoaded && jwtLoaded) {
            setRedirect(true);
        }
    }, [userLoaded, jwtLoaded])

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