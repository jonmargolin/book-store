
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, selectAllBooks } from '../../store/booksSlice';
import CartItemList from './cartItemList';
import { AppDispatch } from '../../store/store';
interface CartModalProps{
    onclose: () => void;
}
const CartModal = ({onclose}:CartModalProps) => {
    const books = useSelector(selectAllBooks);
    const dispatch : AppDispatch = useDispatch(); 

     const removeBookFromCart =(id: string)=>{
      if (id){
        dispatch(removeBook(id))
      }
     }
    return (
        <div>
            <div className='flex item-start justify-between'>
                <h3> Total Item:{books?.length}</h3>
                <div className='p-2 hover:cursor-pointer' onClick={onclose}> x</div>
            </div>
            <CartItemList books={books} onClick={(id) => removeBookFromCart(id)} />
        </div>
    );
};

export default CartModal;