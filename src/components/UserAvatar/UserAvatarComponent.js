import React from "react";
import {getColor} from "../../services/ColorService";
import {Avatar, IconButton} from "@mui/material";
import {USER_AVATAR_PROFILE_REDIRECT_ROUTE} from "../../constants/UserAvatar/UserAvatar";

export default function UserAvatarComponent({user}) {
    return <IconButton
        href={USER_AVATAR_PROFILE_REDIRECT_ROUTE + "?id=" + user?.id}
    >
        <Avatar sx={{
            backgroundColor: getColor(user?.name)
        }}
        >
            {user?.name[0].toUpperCase()}
        </Avatar>
    </IconButton>
}