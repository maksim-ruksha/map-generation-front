import React from "react";
import {Avatar, Card, CardActionArea, Stack, Typography} from "@mui/material";
import UserAvatarComponent from "../UserAvatar/UserAvatarComponent";

export default function MapListItemComponent({
                                                 name,
                                                 author,
                                                 description,
                                                 redirectRoute,
                                                 imageURL
                                             }) {
    return <Card
        sx={{
            margin: "8px",
            minWidth: "calc(min(100%, 860px))",
            maxWidth: 860
        }}
    >
        <CardActionArea href={redirectRoute}>
            <Stack
                direction="row">
                <Avatar
                    variant="square"
                    sx={{
                        height: 148,
                        width: 148,
                        borderRadius: 1
                    }}
                    src={imageURL}
                />
                <Stack
                    direction="column"
                    sx={{
                        margin: 1
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            padding: "2px",
                            fontWeight: 500
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            padding: "2px"
                        }}
                    >
                        {description}
                    </Typography>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: "center"
                        }}>
                        <UserAvatarComponent
                            user={author}
                        />
                        <Typography
                            sx={{
                                marginLeft: 1,
                                fontWeight: 500
                            }}>
                            {author.name}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </CardActionArea>
    </Card>

}