import React from "react";
import {Avatar, Box, Card, CardMedia, Fab, IconButton, Stack, Typography} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";
import {getColor} from "../../services/ColorService";
import MapListItemContainer from "../../containers/MapItem/MapListItemContainer";
import LogoutIcon from "@mui/icons-material/Logout";
import {USER_PAGE_NEW_MAP_REDIRECT_ROUTE} from "../../constants/UserPage/UserPage";

export default function UserPageComponent({
                                              user,
                                              isSelf,
                                              maps,
                                              onLogoutClick
                                          }) {
    return <Box>
        <AppBarComponent
            title="User Profile"
            showUserAccount={!isSelf}/>
        <Fab
            sx={{
                position: "fixed",
                right: "0%",
                bottom: "0%",
                margin: 4,
            }}
            variant="extended"
            color="secondary"
            href={USER_PAGE_NEW_MAP_REDIRECT_ROUTE}
        >
            New map
        </Fab>
        <Stack
            sx={{
                alignItems: "center"
            }}
            direction="column"
        >
            <Card
                sx={{
                    minWidth: "calc(min(100%, 860px))",
                    maxWidth: 860,
                    margin: 1
                }}
            >
                <CardMedia>
                    <Avatar sx={{
                        backgroundColor: getColor(user.name),
                        width: "100%",
                        height: "auto"
                    }}
                            variant="square"
                    >
                        <Typography sx={{
                            fontSize: "64px"
                        }}>
                            {user?.name.toUpperCase()}
                        </Typography>
                        {isSelf ?
                            <Stack
                                sx={{
                                    position: "absolute",
                                    right: 0
                                }}
                            >
                                <IconButton
                                    color={"inherit"}
                                    onClick={onLogoutClick}
                                >
                                    <LogoutIcon/>
                                </IconButton>
                            </Stack>
                            : <div/>
                        }
                    </Avatar>
                </CardMedia>
            </Card>
            {
                maps.map((map) => <MapListItemContainer
                    map={map}
                    key={map.id}/>)
            }
        </Stack>
    </Box>
}