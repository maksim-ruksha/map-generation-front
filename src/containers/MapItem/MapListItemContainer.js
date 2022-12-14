import React from "react";
import MapListItemComponent from "../../components/MapItem/MapListItemComponent";
import {API_BASE} from "../../constants/App/App";
import {
    MAP_LIST_ITEM_API_GET_IMAGE,
    MAP_LIST_ITEM_PAGE_REDIRECT_ROUTE
} from "../../constants/MapListItemComponent/MapListItemComponent";

export default function MapListItemContainer({
                                                 map
                                             }) {
    const redirectRoute = MAP_LIST_ITEM_PAGE_REDIRECT_ROUTE + "?id=" + map.id;
    const mapImageURL = API_BASE + MAP_LIST_ITEM_API_GET_IMAGE + map.seed;

    return <MapListItemComponent
        id={map?.id}
        name={map?.name}
        author={map?.author}
        seed={map?.seed}
        description={map?.description}
        redirectRoute={redirectRoute}
        imageURL={mapImageURL}
    />
}