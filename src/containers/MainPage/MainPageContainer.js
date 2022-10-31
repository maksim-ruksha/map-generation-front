import React, {useState} from "react";
import MainPageComponent from "../../components/MainPage/MainPageComponent";
import {
    MAIN_PAGE_API_GET_PAGE,
    MAIN_PAGE_API_GET_PAGES_COUNT,
    MAIN_PAGE_SIZES, MAIN_PAGE_SORT_DIRECTIONS,
    MAIN_PAGE_SORT_FIELDS
} from "../../constants/MainPage/MainPage";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {isAuthorized} from "../../services/UserService";

export default function MainPageContainer() {
    // descending sorting by id should give fresh result
    const [sortField, setSortField] = useState(MAIN_PAGE_SORT_FIELDS[0]);
    const [page, setPage] = useState(0);
    const [sortDirection, setSortDirection] = useState(MAIN_PAGE_SORT_DIRECTIONS[1]);
    const [pageSize, setPageSize] = useState(MAIN_PAGE_SIZES[0]);
    const [maps, setMaps] = useState([]);
    const [pagesCount, setPagesCount] = useState(1);
    const [loading, setLoading] = useState(false);

    const onSortFieldChange = (e) => {
        setSortField(e.target.value);
    }

    const onSortDirectionChange = (e) => {
        setSortDirection(e.target.value);
    }

    const onPageSizeChange = (e) => {
        setPageSize(e.target.value);
    }

    const onPageChange = async (e, page) => {
        setPage(page - 1);
    }

    const getPageCount = async () => {
        await axios.get(API_BASE + MAIN_PAGE_API_GET_PAGES_COUNT,
            {
                params: {
                    pageSize: pageSize
                }
            }
        )
            .then((response) => {
                    setPagesCount(response.data);
                }
            )
            .catch((error) => {
                console.error(error);
            });
    }

    const loadPage = async () => {
        setLoading(true);
        await axios.get(API_BASE + MAIN_PAGE_API_GET_PAGE,
            {
                params: {
                    sortField: sortField,
                    page: page,
                    direction: sortDirection,
                    size: pageSize
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
        getPageCount();
    }, [pageSize]);

    React.useEffect(() => {
        loadPage()
    }, [page, sortField, sortDirection, pageSize]);

    return <MainPageComponent
        isAuthorized={isAuthorized()}
        maps={maps}
        onPageChange={onPageChange}
        pagesCount={pagesCount}
        loading={loading}
        sortField={sortField}
        sortDirection={sortDirection}
        pageSize={pageSize}
        onSortFieldChange={onSortFieldChange}
        onSortDirectionChange={onSortDirectionChange}
        onPageSizeChange={onPageSizeChange}
    />
}