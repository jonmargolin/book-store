

import notfound from '../../assets/notFound.png'
import useBookData from '../../hooks/useBookData';
import Button from '../button';

interface BookModalBodyProps{
    closeModal:() => void
    addBook:() => void
}
const BookModalBody = ({closeModal, addBook}:BookModalBodyProps) => {
    const{selectedBook} = useBookData()
    
    const loadImage = () =>{
        if(selectedBook){
            return selectedBook.img !== ''? selectedBook.img: notfound
        }
       
       }
    return (
        <div className='flex flex-col'>
            <div className='p-2 hover:cursor-pointer' onClick={closeModal}> x</div>
        <div className='flex items-end' >
            
            <div className='w-full max-w-[150px] max-h-[250px] me-3 flex flex-col'>
              <img 
          src={loadImage()}
          alt="Book 1"
          width="100"
          height="200"
          className="aspect-[2/3 w-[200px] h-[300px] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
        <div className='flex mt-5'>
        <Button text={"Add to cart"} onclick={ addBook}/>
        </div>
             
</div>        
      
        <div className="flex w-full  flex-col py-4">
          <h3 className="font-semibold">{selectedBook?.title}</h3>
          <small className="text-sm leading-none text-gray-500 dark:text-gray-400">{selectedBook?.authors}</small>
          <div className='overflow-y-auto max-h-[200px]'>
          {selectedBook?.description}
          </div>
         
        </div>
  
        </div>
        </div>
    );
};

export default BookModalBody;