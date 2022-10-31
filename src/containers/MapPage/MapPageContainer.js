import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import MapPageComponent from "../../components/MapPage/MapPageComponent";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {
    MAP_PAGE_API_DELETE_USER_LIKE,
    MAP_PAGE_API_GET_MAP,
    MAP_PAGE_API_GET_MAP_IMAGE,
    MAP_PAGE_API_GET_MAP_LIKES, MAP_PAGE_API_GET_USER_LIKE, MAP_PAGE_API_POST_USER_LIKE
} from "../../constants/MapPage/MapPage";
import {getUser, isAuthorized} from "../../services/UserService";
import {getToken} from "../../services/JwtService";

export default function MapPageContainer() {
    const [mapId, setMapId] = useState();
    const [map, setMap] = useState({});
    const [mapImageURL, setMapImageURL] = useState("");

    const [likes, setLikes] = useState(0);
    const [userLike, setUserLike] = useState(false);
    const [userAuthorized, setUserAuthorized] = useState(false);

    const [loading, setLoading] = useState(true);

    const location = useLocation();

    React.useEffect(() => {
        setMapId(parseInt(
            location.search.split("?id=")[1]
        ));
    }, []);

    const getLikes = () => {
        axios.get(API_BASE + MAP_PAGE_API_GET_MAP_LIKES + mapId)
            .then((response) => {
                setLikes(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getUserPressedLike = () => {
        axios.get(API_BASE + MAP_PAGE_API_GET_USER_LIKE,
            {
                params: {
                    userId: getUser().id,
                    mapId: mapId
                }
            })
            .then((response) => {
                setUserLike(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getMap = () => {
        axios.get(API_BASE + MAP_PAGE_API_GET_MAP + mapId)
            .then((response) => {
                setMap(response.data);
                setMapImageURL(API_BASE + MAP_PAGE_API_GET_MAP_IMAGE + response.data.seed);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addLike = () => {
        if (mapId) {
            axios.post(API_BASE + MAP_PAGE_API_POST_USER_LIKE,
                {
                    owner: {
                        id: getUser().id
                    },
                    map: {
                        id: mapId
                    }

                },
                {
                    headers: {
                        "Authorization": "Bearer " + getToken()
                    }
                })
                .then((response) => {
                    setUserLike(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    const deleteLike = () => {
        if (mapId) {
            axios.delete(API_BASE + MAP_PAGE_API_DELETE_USER_LIKE,
                {
                    params: {
                        userId: getUser().id,
                        mapId: mapId
                    },
                    headers: {
                        "Authorization": "Bearer " + getToken()
                    }
                })
                .then((response) => {
                    setUserLike(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    const onLikePressed = (e) => {
        if (!userLike) {
            addLike();
        } else {
            deleteLike();
        }
    }

    const onImageLoad = (e) => {
        setLoading(false)
    }

    React.useEffect(() => {
        isAuthorized().then((response) => {
            setUserAuthorized(response);
        })
    }, []);

    React.useEffect(() => {
        if (mapId) {
            getMap();
            getLikes();
            if (userAuthorized) {
                getUserPressedLike();
            }
        }
    }, [mapId, userAuthorized]);

    React.useEffect(() => {
        if (mapId) {
            getLikes();
        }
    }, [userLike]);

    return <MapPageComponent
        map={map}
        mapImageURL={mapImageURL}
        onLikeClick={onLikePressed}
        isLikePressed={userLike}
        imageLoading={loading}
        onImageLoad={onImageLoad}
        likesCount={likes === 0 ? "" : likes}
    />
}