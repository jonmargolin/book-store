

 interface InputProps {
    placeholder: string;
    type: string;
    onClick: (e:unknown) => void;
    onChange: (event: {target: { value: string}}) => void
    value: string
 }
const Input = ({placeholder, type, onClick, onChange, value}:InputProps) => {
    return (
        <input
        className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
        placeholder={placeholder}
        type={type}
        onClick={onClick}
        onChange={onChange}
        value={value}
      />
    );
};

export default Input;