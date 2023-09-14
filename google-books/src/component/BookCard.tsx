import Card from "@mui/material/Card";
import React from "react";

export const BookCard = ({ book }: { book: any }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "300px",
        m: "5px",
        p: "10px",
        cursor: "pointer",
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
  );
};
