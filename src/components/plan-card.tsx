import Image from "next/image";

type Props = {
  children: React.ReactNode;
  price: number;
  isSelected: boolean;
};

const PlanCard: React.FC<Props> = ({ children, price, isSelected }) => {
  return (
    <div
      className={`flex w-full max-w-sm flex-col items-center justify-between rounded-2xl border-2 ${isSelected ? `border-red-500` : `border-gray-300`}  bg-white px-[7vw] py-[2vh] shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:px-[3vw] sm:py-[1vw]`}
    >
      <Image
        src="/images/box-img.png"
        width={180}
        height={250}
        alt="Flowbite Logo"
      />

      {children}
      {price === 0 ? (
        <div className="mt-[10vh]">
          <span className="text-2xl font-bold tracking-tight">Free</span>
        </div>
      ) : (
        <div className="mt-[10vh] flex items-baseline text-gray-900 dark:text-white">
          <span className="text-2xl font-semibold">$</span>
          <span className="text-2xl font-extrabold tracking-tight">
            {price}
          </span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /mo
          </span>
        </div>
      )}

      <button
        type="button"
        className="mb-2 me-2 mt-5 inline-flex w-full justify-center rounded-full bg-red-600 py-3 text-center text-lg font-medium text-white sm:px-[3vw] sm:py-2.5"
      >
        Select
      </button>
    </div>
  );
};

export default PlanCard;
