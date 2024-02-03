import axios, { AxiosResponse } from "axios";
import {
  ApiParams,
  Book,
  BookResponse,
  BooksVolumesResponse,
  Item,
} from "../types/sherTypes";

const baseUrl = import.meta.env.VITE_API_URL;

const mapBookItemToBook = (item: Item): Book => {
  const { id, volumeInfo } = item;
  return {
    id,
    title: volumeInfo.title,
    authors: volumeInfo.authors || [],
    description: volumeInfo.description || "",
    img: volumeInfo.imageLinks?.thumbnail || "",
  };
};
export const fetchBooks = async ({
  q,
  startIndex,
  maxResults,
}: ApiParams): Promise<AxiosResponse<BookResponse>> => {
  const apiUrl = `${baseUrl}volumes?q=${q}&startIndex=${startIndex}&maxResults=${maxResults}`;
  const response = await axios.get<BooksVolumesResponse>(apiUrl);

  const mappedData: BookResponse = {
    ...response.data,
    items: response.data.items.map(mapBookItemToBook),
  };

  return { ...response, data: mappedData };
};
