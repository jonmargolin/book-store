import { useEffect, useState } from "react";
import BookList from "../components/book-list";
import CatalogButtons from "../components/catalog-buttons";
import PaginationControl from "../components/pagnationContril";
import SearchBox from "../components/searchBox";
import Modal from "react-modal";
import { customStyles } from "../const/const";
import BookModalBody from "../components/bookModal/bookModalBody";
import useGetBook from "../hooks/useGetBooks";
import { useBookDataContext } from "../contexts/bookContext";
import useBookData from "../hooks/useBookData";
import CatalogHeader from "../components/catalogHeader";
import { ToastContainer, toast } from "react-toastify";
import useDebounce from "../hooks/useDebouncedInput";
import Loader from "../components/lodaer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./../store/store";
import { addBook } from "../store/booksSlice";
const Catalog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { mutate: mutateBooks, isLoading } = useGetBook();
  const dispatch: AppDispatch = useDispatch();
  const { params, page, totalItems, category, selectedBook } = useBookData();
  const { dispatch: contextDispatch } = useBookDataContext();
  const updateSelectedBookItem = (id: string) => {
    contextDispatch({
      type: "UPDATE_SELECTED_ID",
      payload: { selectedId: id },
    });
    setModalOpen(true);
  };
  const handelPagniationChnage = (
    pagination: { value: number; label: string }[],
  ) => {
    const maxResults = pagination[0].value;
    contextDispatch({ type: "UPDATE_PAGINATION", payload: { maxResults } });
    mutateBooks(
      { ...params, maxResults },
      {
        onSuccess: (data) =>
          contextDispatch({ type: "UPDATE_DATA", payload: data.data }),
        onError: (err) => handelError(err.message),
      },
    );
  };
  const handePageChange = (direction: number) => {
    const nextPage = page.ofSet + page.limit;
    const prevPage = page.ofSet - page.limit;
    if (prevPage >= 0 && direction === 0) {
      contextDispatch({
        type: "UPDATE_PAGE_POSITION",
        payload: { startIndex: prevPage },
      });
      mutateBooks(
        { ...params, ...{ startIndex: prevPage } },
        {
          onSuccess: (data) =>
            contextDispatch({ type: "UPDATE_DATA", payload: data.data }),
          onError: (err) => handelError(err.message),
        },
      );
    }
    if (nextPage < totalItems && direction === 1) {
      contextDispatch({
        type: "UPDATE_PAGE_POSITION",
        payload: { startIndex: nextPage },
      });
      mutateBooks(
        { ...params, ...{ startIndex: nextPage } },
        {
          onSuccess: (data) =>
            contextDispatch({ type: "UPDATE_DATA", payload: data.data }),
          onError: (err) => handelError(err.message),
        },
      );
    }
  };

  const handleSearch = useDebounce(() => {}, 500);
  const handleChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Debounce the search callback
    handleSearch(value);
  };
  const cleartSerachTerm = () => {
    if (searchTerm) {
      setSearchTerm("");
    }
  };
  const addBookToCart = () => {
    if (selectedBook) {
      dispatch(addBook(selectedBook));
      setModalOpen(false);
      return;
    }
    handelError("book not found");
  };
  const handelError = (err = "opps something is get wrong") => {
    toast.error(err, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    try {
      mutateBooks(
        { ...params },
        {
          onSuccess: (data) =>
            contextDispatch({ type: "UPDATE_DATA", payload: data.data }),
          onError: (err) => handelError(err.message),
        },
      );
    } catch (error) {
      console.log(error);
      handelError();
    }
  }, [category]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex flex-col items-start">
        <CatalogHeader />
        <div className="flex w-full my-1.5">
          <SearchBox
            value={searchTerm}
            onChange={handleChange}
            onClick={() => cleartSerachTerm()}
          />
          <PaginationControl onChange={handelPagniationChnage} />
        </div>
      </div>

      <BookList searchItem={searchTerm} onclick={updateSelectedBookItem} />
      <CatalogButtons onClick={handePageChange} />
      <Modal isOpen={isModalOpen} style={customStyles} ariaHideApp={false}>
        <BookModalBody
          closeModal={() => setModalOpen(false)}
          addBook={() => addBookToCart()}
        />
      </Modal>
      <ToastContainer />
    </main>
  );
};

export default Catalog;
