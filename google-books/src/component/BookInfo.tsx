import { Box } from "@mui/material";
import React from "react";

export const BookInfo = (book) => {
  console.log(book);
  return (
    <>
      <img
        src={book.book.volumeInfo.imageLinks.thumbnail}
        alt="book cover"
        style={{
          maxWidth: "300px",
          width: "100%",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
        }}
      >
        <h4
          style={{
            color: "#e3e3e3",
            textDecoration: "underline",
          }}
        >
          {book.book.volumeInfo.categories.join(", ")}
        </h4>

        <h1
          style={{
            margin: "0px",
          }}
        >
          {book.book.volumeInfo.title}
        </h1>
        <h4
          style={{
            color: "#1976d2",
          }}
        >
          {book.book.volumeInfo.authors.join(", ")}
        </h4>
        <p>{book.book.volumeInfo.description}</p>
      </Box>
    </>
  );
};
