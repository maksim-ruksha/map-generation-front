import React, {useState} from "react";
import MainPageComponent from "../../components/MainPage/MainPageComponent";
import {
    MAIN_PAGE_API_GET_PAGE, MAIN_PAGE_API_GET_PAGES_COUNT, MAIN_PAGE_LOGIN_REDIRECT_ROUTE, MAIN_PAGE_SIZES,
    MAIN_PAGE_SORT_DIRECTION_DESCENDING,
    MAIN_PAGE_SORT_FIELD_ID
} from "../../constants/MainPage/MainPage";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {redirect} from "react-router-dom";

export default function MainPageContainer() {
    // descending sorting by id should give fresh result
    const [sortField, setSortField] = useState(MAIN_PAGE_SORT_FIELD_ID);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(MAIN_PAGE_SORT_DIRECTION_DESCENDING);
    const [size, setSize] = useState(MAIN_PAGE_SIZES[0]);
    const [maps, setMaps] = useState([]);
    const [pagesCount, setPagesCount] = useState(1);
    const [loading, setLoading] = useState(false);

    const onPageChange = async (e, page) => {
        setPage(page - 1);
    }

    const getPageCount = async () => {
        await axios.get(API_BASE + MAIN_PAGE_API_GET_PAGES_COUNT,
            {
                params: {
                    pageSize: size
                }
            }
        )
            .then((response) => {
                    setPagesCount(response.data);
                }
            )
            .catch((error) => {
                console.error(error);
            })
    }

    const loadPage = async () => {
        setLoading(true);
        await axios.get(API_BASE + MAIN_PAGE_API_GET_PAGE,
            {
                params: {
                    sortField: sortField,
                    page: page,
                    direction: direction,
                    size: size
                }
            })
            .then((response) => {
                setMaps(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        setLoading(false);
    }

    React.useEffect(() => {
        getPageCount();
    }, []);

    React.useEffect(() => {
        loadPage()
    }, [page])

    return <MainPageComponent
        maps={maps}
        onPageChange={onPageChange}
        pagesCount={pagesCount}
        loading={loading}
    />
}