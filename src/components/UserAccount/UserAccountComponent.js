import React, {useState} from "react";
import {Button, Link} from "@mui/material";
import {MAIN_PAGE_LOGIN_REDIRECT_ROUTE} from "../../constants/MainPage/MainPage";
import {isAuthorized} from "../../services/UserService";
import UserAvatarContainer from "../../containers/UserAvatar/UserAvatarContainer";

export default function UserAccountComponent({
                                                 user,
                                                 authorized
                                             }) {


    return authorized ?
        <UserAvatarContainer
            user={user}
        />
        :
        <Button
            color="inherit"
            href={MAIN_PAGE_LOGIN_REDIRECT_ROUTE}
        >
            Login
        </Button>
}