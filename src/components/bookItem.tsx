import notfound from "../assets/notFound.png";
import { BookItemProps } from "../types/sherTypes";

const BookItem = ({ title, img, authors, onClick, id }: BookItemProps) => {
  const loadImage = () => {
    return img ? img : notfound;
  };
  return (
    <div className="relative group" onClick={() => onClick(id)}>
      <img
        src={loadImage()}
        alt="Book 1"
        width="200"
        height="300"
        className="aspect-[2/3 w-[200px] h-[300px] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
      />

      <div className="flex-1 py-4">
        <h3 className="font-semibold">{title}</h3>
        <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
          {authors?.join(" ")}
        </small>
      </div>
    </div>
  );
};

export default BookItem;
