import React from "react";
import CommentComponent from "../../components/Comment/CommentComponent";

export default function CommentContainer({comment}) {
    return <CommentComponent comment={comment}/>
}