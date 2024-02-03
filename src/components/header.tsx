
import IconButton from './icon-button';
import { ReactComponent as ShopingCartIcon } from "../assets/shopingCart.svg";
import {ReactComponent as LogIcon} from "../assets/logo.svg";
import Logo from './logo';
interface HeaderProps{
  onClick : () => void
}
const Header = ({onClick}:HeaderProps) => {
    return (
        <div className="flex h-[60px] items-center border-b px-6">
       <Logo text='Book store' icon={<LogIcon />} />
      <IconButton text='Shoping cart' onClick={onClick} icon={<ShopingCartIcon />} /> 
      </div>
    );
};

export default Header;