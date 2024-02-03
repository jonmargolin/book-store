import Select from "react-dropdown-select";

interface PaginationControlProps {
  onChange: (value: { value: number; label: string }[]) => void;
}
const PaginationControl = ({ onChange }: PaginationControlProps) => {
  const options: { value: number; label: string }[] = [
    {
      value: 10,
      label: "10",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 40,
      label: "40",
    },
  ];

  return (
    <div className="flex">
      <Select
        values={options}
        options={options}
        onChange={(values) => onChange(values)}
      />
    </div>
  );
};

export default PaginationControl;
