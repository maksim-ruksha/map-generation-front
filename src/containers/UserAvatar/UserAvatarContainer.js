import React, {useState} from "react";
import UserAvatarComponent from "../../components/UserAvatar/UserAvatarComponent";
import {Navigate} from "react-router-dom";
import {USER_AVATAR_PROFILE_REDIRECT_ROUTE} from "../../constants/UserAvatar/UserAvatar";

export default function UserAvatarContainer({userName}) {
    const [redirect, setRedirect] = useState(false);

    const onAvatarClick = (e) => {
        setRedirect(true);
    }

    return redirect ? <Navigate to={USER_AVATAR_PROFILE_REDIRECT_ROUTE}/>
        :
        <UserAvatarComponent
            name={userName}
            onAvatarClick={onAvatarClick}
        />
}