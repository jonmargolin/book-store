import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Input from "./input";
interface SearchProps {
  onChange: (event: { target: { value: string } }) => void;
  value: string;
  onClick: () => void;
}
const SearchBox = ({ onChange, value, onClick }: SearchProps) => {
  return (
    <div className="w-full">
      <SearchIcon />

      <Input
        placeholder="Search books..."
        type="search"
        onChange={onChange}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default SearchBox;
