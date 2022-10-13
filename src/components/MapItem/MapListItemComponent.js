import React from "react";
import {Avatar, Button, Card, CardActionArea, Link, Stack, Typography} from "@mui/material";
import {MAIN_PAGE_MAP_REDIRECT_ROUTE} from "../../constants/MainPage/MainPage";
import {MAP_LIST_ITEM_API_GET_IMAGE} from "../../constants/MapListItemComponent/MapListItemComponent";
import {API_BASE} from "../../constants/App/App";
import {getColor} from "../../services/ColorService";
import UserAvatarComponent from "../UserAvatar/UserAvatarComponent";

export default function MapListItemComponent({
                                                 id,
                                                 name,
                                                 authorName,
                                                 seed,
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
                            name={authorName}
                        />
                        <Typography
                            sx={{
                                marginLeft: 1,
                                fontWeight: 500
                            }}>
                            {authorName}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </CardActionArea>
    </Card>

}