import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex items-center h-[100%] justify-center">
      <Audio height="80" width="80" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
