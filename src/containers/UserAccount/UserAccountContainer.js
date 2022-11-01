import React, {useState} from "react";
import UserAccountComponent from "../../components/UserAccount/UserAccountComponent";
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
