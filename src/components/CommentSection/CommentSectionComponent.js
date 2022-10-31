import React from "react";
import CommentComponent from "../Comment/CommentComponent";
import {Box, Pagination, Stack, Typography} from "@mui/material";
import UserCommentComponent from "../UserComment/UserCommentComponent";
import UserCommentContainer from "../../containers/UserComment/UserCommentContainer";

export default function CommentSectionComponent({
                                                    comments,
                                                    pagesCount,
                                                    onPageChange,
                                                    loading,
                                                    map
                                                }) {
    return <Stack
        sx={{
            minWidth: "calc(min(100%, 860px))",
            maxWidth: 860,
        }}
        direction={"column"}>
        <Typography
            sx={{
                margin: 1
            }}
            variant="h5">
            Comments
        </Typography>
        <UserCommentContainer
            map={map}/>
        {
            comments.map(comment => <CommentComponent
                key={comment.id}
                comment={comment}/>)
        }
        <Pagination
            hidden={pagesCount <= 1}
            sx={{
                width: "100%",
                margin: 4,
                bottom: "0%",
            }}
            disabled={loading}
            onChange={onPageChange}
            size="large"
            count={pagesCount}
            color="primary"
        />
    </Stack>;
}