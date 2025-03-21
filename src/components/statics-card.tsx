import Image from "next/image";

const StaticsCard = () => {
  return (
    <div className="flex max-w-xl justify-around gap-[5vw] rounded-2xl bg-white p-4 shadow-xl sm:max-w-4xl sm:p-9">
      <div className="flex items-center gap-1 border-r border-gray-200 pr-4 sm:gap-5 sm:pr-10">
        <div>
          <Image
            src="/icons/person-icon.png"
            width={40}
            height={45}
            className="h-7 w-5 sm:h-12 sm:w-10 md:h-14 md:w-12 lg:h-16 lg:w-14"
            alt="Illustration11"
          />
        </div>
        <div>
          <p className="font-bold">90+</p>
          <p className="text-gray-500">Users</p>
        </div>
      </div>
      <div className="flex items-center gap-1 border-r border-gray-200 pr-4 sm:gap-5 sm:pr-10">
        <div>
          <Image
            src="/icons/location-icon.png"
            width={40}
            height={45}
            className="h-7 w-5 sm:h-12 sm:w-10 md:h-14 md:w-12 lg:h-16 lg:w-14"
            alt="Illustration11"
          />
        </div>
        <div>
          <p className="font-bold">30+</p>
          <p className="text-gray-500">Locations</p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-5 ">
        <div>
          <Image
            src="/icons/connection-icon.png"
            width={40}
            height={45}
            className="h-7 w-5 sm:h-12 sm:w-10 md:h-14 md:w-12 lg:h-16 lg:w-14"
            alt="Illustration11"
          />
        </div>
        <div>
          <p className="font-bold">50+</p>
          <p className="text-gray-500">Servers</p>
        </div>
      </div>
    </div>
  );
};

export default StaticsCard;
