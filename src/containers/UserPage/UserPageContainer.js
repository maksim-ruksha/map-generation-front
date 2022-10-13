import React, {useState} from "react";
import UserPageComponent from "../../components/UserPage/UserPageComponent";
import {useLocation, useSearchParams} from "react-router-dom";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {USER_PAGE_API_GET_USER, USER_PAGE_API_GET_USER_MAPS} from "../../constants/UserPage/UserPage";

export default function UserPageContainer() {
    const location = useLocation()
    const [userId, setUserId] = useState();
    const [user, setUser] = useState({name: " "});
    const [maps, setMaps] = useState([]);

    const loadUserMaps = () => {
        axios.get(API_BASE + USER_PAGE_API_GET_USER_MAPS,
            {
                params: {
                    userId: userId
                }
            })
            .then((response)=>{
                setMaps(response.data);
            })
            .catch((error)=>{
                console.error(error);
            });
    };

    React.useEffect(() => {
        setUserId(
            parseInt(
                location.search.split("?id=")[1]
            ));
    }, []);

    React.useEffect(() => {
        if (userId) {
            axios.get(API_BASE + USER_PAGE_API_GET_USER + userId,
                null)
                .then((response) => {
                    setUser(response.data);
                });
            loadUserMaps();
        }
    }, [userId]);

    return <UserPageComponent
        name={user.name}
        maps={maps}
    />
}
