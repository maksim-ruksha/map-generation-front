import React from "react";
import {Card, CardContent, IconButton, Stack, TextField, Typography} from "@mui/material";
import {getUser} from "../../services/UserService";
import UserAvatarContainer from "../../containers/UserAvatar/UserAvatarContainer";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";

export default function UserCommentComponent({
                                                 commentValue,
                                                 onCommentChange,
                                                 onSendClick,
                                                 userCommentExists,
                                                 loading
                                             }) {
    return <Card sx={{
        margin: 1,
        minWidth: "calc(min(100%, 860px))",
        maxWidth: 860,
    }}>
        <CardContent>
            <Stack
                sx={{
                    alignItems: "center"
                }}
                direction="row">
                <UserAvatarContainer
                    user={getUser()}/>
                <Typography
                    sx={{
                        marginLeft: 1,
                        fontWeight: 500
                    }}>
                    {getUser().name}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    alignItems: "center"
                }}
                direction="row"
            >
                <TextField
                    disabled={loading}
                    sx={{
                        margin: 1
                    }}
                    fullWidth
                    value={commentValue}
                    onChange={onCommentChange}/>
                <IconButton
                    sx={{
                        margin: 1
                    }}
                    onClick={onSendClick}
                >
                    {userCommentExists ?
                        <EditIcon/>
                        :
                        <SendIcon/>
                    }
                </IconButton>
            </Stack>
        </CardContent>
    </Card>
}