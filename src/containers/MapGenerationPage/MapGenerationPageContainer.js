import React, {useState} from "react";
import MapGenerationPageComponent from "../../components/MapGenerationPage/MapGenerationPageComponent";
import {
    MAP_GENERATION_PAGE_API_GENERATE_MAP,
    MAP_GENERATION_PAGE_API_PUBLISH,
    MAP_GENERATION_PAGE_MAP_REDIRECT_URL,
    MAP_GENERATION_PAGE_PUBLISHED_REDIRECT_URL,
    MAP_GENERATION_PAGE_SEED_TYPING_DELAY
} from "../../constants/MapGenerationComponent/MapGenerationComponent";
import {API_BASE} from "../../constants/App/App";
import axios from "axios";
import {getToken} from "../../services/JwtService";
import {getUser, isAuthorized} from "../../services/UserService";
import {Navigate} from "react-router-dom";


export default function MapGenerationPageContainer() {
    const [seed, setSeed] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState();
    const [typingTimeout, setTypingTimeout] = useState();
    const [mapImageURL, setMapImageURL] = useState("");
    const [publishing, setPublishing] = useState(false);

    const [redirect, setRedirect] = useState(false);
    const [redirectToMap, setRedirectToMap] = useState(false);
    const [mapId, setMapId] = useState();

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onSeedChange = (e) => {
        setSeed(e.target.value);
    };

    React.useEffect(() => {
        if (seed) {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
            setTypingTimeout(setTimeout(() => {
                const url = API_BASE + MAP_GENERATION_PAGE_API_GENERATE_MAP + "/" + seed;
                setMapImageURL(url);
            }, MAP_GENERATION_PAGE_SEED_TYPING_DELAY));
        }
    }, [seed])

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const onPublishClick = async (e) => {
        setPublishing(true);
        await axios.post(API_BASE + MAP_GENERATION_PAGE_API_PUBLISH,
            {
                name: name,
                seed: seed,
                description: description,
                author: {
                    id: getUser().id
                }
            },
            {
                headers: {
                    "Authorization": "Bearer " + getToken()
                }
            }
        ).then(
            (response) => {
                setMapId(response.data.id);
                setRedirectToMap(true);
                setPublishing(false);
            }
        ).catch((error) => {
                console.error(error)
                setPublishing(false);
            }
        );
    }

    React.useEffect(() => {
        isAuthorized().then((authorized) => {
            setRedirectToMap(!authorized);
        });
    }, []);

    return redirectToMap ? <Navigate to={MAP_GENERATION_PAGE_MAP_REDIRECT_URL + "?id=" + mapId}/> :
        redirect ? <Navigate to={MAP_GENERATION_PAGE_PUBLISHED_REDIRECT_URL}/> :
            <MapGenerationPageComponent
                onNameTextChange={onNameChange}
                onSeedTextChange={onSeedChange}
                onDescriptionTextChange={onDescriptionChange}
                mapImageURL={mapImageURL}
                onPublishClick={onPublishClick}
                publishing={publishing}
            />;
}