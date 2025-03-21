import PlanCard from "./plan-card";
import Image from "next/image";

const PlanContainer = () => {
  return (
    <div className="mt-[5vh] flex justify-between gap-10 sm:gap-7">
      <PlanCard price={0} isSelected={false}>
        <h6 className="mb-4 mt-10 text-xl font-semibold">Free</h6>
        <div>
          <ul
            role="list"
            className="mt-9 flex w-full flex-col flex-nowrap gap-5 space-y-5"
          >
            <li className="flex max-w-xl items-center">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Unlimited bandwitch
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Encrypted connection
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Yes trafic logs
              </span>
            </li>
          </ul>
        </div>
      </PlanCard>
      <PlanCard price={9} isSelected={false}>
        <h6 className="mb-4 mt-10 text-xl font-semibold">Standard Plan</h6>
        <div>
          <ul role="list" className="mt-9 flex flex-col gap-5 space-y-5">
            <li className="flex items-center">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Unlimited bandwitch
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Encrypted connection
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Yes trafic logs
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Works on all devices
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Connect anyware
              </span>
            </li>
          </ul>
        </div>
      </PlanCard>
      <PlanCard price={12} isSelected={true}>
        <h6 className="mb-4 mt-10 text-xl font-semibold">Premium Plan</h6>
        <div>
          <ul role="list" className="mt-9 flex flex-col gap-5 space-y-5">
            <li className="flex items-center">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Unlimited bandwitch
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Encrypted connection
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Yes trafic logs
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Works on all devices
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Connect anyware
              </span>
            </li>
            <li className="flex">
              <Image
                src="/icons/tick-circle.png"
                width={18}
                height={25}
                alt="Flowbite Logo"
              />
              <span className="ms-3 w-full truncate whitespace-nowrap text-base font-normal leading-tight text-gray-800 dark:text-gray-400">
                Get new features
              </span>
            </li>
          </ul>
        </div>
      </PlanCard>
    </div>
  );
};

export default PlanContainer;
