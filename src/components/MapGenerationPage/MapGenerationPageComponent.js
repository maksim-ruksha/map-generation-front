import React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";

export default function MapGenerationPageComponent({
                                                       onNameTextChange,
                                                       onSeedTextChange,
                                                       onDescriptionTextChange,
                                                       mapImageURL,
                                                       onPublishClick,
                                                       publishing
                                                   }) {
    return <Box>
        <AppBarComponent
            showUserAccount={true}
        />
        <Stack
            sx={{
                margin: 1,
                alignItems: "center"
            }}
        >
            <Card>
                <CardHeader title={"New map"}/>
                <CardContent>
                    <Avatar
                        variant={"square"}
                        src={mapImageURL}
                        sx={{
                            width: 256,
                            height: 256,
                            margin: "auto"
                        }}
                    >
                        Map
                    </Avatar>
                    <TextField
                        disabled={publishing}
                        fullWidth
                        label={"Name"}
                        margin={"normal"}
                        onChange={onNameTextChange}
                    />
                    <TextField
                        disabled={publishing}
                        fullWidth
                        label={"Seed"}
                        margin={"normal"}
                        onChange={onSeedTextChange}
                    />
                    <TextField
                        disabled={publishing}
                        fullWidth
                        multiline
                        label={"Description"}
                        margin={"normal"}
                        onChange={onDescriptionTextChange}
                    />
                </CardContent>

                <CardActions>
                    <Button
                        disabled={publishing}
                        onClick={onPublishClick}
                        variant="outlined"
                        sx={{
                            margin: 1
                        }}
                    >
                        Publish
                    </Button>
                </CardActions>
            </Card>
        </Stack>
    </Box>
}