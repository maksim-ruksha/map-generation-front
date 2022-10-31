import React from "react";
import {Chip} from "@mui/material";

export default function ColorListItemComponent({color}) {
    return <Chip
        sx={{
            margin: 0.25,
            width: "auto",
            backgroundColor: color.color,
            color: "white"
        }}
        label={color.name}
    >
    </Chip>
}