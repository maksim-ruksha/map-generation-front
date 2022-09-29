import React from "react";
import {Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography} from "@mui/material";

export default function LoginPageComponent({
                                               onLoginTextChange,
                                               onPasswordTextChange,
                                               onLoginClick,
                                               onRegisterClick,
                                               nameError,
                                               passwordError,
                                           }) {
    return (<Box sx={{maxWidth: 312, alignSelf: "center"}}>
        <Card>
            <CardHeader title={"Login"}>
            </CardHeader>
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
                    onClick={onRegisterClick}
                >
                    Register
                </Button>
            </CardActions>
        </Card>
    </Box>);
}