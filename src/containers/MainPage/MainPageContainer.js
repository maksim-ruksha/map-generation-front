import React, {useState} from "react";
import MainPageComponent from "../../components/MainPage/MainPageComponent";
import {
    MAIN_PAGE_API_GET_PAGE, MAIN_PAGE_SIZES,
    MAIN_PAGE_SORT_DIRECTION_DESCENDING,
    MAIN_PAGE_SORT_FIELD_ID
} from "../../constants/MainPage/MainPage";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";

export default function MainPageContainer() {
    // descending sorting by id should give fresh result
    const [sortField, setSortField] = useState(MAIN_PAGE_SORT_FIELD_ID);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(MAIN_PAGE_SORT_DIRECTION_DESCENDING);
    const [size, setSize] = useState(MAIN_PAGE_SIZES[0]);
    const [maps, setMaps] = useState([]);

    const loadPage = async () => {
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

            });
    }

    React.useEffect(() => {
        loadPage();
    }, []);

    return <MainPageComponent maps={maps}/>
}