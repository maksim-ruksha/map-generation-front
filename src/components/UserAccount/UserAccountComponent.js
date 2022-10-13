import React, {useState} from "react";
import {Button, Link} from "@mui/material";
import {MAIN_PAGE_LOGIN_REDIRECT_ROUTE} from "../../constants/MainPage/MainPage";
import {isAuthorized} from "../../services/UserService";
import UserAvatarContainer from "../../containers/UserAvatar/UserAvatarContainer";

export default function UserAccountComponent({
                                                 user
                                             }) {

    const [authorized, setAuthorized] = useState(false);

    React.useEffect(() => {
        isAuthorized().then((isAuthorized) => {
            setAuthorized(isAuthorized);
        });
    }, []);

    return authorized ?
        <UserAvatarContainer
            userName={user.name}
        />
        :
        <Button
            color="inherit"
        >
            <Link
                href={MAIN_PAGE_LOGIN_REDIRECT_ROUTE}
                underline="none"
                color="inherit"
            >
                Login
            </Link>
        </Button>
}