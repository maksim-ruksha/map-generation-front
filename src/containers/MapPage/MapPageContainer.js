import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import MapPageComponent from "../../components/MapPage/MapPageComponent";
import axios from "axios";
import {API_BASE} from "../../constants/App/App";
import {MAP_PAGE_API_GET_MAP, MAP_PAGE_API_GET_MAP_IMAGE} from "../../constants/MapPage/MapPage";

export default function MapPageContainer() {
    const [mapId, setMapId] = useState();
    const [map, setMap] = useState();
    const [mapImageURL, setMapImageURL] = useState("");
    const location = useLocation();

    React.useEffect(() => {
        setMapId(parseInt(
                location.search.split("?id=")[1]
            ));
    }, []);

    React.useEffect(() => {
        if (mapId) {
            axios.get(API_BASE + MAP_PAGE_API_GET_MAP + mapId)
                .then((response) => {
                    setMap(response.data);
                    setMapImageURL(API_BASE + MAP_PAGE_API_GET_MAP_IMAGE + response.data.seed);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [mapId])

    return <MapPageComponent
        map={map}
        mapImageURL={mapImageURL}
    />
}