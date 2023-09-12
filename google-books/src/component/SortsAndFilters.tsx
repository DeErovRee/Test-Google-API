import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";

export const SortsAndFilters = () => {
  const sortValue = useSelector((state: any) => state.search.sort);

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
            id="demo-simple-select-standard"
            label="Categories"
            value={"none"}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Sorting by
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Sort by"
            value={sortValue}
          >
            {sorts.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};
