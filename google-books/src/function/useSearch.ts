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
    setLoading(true);
    if (!searchInput) return;
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
        console.log(response);
        const data = response.data.items;

        let filteredData: Array<object> = [];
        if (filter !== "All") {
          filteredData.push(
            data
              .filter((data: DataType) => {
                return data.volumeInfo.categories !== undefined;
              })
              .filter((data: DataType) => {
                return data.volumeInfo.categories.includes(filter);
              })
          );
        }

        if (filteredData.length === 0) {
          dispatch(changeBooks(data));
          dispatch(changeTotalBooks(response.data.totalItems));
        } else {
          dispatch(changeBooks(filteredData));
          dispatch(changeTotalBooks(response.data.totalItems));
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error.message + error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchInput, sort, filter]);

  return { loading, error };
};
