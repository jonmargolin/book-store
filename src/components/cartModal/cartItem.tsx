import notfound from '../../assets/notFound.png'
export interface CartItemProps{
    img:string
    title:string
    authors: string[]
    onClick: (id:string) => void
    id:string
}
const CartItem = ({img, title, authors, id, onClick}:CartItemProps) => {
    const loadImage = () =>{
        
            return img !== ''? img: notfound
       
       }
    return (
        <div className='flex justify-between m-3'>
            <div>
              <img 
          src={loadImage()}
          alt="Book 1"
          width="50"
          height="50"
          className="aspect-[2/3 w-[50px] h-[50px] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
        </div>
        <div>
        <h3 className="font-semibold">{title}</h3>
          <small className="text-sm leading-none text-gray-500 dark:text-gray-400">{authors.join('')}</small>
        </div>
        <div className='hover:cursor-pointer' onClick={() => onClick(id) }>X</div>
        </div>
    );
};

export default CartItem