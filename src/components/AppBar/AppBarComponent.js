import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import UserAccountComponent from "../UserAccount/UserAccountComponent";

export default function AppBarComponent({
                                            title,
                                            isAuthorized,
                                            userName,
                                            onProfileClick,
                                            onLoginClick
                                        }) {
    return <AppBar position="sticky">
        <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{flexGrow: 1}}>
                {title}
            </Typography>

            <UserAccountComponent
                isAuthorized={isAuthorized}
                userName={userName}
                onProfileClick={onProfileClick}
                onLoginClick={onLoginClick}
            >
            </UserAccountComponent>
        </Toolbar>
    </AppBar>

}