import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Link, Stack, TextField} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";
import {LOGIN_PAGE_REGISTER_REDIRECT_ROUTE} from "../../constants/LoginPage/LoginPage";

export default function LoginPageComponent({
                                               onLoginTextChange,
                                               onPasswordTextChange,
                                               onLoginClick,
                                               nameError,
                                               passwordError,
                                           }) {
    return (<Box>
        <AppBarComponent
            title="Login"
            showUserAccount={false}/>
        <Stack
            direction="column"
            sx={{
                margin: 1,
                alignItems: "center"
            }}
        >
            <Card>
                <CardHeader title={"Login"}/>
                <CardContent>
                    <TextField
                        fullWidth
                        margin={"dense"}
                        label={"Login"}
                        onChange={onLoginTextChange}
                        error={nameError}
                    />
                    <TextField
                        fullWidth
                        margin={"dense"}
                        label={"Password"}
                        onChange={onPasswordTextChange}
                        error={passwordError}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        onClick={onLoginClick}
                    >
                        Login
                    </Button>
                    <Button
                        href={LOGIN_PAGE_REGISTER_REDIRECT_ROUTE}
                    >
                        Register
                    </Button>
                </CardActions>
            </Card>
        </Stack>
    </Box>);
}