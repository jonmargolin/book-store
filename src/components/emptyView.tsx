interface EmptyViewProps {
  text: string;
}
const EmptyView = ({ text }: EmptyViewProps) => {
  return (
    <div className="min-h-[500px] w-full flex justify-center items-center ">
      <div>
        <h1 className="text-2xl font-bold">{text} </h1>
      </div>
    </div>
  );
};

export default EmptyView;
