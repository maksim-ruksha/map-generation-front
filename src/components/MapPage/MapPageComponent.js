import React from "react";
import {Avatar, Box, Card, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";
import {MAP_PAGE_COLORS} from "../../constants/MapPage/MapPage";
import ColorListItemComponent from "../ColorListItem/ColorListItemComponent";

export default function MapPageComponent({map, mapImageURL}) {
    return <Box>
        <AppBarComponent
            title="Map"
            showUserAccount={true}
        />
        <Card
            sx={{
                margin: 1,
            }}
        >
            <CardContent>
                <CardHeader title={map?.name}/>
                <Typography
                    sx={{
                        margin: 1
                    }}
                >
                    {map?.description}
                </Typography>
                <Stack direction="row">
                    {MAP_PAGE_COLORS.map((color) => <ColorListItemComponent color={color}/>
                    )}
                </Stack>
            </CardContent>
        </Card>
        <Stack
            direction="column"
            sx={{
                alignItems: "center",
                height: "50%"
            }}
        >
            <Avatar
                src={mapImageURL}
                variant="square"
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </Stack>
    </Box>
}