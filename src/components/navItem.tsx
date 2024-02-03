import {ReactComponent as BookIcon} from "../assets/bookIcon.svg";
interface NavItemProps{
    text: string
    onClick: () => void
}
const NavItem = ({text, onClick}:NavItemProps) => {
    return (
        <a
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="#"
        onClick={onClick}
      >
       <BookIcon />
        {text}
        </a>
    );
};

export default NavItem;