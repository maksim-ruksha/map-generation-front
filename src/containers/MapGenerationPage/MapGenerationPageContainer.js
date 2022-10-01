import React, {useState} from "react";
import MapGenerationPageComponent from "../../components/MapGenerationPage/MapGenerationPageComponent";
import {
    MAP_GENERATION_PAGE_API_GENERATE_MAP,
    MAP_GENERATION_PAGE_SEED_TYPING_DELAY
} from "../../constants/MapGenerationComponent/MapGenerationComponent";
import {API_BASE} from "../../constants/App/App";

export default function MapGenerationPageContainer() {
    const [seed, setSeed] = useState("");
    const [description, setDescription] = useState();
    const [typingTimeout, setTypingTimeout] = useState();
    const [mapImageURL, setMapImageURL] = useState("");


    const onSeedChange = (e) => {
        setSeed(e.target.value);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setTypingTimeout(setTimeout(() => {
            // TODO: fix taking previous seed
            const url = API_BASE + MAP_GENERATION_PAGE_API_GENERATE_MAP + "?seed=" + seed;
            console.log("url with seed " + seed);
            setMapImageURL(url);
        }, MAP_GENERATION_PAGE_SEED_TYPING_DELAY));
    };

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return <MapGenerationPageComponent
        onSeedTextChange={onSeedChange}
        onDescriptionTextChange={onDescriptionChange}
        mapImage={mapImageURL}
    />;
}