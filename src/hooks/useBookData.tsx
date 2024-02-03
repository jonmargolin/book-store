import { useBookDataContext } from "../contexts/bookContext";

const useBookData = () => {
  const { state } = useBookDataContext();

  return {
    items: state.items,
    params: {
      q: state.category,
      startIndex: state?.startIndex,
      maxResults: state?.maxResults,
    },
    selectedBook: state.items.find((item) => item.id === state.selectedId),
    page: { ofSet: state.startIndex, limit: state.maxResults },
    totalItems: state.totalItems,
    category: state.category,
  };
};
export default useBookData;
