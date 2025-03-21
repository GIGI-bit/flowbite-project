import Image from "next/image";

type Props = {
  isSelected: boolean;
  user: {
    imgSrc: string;
    fullName: string;
    description: string;
  };
};

const CustomerCard: React.FC<Props> = ({ isSelected, user }) => {
  return (
    <div
      className={`w-full max-w-md rounded-3xl border ${isSelected ? `border-red-500` : `border-gray-200`}  bg-white px-7 py-4 shadow-sm`}
    >
      <div className="flex items-center gap-7 pb-5">
        <div>
          <Image
            className="mb-3 rounded-full shadow-lg"
            width={64}
            height={84}
            src={user.imgSrc}
            alt="Bonnie image"
          />
        </div>
        <div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.fullName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Warsaw,pland
          </span>
        </div>
        <div className="ml-5 flex gap-3">
          <p className="text-gray-500">4.5</p>
          <Image
            width={20}
            height={14}
            src="/icons/star.png"
            alt="Bonnie image"
          />
        </div>
      </div>

      <p className="text-left text-lg text-gray-500 dark:text-gray-400 rtl:text-right">
        {user.description}
      </p>
    </div>
  );
};

export default CustomerCard;
