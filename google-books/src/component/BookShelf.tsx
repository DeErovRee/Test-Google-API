import { Box, Container } from "@mui/material";
import React from "react";
// @ts-ignore
import { useAppSelector } from "../hooks.ts";
// @ts-ignore
import { BookCard } from "./BookCard.tsx";
import { nanoid } from "@reduxjs/toolkit";
//@ts-ignore
import { SortsAndFilters } from "./SortsAndFilters.tsx";
//@ts-ignore
import { useSearch } from "../function/useSearch.ts";

export const BookShelf = () => {
  const allBooks = useAppSelector((state) => state.search.books);

  const totalBooks = useAppSelector((state) => state.search.totalBooks);

  const searchInput = useAppSelector((state) => state.search.searchInput);
  const sort = useAppSelector((state) => state.search.sort);
  const filter = useAppSelector((state) => state.search.filter);

  const { error, loading } = useSearch({ searchInput, sort, filter });

  return (
    <Container>
      <SortsAndFilters />
      {!loading ? (
        <>
          <p>Find {totalBooks} results</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {allBooks.map((book: any) => {
              return <BookCard book={book} key={nanoid()} />;
            })}
          </Box>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};
