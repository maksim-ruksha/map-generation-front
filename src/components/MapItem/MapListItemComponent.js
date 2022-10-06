import React from "react";
import {Avatar, Button, Card, Link, Stack, Typography} from "@mui/material";
import {MAIN_PAGE_MAP_REDIRECT_ROUTE} from "../../constants/MainPage/MainPage";
import {MAP_LIST_ITEM_API_GET_IMAGE} from "../../constants/MapListItemComponent/MapListItemComponent";
import {API_BASE} from "../../constants/App/App";
import {getColor} from "../../services/ColorService";
import AccountAvatarComponent from "../AccountAvatarComponent/AccountAvatarComponent";

export default function MapListItemComponent({
                                                 id,
                                                 name,
                                                 authorName,
                                                 seed,
                                                 description
                                             }) {
    return <Card
        sx={{
            margin: "8px",
            maxWidth: 860
        }}
    >
        <Stack
            direction="row">
            <Avatar
                variant="square"
                sx={{
                    height: 128,
                    width: 128,
                    borderRadius: 1
                }}
                src={API_BASE + MAP_LIST_ITEM_API_GET_IMAGE + "/" + seed}
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
                    {"Lorem ipsum " + id}
                </Typography>
                <Typography
                    sx={{
                        padding: "2px"
                    }}
                >
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s.
                </Typography>
                <Stack
                    direction="row"
                    sx={{
                        alignItems: "center"
                    }}>
                    <AccountAvatarComponent
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
    </Card>

}