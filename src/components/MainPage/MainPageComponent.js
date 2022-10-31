import React from "react";
import AppBarComponent from "../AppBar/AppBarComponent";
import MapListItemContainer from "../../containers/MapItem/MapListItemContainer";
import {Box, Fab, FormControl, InputLabel, Link, MenuItem, Pagination, Select, Stack} from "@mui/material";
import {
    MAIN_PAGE_NEW_MAP_REDIRECT_ROUTE,
    MAIN_PAGE_SIZES, MAIN_PAGE_SORT_DIRECTIONS,
    MAIN_PAGE_SORT_FIELDS
} from "../../constants/MainPage/MainPage";

export default function MainPageComponent({
                                              isAuthorized,
                                              userName,
                                              onPageChange,
                                              pagesCount,
                                              loading,
                                              maps,
                                              sortField,
                                              sortDirection,
                                              pageSize,
                                              onSortFieldChange,
                                              onSortDirectionChange,
                                              onPageSizeChange
                                          }) {

    return <Box>
        <AppBarComponent
            title={"Maps"}
            isAuthorized={isAuthorized}
            userName={userName}
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
            href={MAIN_PAGE_NEW_MAP_REDIRECT_ROUTE}
        >
            New map
        </Fab>
        <Stack
            direction="column"
            sx={{
                margin: 1,
                alignItems: "center"
            }}>
            <Stack
                direction="row"
                sx={{
                    minWidth: "calc(min(100%, 860px))",
                    maxWidth: 860
                }}
            >
                <FormControl
                    sx={{
                        width: "30%",
                        margin: 1
                    }}>
                    <InputLabel id="main-page-sort-select-label">Sort By</InputLabel>
                    <Select
                        labelId={"main-page-sort-select-label"}
                        label={"Sort by"}
                        value={sortField}
                        onChange={onSortFieldChange}
                    >
                        {MAIN_PAGE_SORT_FIELDS.map((field) => <MenuItem
                            key={field}
                            value={field}>
                            {field}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl
                    sx={{
                        width: "30%",
                        margin: 1
                    }}
                >
                    <InputLabel id="main-page-page-sort-direction-select-label">Direction</InputLabel>
                    <Select
                        labelId={"main-page-page-sort-direction-select-label"}
                        label={"Direction"}
                        value={sortDirection}
                        onChange={onSortDirectionChange}
                    >
                        {MAIN_PAGE_SORT_DIRECTIONS.map((direction) => <MenuItem
                            key={direction}
                            value={direction}>
                            {direction}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl
                    sx={{
                        width: "40%",
                        margin: 1
                    }}
                >
                    <InputLabel id="main-page-page-size-select-label">Page Size</InputLabel>
                    <Select
                        labelId={"main-page-page-size-select-label"}
                        label={"Page Size"}
                        value={pageSize}
                        onChange={onPageSizeChange}
                    >
                        {MAIN_PAGE_SIZES.map((size) => <MenuItem
                            key={size}
                            value={size}>
                            {size}
                        </MenuItem>)}
                    </Select>
                </FormControl>
            </Stack>
            {
                maps.map((m) => <MapListItemContainer
                    key={m.id}
                    map={m}/>)
            }
            <Pagination
                hidden={pagesCount <= 1}
                sx={{
                    position: "fixed",
                    margin: 4,
                    bottom: "0%",
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