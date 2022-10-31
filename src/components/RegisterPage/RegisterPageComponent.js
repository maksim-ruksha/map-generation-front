import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Link, Stack, TextField} from "@mui/material";
import {REGISTER_PAGE_LOGIN_REDIRECT_ROUTE} from "../../constants/RegisterPage/RegisterPage";
import AppBarComponent from "../AppBar/AppBarComponent";

export default function RegisterPageComponent({
                                                  onLoginTextChange,
                                                  onPasswordTextChange,
                                                  onPasswordRepeatTextChange,
                                                  onRegisterClick,
                                                  nameError,
                                                  passwordError,
                                                  passwordRepeatError
                                              }) {
    return (
        <Box>
            <AppBarComponent
                title="Register"
                showUserAccount={false}
            />
            <Stack
                direction="column"
                sx={{
                    margin: 1,
                    alignItems: "center"
                }}
            >
                <Card>
                    <CardHeader title={"Register"}/>
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
                        <Button onClick={onRegisterClick}>
                            Register
                        </Button>
                        <Button
                            href={REGISTER_PAGE_LOGIN_REDIRECT_ROUTE}
                        >
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </Stack>
        </Box>);
}