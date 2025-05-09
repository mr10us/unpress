import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Spinner } from "../Spinner/Spinner";

export const ProgressBlock = () => {
  return (
    <div className="grid justify-items-center w-full">
      <Spinner />
      <p className="text-gray-100 text-xl sm:text-2xl font-semibold mb-10 mt-5">Generating news...</p>
      <ProgressBar />
    </div>
  );
};
