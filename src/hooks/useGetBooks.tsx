import { AxiosResponse } from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { fetchBooks } from "../api/api";
import { ApiParams, BookResponse } from "../types/sherTypes";
const useBookSearch = (
  options?: UseMutationOptions<AxiosResponse<BookResponse>, Error, ApiParams>,
) => {
  return useMutation(fetchBooks, options);
};

export default useBookSearch;
