import BookItem from "./bookItem";
import useBookData from "../hooks/useBookData";
import { useMemo } from "react";
import EmptyView from "./emptyView";

interface BookList {
  onclick: (id: string) => void;
  searchItem: string | null;
}
const BookList = ({ onclick, searchItem }: BookList) => {
  const { items } = useBookData();
  const listOfBook = useMemo(() => {
    if (searchItem === "" && items) {
      return items;
    }
    if (searchItem) {
      return items.filter((item) => item.title.includes(searchItem));
    }
    return [];
  }, [items, searchItem]);

  const createBookList = () => {
    const list = listOfBook.map((book, index) => {
      return (
        <BookItem
          key={`book${book.title}${index}`}
          title={book.title}
          authors={book.authors}
          img={book?.img}
          id={book.id}
          onClick={onclick}
        />
      );
    });
    if (list.length > 0) {
      return list;
    }
    return <EmptyView text={"No books found..."} />;
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-[68vh]">
      {createBookList()}
    </div>
  );
};

export default BookList;
