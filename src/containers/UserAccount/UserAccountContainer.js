import React, {useState} from "react";
import UserAccountComponent from "../../components/UserAccount/UserAccountComponent";
import {Navigate} from "react-router-dom";
import {USER_ACCOUNT_PROFILE_REDIRECT_ROUTE} from "../../constants/UserAvatar/UserAvatar";

export default function UserAccountContainer({user}) {
    return <UserAccountComponent
        user={user}
    />
}
