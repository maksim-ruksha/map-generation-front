import React, {useState} from "react";
import CommentSectionComponent from "../../components/CommentSection/CommentSectionComponent";
import {
    COMMENT_SECTION_API_GET_COMMENTS,
    COMMENT_SECTION_API_GET_PAGES_COUNT,
    COMMENT_SECTION_PAGE_SIZE,
    COMMENT_SECTION_SORT_DIRECTION,
    COMMENT_SECTION_SORT_FIELD
} from "../../constants/CommentSection/CommentSection";
import {API_BASE} from "../../constants/App/App";
import axios from "axios";
import {isAuthorized} from "../../services/UserService";

export default function CommentSectionContainer({map}) {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(0);
    const [pagesCount, setPagesCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [userAuthorized, setUserAuthorized] = useState(false);

    const getComments = () => {
        setLoading(true);
        axios.get(API_BASE + COMMENT_SECTION_API_GET_COMMENTS,
            {
                params: {
                    sortField: COMMENT_SECTION_SORT_FIELD,
                    size: COMMENT_SECTION_PAGE_SIZE,
                    direction: COMMENT_SECTION_SORT_DIRECTION,
                    page: page,
                    mapId: map.id
                }
            })
            .then((response) => {
                setComments(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            })
    }

    const onPageChange = (e, page) => {
        setPage(page - 1);
    }

    const getPagesCount = () => {
        axios.get(API_BASE + COMMENT_SECTION_API_GET_PAGES_COUNT,
            {
                params: {
                    mapId: map.id,
                    pageSize: COMMENT_SECTION_PAGE_SIZE
                }
            })
            .then((response) => {
                setPagesCount(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    React.useEffect(()=>{
        isAuthorized().then((response) =>{
            setUserAuthorized(response);
        })
    },[]);

    React.useEffect(() => {
        if (map.id) {
            getComments();
            getPagesCount();
        }
    }, [map]);

    React.useEffect(() => {
        if (map.id) {
            getComments();
        }
    }, [page]);

    return <CommentSectionComponent
        isAuthorized={userAuthorized}
        map={map}
        comments={comments}
        page={page}
        onPageChange={onPageChange}
        pagesCount={pagesCount}
        loading={loading}
    />
}