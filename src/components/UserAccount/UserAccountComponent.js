import React from "react";
import {Button} from "@mui/material";
import AccountAvatarComponent from "../AccountAvatarComponent/AccountAvatarComponent";

export default function UserAccountComponent({
                                                 isAuthorized,
                                                 userName,
                                                 onProfileClick,
                                                 onLoginClick,

                                             }) {
    return isAuthorized ?
        <AccountAvatarComponent name={userName}/>
        :
        <Button
            color="inherit"
            onClick={onLoginClick}
        >
            Login
        </Button>
}