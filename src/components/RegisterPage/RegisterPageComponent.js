import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, TextField} from "@mui/material";

export default function RegisterPageComponent({
                                                  onLoginTextChange,
                                                  onPasswordTextChange,
                                                  onPasswordRepeatTextChange,
                                                  onRegisterClick,
                                                  onLoginClick,
                                                  nameError,
                                                  passwordError,
                                                  passwordRepeatError
                                              }) {
    return (
        <Box
            sx={{height: "80vh"}}
            className="box-center"
        >
            <Card>
                <CardHeader title={"Register"}>
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
                    <TextField
                        fullWidth
                        margin={"dense"}
                        label={"Repeat Password"}
                        onChange={onPasswordRepeatTextChange}
                        error={passwordRepeatError}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        onClick={onRegisterClick}
                    >
                        Register
                    </Button>
                    <Button
                        onClick={onLoginClick}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        </Box>);
}