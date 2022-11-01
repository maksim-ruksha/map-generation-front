import React from "react";
import {Avatar, Box, Card, CardHeader, CardMedia, Stack, Typography} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";
import UserAvatarContainer from "../../containers/UserAvatar/UserAvatarContainer";
import {getColor} from "../../services/ColorService";
import MapListItemContainer from "../../containers/MapItem/MapListItemContainer";

export default function UserPageComponent({
                                              name,
                                              isSelf,
                                              maps
                                          }) {
    return <Box>
        <AppBarComponent
            title="User Profile"
            showUserAccount={!isSelf}/>
        <Card
            sx={{
                margin: 1
            }}
        >
            <CardMedia>
                <Avatar sx={{
                    backgroundColor: getColor(name),
                    width: "100%",
                    height: "auto"
                }}
                        variant="square"
                >
                    <Typography sx={{
                        fontSize: "64px"
                    }}>
                        {name.toUpperCase()}
                    </Typography>
                </Avatar>
            </CardMedia>
        </Card>
        <Stack
            sx={{
                alignItems: "center"
            }}
            direction="column"
        >
            {
                maps.map((map) => <MapListItemContainer
                    map={map}
                    key={map.id}/>)
            }
        </Stack>
    </Box>
}