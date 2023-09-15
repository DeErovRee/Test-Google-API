import { Box, Container } from "@mui/material";
import React from "react";
// @ts-ignore
import { useAppSelector } from "../hooks.ts";
// @ts-ignore
import { BookCard } from "./BookCard.tsx";
import { nanoid } from "@reduxjs/toolkit";
//@ts-ignore
import { SortsAndFilters } from "./SortsAndFilters.tsx";

export const BookShelf = () => {
  // const category = useAppSelector((state) => state.search.filter);
  const allBooks = useAppSelector((state) => state.search.books);

  const totalBooks = useAppSelector((state) => state.search.totalBooks);

  return (
    <Container>
      <SortsAndFilters />
      <p>Find {totalBooks} results</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {allBooks.map((book: object) => {
          return <BookCard book={book} key={nanoid()} />;
        })}
      </Box>
    </Container>
  );
};
