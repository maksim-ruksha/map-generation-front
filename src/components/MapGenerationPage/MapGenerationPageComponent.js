import React from "react";
import {Avatar, Box, Card, CardActions, CardContent, CardHeader, TextField, Typography} from "@mui/material";

export default function MapGenerationPageComponent({
                                                       onSeedTextChange,
                                                       onDescriptionTextChange,
                                                       mapImage
                                                   }) {
    return <Box
        className={"box-center"}
        sx={{height: "80vh"}}
    >
        <Card>
            <CardHeader title={"New map"}>
            </CardHeader>
            <CardContent>
                <Avatar
                    variant={"square"}
                    src={mapImage}
                    sx={{
                        width: 256,
                        height: 256,
                        margin: "auto"
                    }}
                />

                <TextField
                    fullWidth
                    label={"Seed"}
                    margin={"normal"}
                    onChange={onSeedTextChange}
                />
                <TextField
                    fullWidth
                    variant={"filled"}
                    multiline={true}
                    label={"Description"}
                    margin={"normal"}
                    onChange={onDescriptionTextChange}
                />
            </CardContent>

            <CardActions>
            </CardActions>
        </Card>
    </Box>
}