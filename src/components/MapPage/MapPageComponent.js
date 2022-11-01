import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import AppBarComponent from "../AppBar/AppBarComponent";
import {MAP_PAGE_COLORS} from "../../constants/MapPage/MapPage";
import ColorListItemComponent from "../ColorListItem/ColorListItemComponent";
import ThumpUpIcon from "@mui/icons-material/ThumbUp";
import CommentSectionContainer from "../../containers/CommentSection/CommentSectionContainer";

export default function MapPageComponent({
                                             map,
                                             mapImageURL,
                                             likesCount,
                                             isLikePressed,
                                             onLikeClick,
                                             imageLoading,
                                             onImageLoad,
                                         }) {
    return <Box>
        <AppBarComponent
            title="Map"
            showUserAccount={true}
        />
        <Stack
            direction="column"
            sx={{
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    margin: 1,
                    minWidth: "calc(min(100%, 860px))",
                    maxWidth: 860
                }}
            >
                <CardContent>
                    <CardHeader title={map?.name}/>
                    <Typography
                        sx={{
                            margin: 1
                        }}
                    >
                        {map?.description}
                    </Typography>
                    {MAP_PAGE_COLORS.map((color) => <ColorListItemComponent key={color.name} color={color}/>)}
                </CardContent>
            </Card>
            {imageLoading ? <Stack sx={{
                margin: 1,
                minWidth: "calc(min(100%, 860px))",
                maxWidth: 860,
                alignItems: "center",
            }}>
                <CircularProgress/>
            </Stack> : <div/>
            }
            <Avatar
                src={mapImageURL}
                onLoad={onImageLoad}
                alt="Map"
                variant="square"
                sx={{
                    margin: 1,
                    minWidth: "calc(min(100%, 860px))",
                    maxWidth: 860,
                    height: "auto",
                    borderRadius: 1.5
                }}
            >
            </Avatar>
            <Typography>
                {"Seed is \"" + map.seed + "\""}
            </Typography>
            <IconButton
                onClick={onLikeClick}
                color={isLikePressed ? "primary" : "default"}
            >
                <ThumpUpIcon/>
            </IconButton>
            <Typography>
                {likesCount}
            </Typography>
            <CommentSectionContainer map={map}/>
        </Stack>
    </Box>
}