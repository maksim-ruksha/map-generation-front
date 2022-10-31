import React from "react";
import UserAccountContainer from "../../containers/UserAccount/UserAccountContainer";
import {Card, CardContent, Stack, Typography} from "@mui/material";
import UserAvatarContainer from "../../containers/UserAvatar/UserAvatarContainer";
import * as PropTypes from "prop-types";

function CradContent(props) {
    return null;
}

CradContent.propTypes = {children: PropTypes.node};
export default function CommentComponent({
                                             comment
                                         }) {
    return <Card
        sx={{
            minWidth: "calc(min(100%, 860px))",
            maxWidth: 860,
            margin: 1
        }}
    >
        <CardContent>
            <Stack
                direction="row">
                <UserAvatarContainer user={comment?.author}/>
                <Stack
                    sx={{
                        margin: 1
                    }}
                    direction="column">
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 400
                        }}
                    >
                        {comment.author.name}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 500
                        }}
                    >
                        {comment.value}
                    </Typography>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
}