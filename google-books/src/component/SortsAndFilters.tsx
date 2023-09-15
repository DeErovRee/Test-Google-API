import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
// @ts-ignore
import { useAppDispatch, useAppSelector } from "../hooks.ts";
// @ts-ignore
import { changeFilter, changeSort } from "../store/searchSlice.ts";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];

const sorts = ["Relevance", "Newest"];

export const SortsAndFilters = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sort = useAppSelector((state) => state.search.sort);
  const filter = useAppSelector((state) => state.search.filter);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "10px",
        flexDirection: "column",
      }}
    >
      <h4
        style={{
          color: "#e3e3e3",
          margin: "5px 0",
        }}
      >
        Filters & sorts
      </h4>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Categories
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="filter"
            label="Categories"
            value={filter}
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
              navigate("/");
            }}
          >
            {categories.map((el) => {
              return (
                <MenuItem value={el} key={nanoid(2)}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Sorting by
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="sort"
            label="Sort by"
            value={sort}
            onChange={(e) => {
              dispatch(changeSort(e.target.value));
              navigate("/");
            }}
          >
            {sorts.map((el) => {
              return (
                <MenuItem value={el} key={nanoid(2)}>
                  {el}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};
