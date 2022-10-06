import React from "react";
import MapListItemComponent from "../../components/MapItem/MapListItemComponent";

export default function MapListItemContainer({
                                                 map
                                             }) {
    return <MapListItemComponent
        id={map.id}
        name={map.name}
        authorName={map.author.name}
        seed={map.seed}
        description={map.description}
    />
}