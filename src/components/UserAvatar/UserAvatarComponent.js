import React from "react";
import {getColor} from "../../services/ColorService";
import {Avatar, IconButton, Link} from "@mui/material";

export default function UserAvatarComponent({name, onAvatarClick}) {
    return <IconButton>
        <Avatar sx={{
            backgroundColor: getColor(name)
        }}
        >
            {name[0].toUpperCase()}
        </Avatar>
    </IconButton>
}