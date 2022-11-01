import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {getUser} from "../../services/UserService";
import UserAccountContainer from "../../containers/UserAccount/UserAccountContainer";

export default function AppBarComponent({
                                            title,
                                            showUserAccount
                                        }) {
    return <AppBar position="sticky">
        <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{flexGrow: 1}}>
                {title}
            </Typography>
            {
                showUserAccount ? <UserAccountContainer
                        user={getUser()}
                    >

                    </UserAccountContainer>
                    : <div/>

            }
        </Toolbar>
    </AppBar>

}