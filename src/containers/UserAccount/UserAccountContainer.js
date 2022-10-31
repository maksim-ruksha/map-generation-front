import React, {useState} from "react";
import UserAccountComponent from "../../components/UserAccount/UserAccountComponent";
import {Navigate} from "react-router-dom";
import {USER_ACCOUNT_PROFILE_REDIRECT_ROUTE} from "../../constants/UserAvatar/UserAvatar";
import {isAuthorized} from "../../services/UserService";

export default function UserAccountContainer({user}) {
    const [authorized, setAuthorized] = useState(false);

    React.useEffect(() => {
        isAuthorized().then((isAuthorized) => {
            setAuthorized(isAuthorized);
        });
    }, []);
    return <UserAccountComponent
        user={user}
        authorized={authorized}
    />
}
