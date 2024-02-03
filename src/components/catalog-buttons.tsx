
import Button from './button';
interface CatalogButtonsProps {
    onClick:(direct: number) => void
}
const CatalogButtons = ({onClick}: CatalogButtonsProps) => {
    return (
        <div className="flex items-center justify-start mt-4">
            <div className='min-w-[100px] me-1'>
            <Button text='Previous' onclick={() => onClick(0)  } />
            </div>
            <div className='min-w-[100px] me-1'>
   <Button text='Next' onclick={onClick} />
   </div>
    
      </div>
    );
};

export default CatalogButtons;