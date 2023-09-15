import axios from "axios";
import { keyAPI } from "../API.js";
import {
  changeBooks,
  changeTotalBooks,
  // @ts-ignore
} from "../store/searchSlice.ts";
// @ts-ignore
import { useAppDispatch } from "../hooks.ts";
import { useEffect, useState } from "react";

export interface DataType {
  accessInfo: object;
  etag: string;
  id: string;
  kind: string;
  saleInfo: object;
  searchInfo: object;
  selfLink: string;
  volumeInfo: {
    authors: [string];
    categories: [string];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    maturityRating: string;
    pageCount: number;
    publishedDate: string;
    title: string;
  };
}

export const useSearch = ({
  searchInput,
  sort,
  filter,
}: {
  searchInput: string;
  sort: string;
  filter: string;
}) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchInput) return;
    setError(false);
    setLoading(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: searchInput,
          key: keyAPI,
          orderBy: sort,
          maxResults: 40,
        },
      })
      .then((response) => {
        let data = response.data.items;

        if (filter !== "All") {
          data = data
            .filter((data: DataType) => {
              return data.volumeInfo.categories !== undefined;
            })
            .filter((data: DataType) => {
              return data.volumeInfo.categories.includes(filter);
            });
          dispatch(changeBooks(data));
          dispatch(changeTotalBooks(data.length));
        }
        dispatch(changeBooks(data));
        dispatch(changeTotalBooks(response.data.totalItems));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchInput, sort, filter]);

  return { error, loading };
};
