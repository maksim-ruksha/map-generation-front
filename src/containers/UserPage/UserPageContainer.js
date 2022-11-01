import React, {useState} from "react";
import UserPageComponent from "../../components/UserPage/UserPageComponent";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {USER_PAGE_API_GET_USER, USER_PAGE_API_GET_USER_MAPS} from "../../constants/UserPage/UserPage";
import {clearUser, getUser} from "../../services/UserService";
import {clearToken} from "../../services/JwtService";

export default function UserPageContainer() {
    const location = useLocation()
    const [userId, setUserId] = useState();
    const [user, setUser] = useState({name: " "});
    const [maps, setMaps] = useState([]);
    const [isSelf, setIsSelf] = useState(false);

    const loadUserMaps = () => {
        axios.get(API_BASE + USER_PAGE_API_GET_USER_MAPS,
            {
                params: {
                    userId: userId
                }
            })
            .then((response) => {
                setMaps(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const logout = () => {
        clearUser();
        clearToken();
    }

    const onLogoutClick = () => {
        logout();
        setIsSelf(false);
    }

    React.useEffect(() => {
        const id = parseInt(
            location.search.split("?id=")[1]
        );
        setUserId(id);
    }, []);

    React.useEffect(() => {
        if (userId) {
            axios.get(API_BASE + USER_PAGE_API_GET_USER + userId,
                null)
                .then((response) => {
                    setUser(response.data);
                });
            setIsSelf(userId.toString() === getUser().id);
            loadUserMaps();
        }
    }, [userId]);

    return <UserPageComponent
        user={user}
        maps={maps}
        isSelf={isSelf}
        onLogoutClick={onLogoutClick}
    />
}
