import { Container } from "@mui/material";
import React, { useState } from "react";
//@ts-ignore
import { useAppSelector } from "../hooks.ts";
//@ts-ignore
import { BookInfo } from "./BookInfo.tsx";
//@ts-ignore

interface ElementType {
  id: string;
}

export const BookPage = () => {
  const pageUrl: string = document.location.pathname.split("/")[2];

  const [book] = useState(
    useAppSelector((state: any) => state.search.books).find(
      (el: ElementType) => el.id === pageUrl
    )
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {book && <BookInfo book={book} />}
    </Container>
  );
};
