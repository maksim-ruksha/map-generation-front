import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography} from "@mui/material";
import "../../styles/LoginPage/LoginPage.css";

export default function LoginPageComponent({
                                               onLoginTextChange,
                                               onPasswordTextChange,
                                               onLoginClick,
                                               onRegisterClick,
                                               nameError,
                                               passwordError,
                                           }) {
    return (
        <Box
            sx={{height: "80vh"}}
            className="login-card"
        >
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