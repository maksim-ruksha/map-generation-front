import React from "react";
import {Pagination, Stack, Typography} from "@mui/material";
import UserCommentContainer from "../../containers/UserComment/UserCommentContainer";
import CommentContainer from "../../containers/Comment/CommentContainer";

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
            comments.map(comment => <CommentContainer
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