import React from "react";
import {Avatar, Stack} from "@mui/material";

export default function ColorListItemComponent({color}) {
    return <Avatar
        variant="square"
        sx={{
            margin: 1,
            width: "auto",
            padding: 1,
            borderRadius: 4,
            backgroundColor: color.color
        }}
    >
        {color.name}
    </Avatar>
}