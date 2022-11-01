import React, {useState} from "react";
import LoginPageComponent from "../../components/LoginPage/LoginPageComponent";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {
    LOGIN_PAGE_API_GET_USER, LOGIN_PAGE_API_LOGIN, LOGIN_PAGE_MAIN_REDIRECT_ROUTE
} from "../../constants/LoginPage/LoginPage";
import {setToken} from "../../services/JwtService";
import {Navigate} from "react-router-dom";
import {setUser} from "../../services/UserService";

export default function LoginPageContainer() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [jwt, setJwt] = useState("");

    const [redirect, setRedirect] = useState(false);

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
                name: name, password: password
            }
        })
            .then((response) => {
                setJwt(response.data)
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

    const loadUserData = () => {
        axios.get(API_BASE + LOGIN_PAGE_API_GET_USER + name, null)
            .then((response) => {
                setUser(response.data.name, response.data.id);
                setRedirect(true);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    React.useEffect(() => {
        if (name && jwt) {
            setToken(jwt);
            loadUserData();
        }
    }, [jwt]);


    return redirect ? <Navigate to={LOGIN_PAGE_MAIN_REDIRECT_ROUTE}/> : <LoginPageComponent
        onLoginTextChange={onLoginChange}
        onPasswordTextChange={onPasswordChange}
        onLoginClick={onLoginClick}
        nameError={nameError}
        passwordError={passwordError}
    />
}