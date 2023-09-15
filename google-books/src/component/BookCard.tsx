import Card from "@mui/material/Card";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }: { book: any }) => {
  return (
    <Link
      to={{ pathname: `/books/${book.id}` }}
      key={nanoid()}
      style={{
        textDecoration: "none",
        width: "300px",
        cursor: "pointer",
        margin: "5px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          height: "100%",
          boxSizing: "border-box",
          padding: "5px",

          ":hover": {
            border: "1px solid #1976d2",
          },
        }}
      >
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
        <p
          style={{
            textDecoration: "underline",
            color: "#e3e3e3",
          }}
        >
          {book.volumeInfo.categories}
        </p>
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {book.volumeInfo.title}
        </p>
        <p>
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : <></>}
        </p>
      </Card>
    </Link>
  );
};
