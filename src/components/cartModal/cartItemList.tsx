import { Book } from "../../types/sherTypes";
import EmptyView from "../emptyView";
import CartItem from "./cartItem";

interface CartItemProps {
  books: Book[];
  onClick: (id: string) => void;
}
const CartItemList = ({ books, onClick }: CartItemProps) => {
  const cartItem = () => {
    if (books.length > 0) {
      return books.map((book) => {
        return (
          <CartItem
            img={book.img}
            authors={book.authors}
            title={book.title}
            onClick={onClick}
            id={book.id}
          />
        );
      });
    }
    return <EmptyView text={"Cart is empty..."} />;
  };
  return <div className="flex flex-col">{cartItem()}</div>;
};

export default CartItemList;
