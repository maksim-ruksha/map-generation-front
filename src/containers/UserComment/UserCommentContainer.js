import React, {useState} from "react";
import UserCommentComponent from "../../components/UserComment/UserCommentComponent";
import {
    USER_COMMENT_API_EXISTS,
    USER_COMMENT_API_GET,
    USER_COMMENT_API_SEND
} from "../../constants/UserComment/UserComment";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {getUser, isAuthorized} from "../../services/UserService";
import {getToken} from "../../services/JwtService";

export default function UserCommentContainer({map}) {
    const [loading, setLoading] = useState(false);
    const [userCommentExists, setUserCommentExists] = useState(false);
    const [userAuthorized, setUserAuthorized] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const onCommentChange = (e) => {
        setCommentValue(e.target.value);
    }

    const getUserCommentExists = () => {
        setLoading(true);
        axios.get(API_BASE + USER_COMMENT_API_EXISTS,
            {
                params: {
                    mapId: map.id,
                    userId: getUser().id
                }
            })
            .then((response) => {
                setUserCommentExists(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }

    const getUserComment = () => {
        setLoading(true);
        axios.get(API_BASE + USER_COMMENT_API_GET,
            {
                params: {
                    mapId: map.id,
                    userId: getUser().id
                }
            })
            .then((response) => {
                setLoading(false);
                setCommentValue(response.data.value);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
            });
    }

    const onSendClick = (e) => {
        axios.post(API_BASE + USER_COMMENT_API_SEND,
            {
                value: commentValue,
                author: {
                    id: getUser().id
                },
                map: {
                    id: map.id
                }
            },
            {
                headers: {
                    "Authorization": "Bearer " + getToken()
                }
            }
        )
            .then((response) => {
                setUserCommentExists(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    React.useEffect(()=>{
        isAuthorized().then((response)=>{
            setUserAuthorized(response);
        });
    }, [])

    React.useEffect(() => {
        if(map.id && userAuthorized) {
            getUserCommentExists();
        }
    }, [map.id, userAuthorized]);

    React.useEffect(() => {
        if (userCommentExists) {
            getUserComment();
        }
    }, [userCommentExists]);

    return userAuthorized ? <UserCommentComponent onCommentChange={onCommentChange}
                                 userCommentExists={userCommentExists}
                                 onSendClick={onSendClick}
                                 commentValue={commentValue}
                                 loading={loading}
    />
        : <div/>;
}