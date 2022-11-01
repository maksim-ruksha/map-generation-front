import React from "react";
import UserAvatarComponent from "../../components/UserAvatar/UserAvatarComponent";

export default function UserAvatarContainer({user}) {

    return <UserAvatarComponent
            user={user}
        />
}