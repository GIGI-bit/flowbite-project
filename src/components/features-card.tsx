import Image from "next/image";

const FeaturesCard = () => {
  return (
    <div className="w-full max-w-md rounded-lg p-4">
      <h5 className="mb-4 text-4xl font-bold">
        We provide many features you can use
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      <ul role="list" className="my-7 space-y-5">
        <li className="flex items-center">
          <Image
            src="/icons/tick-circle.png"
            width={18}
            height={25}
            alt="Flowbite Logo"
          />
          <span className="ms-3 text-base font-bold leading-tight">
            Powerfull online protection.
          </span>
        </li>
        <li className="flex">
          <Image
            src="/icons/tick-circle.png"
            width={18}
            height={25}
            alt="Flowbite Logo"
          />
          <span className="ms-3 text-base font-bold leading-tight">
            Internet with borders
          </span>
        </li>
        <li className="flex">
          <Image
            src="/icons/tick-circle.png"
            width={18}
            height={25}
            alt="Flowbite Logo"
          />
          <span className="ms-3 text-base font-bold leading-tight">
            Supercharged VPN
          </span>
        </li>
        <li className="flex">
          <Image
            src="/icons/tick-circle.png"
            width={18}
            height={25}
            alt="Flowbite Logo"
          />
          <span className="ms-3 text-base font-bold leading-tight">
            No specific time limits
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesCard;
