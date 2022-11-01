import React from "react";
import AppBarComponent from "../AppBar/AppBarComponent";
import MapListItemContainer from "../../containers/MapItem/MapListItemContainer";
import {Box, Fab, Link, Pagination, Stack} from "@mui/material";
import MapListItemComponent from "../MapItem/MapListItemComponent";
import {MAIN_PAGE_NEW_MAP_REDIRECT_ROUTE} from "../../constants/MainPage/MainPage";

export default function MainPageComponent({
                                              isAuthorized,
                                              userName,
                                              onProfileClick,
                                              onPageChange,
                                              pagesCount,
                                              loading,
                                              maps
                                          }) {

    return <Box>
        <AppBarComponent
            title={"Maps"}
            isAuthorized={isAuthorized}
            userName={userName}
            onProfileClick={onProfileClick}
            showUserAccount={true}
        />
        <Fab
            sx={{
                position: "fixed",
                right: "0%",
                bottom: "0%",
                margin: 4
            }}
            color="secondary"
            variant="extended"
        >
            <Link href={MAIN_PAGE_NEW_MAP_REDIRECT_ROUTE}
                  underline="none"
                  color="inherit"
            >
                New map
            </Link>
        </Fab>
        <Stack
            direction="column"
            sx={{
                margin: 1,
                alignItems: "center",
            }}>
            {
                maps.map((m) => <MapListItemContainer
                    key={m.id}
                    map={m}/>)
            }
            <Pagination
                sx={{
                    position: "fixed",
                    bottom: "0%",
                    margin: 4
                }}
                disabled={loading}
                onChange={onPageChange}
                size="large"
                count={pagesCount}
                color="primary"
            />

        </Stack>

    </Box>
}