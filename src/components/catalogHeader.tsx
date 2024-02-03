import useBookData from '../hooks/useBookData';

const CatalogHeader = () => {
    const{totalItems, category} = useBookData()
    return (
        <div className='flex flex-col'>
             <h1 className="font-semibold text-lg md:text-2xl">Catalog</h1>
             <div className='flex items-end ms-3'>
             <h3>{category}</h3>
             <h3 className='ms-3'>Total Items: {totalItems} </h3>
             </div>
         
        </div>
    );
};

export default CatalogHeader;