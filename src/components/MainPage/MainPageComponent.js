import React from "react";
import AppBarComponent from "../AppBar/AppBarComponent";
import MapListItemContainer from "../../containers/MapItem/MapListItemContainer";
import {Box, Stack} from "@mui/material";

export default function MainPageComponent({
                                              isAuthorized,
                                              userName,
                                              onProfileClick,
                                              onLoginClick,
                                              maps
                                          }) {

    return <Box
        sx={{
            backgroundColor: "#F1F1F1"
        }}
    >
        <AppBarComponent
            title={"Maps"}
            isAuthorized={isAuthorized}
            userName={userName}
            onProfileClick={onProfileClick}
            onLoginClick={onLoginClick}
        />
        <Stack
            direction="column"
            sx={{
                alignItems: "center",
            }}>
            {
                maps.map((m) => <MapListItemContainer map={m}/>)
            }
        </Stack>
    </Box>
}