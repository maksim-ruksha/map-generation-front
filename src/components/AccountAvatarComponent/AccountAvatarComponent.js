import React from "react";
import {getColor} from "../../services/ColorService";
import {Avatar} from "@mui/material";

export default function AccountAvatarComponent({name}) {
    return <Avatar sx={{
        height: 24,
        width: 24,
        backgroundColor: getColor(name)
    }}
    >
        {name[0].toUpperCase()}
    </Avatar>
}