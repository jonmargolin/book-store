// src/BookContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  useReducer,
} from "react";
import { Book } from "../types/sherTypes";

interface BookContextProps {
  items: Book[];
  selectedId: string;
  startIndex: number;
  maxResults: number;
  category: string;
  totalItems: number;
}

type BookContextAction =
  | { type: "UPDATE_DATA"; payload: Partial<BookContextProps> }
  | { type: "UPDATE_SELECTED_ID"; payload: { selectedId: string } }
  | { type: "UPDATE_PAGINATION"; payload: { maxResults: number } }
  | { type: "UPDATE_PAGE_POSITION"; payload: { startIndex: number } }
  | { type: "UPDATE_CATEGORY"; payload: { category: string } };
const initialState: BookContextProps = {
  items: [],
  selectedId: "",
  startIndex: 0,
  maxResults: 25,
  category: "cyber",
  totalItems: 0,
};

const reducer = (
  state: BookContextProps,
  action: BookContextAction,
): BookContextProps => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_SELECTED_ID":
      return { ...state, ...action.payload };
    case "UPDATE_PAGINATION":
      return { ...state, ...action.payload };

    case "UPDATE_PAGE_POSITION":
      return { ...state, ...action.payload };

    case "UPDATE_CATEGORY":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const BookContext = createContext<
  { state: BookContextProps; dispatch: Dispatch<BookContextAction> } | undefined
>(undefined);

const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

const useBookDataContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};

export { BookProvider, useBookDataContext };
