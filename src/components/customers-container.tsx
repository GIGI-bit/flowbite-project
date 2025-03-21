import Image from "next/image";
import { useEffect } from "react";
import CustomerCard from "./customer-card";

const CustomersContainer = () => {
  // useEffect(() => {
  //   import("flowbite").then((flowbite) => {
  //     console.log("Flowbite initialized"); // Debugging
  //   });
  // }, []);
  return (
    // <div
    //   id="default-carousel"
    //   className="relative w-full"
    //   data-carousel="slide"
    // >
    //   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image
    //         src="/images/Illustration11.png"
    //         width={10}
    //         height={20}
    //         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image
    //         src="/images/Illustration11.png"
    //         width={10}
    //         height={20}
    //         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image
    //         src="/images/Illustration11.png"
    //         width={10}
    //         height={20}
    //         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image
    //         src="/images/Illustration11.png"
    //         width={10}
    //         height={20}
    //         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <Image
    //         src="/images/Illustration11.png"
    //         width={10}
    //         height={20}
    //         className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
    //         alt="..."
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
    //     <button
    //       type="button"
    //       className="size-3 rounded-full"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //       data-carousel-slide-to="0"
    //     ></button>
    //     <button
    //       type="button"
    //       className="size-3 rounded-full"
    //       aria-current="false"
    //       aria-label="Slide 2"
    //       data-carousel-slide-to="1"
    //     ></button>
    //     <button
    //       type="button"
    //       className="size-3 rounded-full"
    //       aria-current="false"
    //       aria-label="Slide 3"
    //       data-carousel-slide-to="2"
    //     ></button>
    //     <button
    //       type="button"
    //       className="size-3 rounded-full"
    //       aria-current="false"
    //       aria-label="Slide 4"
    //       data-carousel-slide-to="3"
    //     ></button>
    //     <button
    //       type="button"
    //       className="size-3 rounded-full"
    //       aria-current="false"
    //       aria-label="Slide 5"
    //       data-carousel-slide-to="4"
    //     ></button>
    //   </div>
    //   <button
    //     type="button"
    //     className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    //     data-carousel-prev
    //   >
    //     <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
    //       <svg
    //         className="size-4 text-white dark:text-gray-800 rtl:rotate-180"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 6 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M5 1 1 5l4 4"
    //         />
    //       </svg>
    //       <span className="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button
    //     type="button"
    //     className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    //     data-carousel-next
    //   >
    //     <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
    //       <svg
    //         className="size-4 text-white dark:text-gray-800 rtl:rotate-180"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 6 10"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="m1 9 4-4-4-4"
    //         />
    //       </svg>
    //       <span className="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>

    <div className="mt-10 flex gap-5 pb-[15vh]">
      <CustomerCard
        isSelected={true}
        user={{
          imgSrc: "/people/person-1.png",
          fullName: "Brooklyn Simmons",
          description:
            "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
        }}
      ></CustomerCard>
      <CustomerCard
        isSelected={false}
        user={{
          imgSrc: "/people/person-2.png",
          fullName: "Darlene Robertson",
          description:
            "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
        }}
      ></CustomerCard>
      <CustomerCard
        isSelected={false}
        user={{
          imgSrc: "/people/person-3.png",
          fullName: "Darrell Steward",
          description:
            "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
        }}
      ></CustomerCard>
    </div>
    // <Carousel>
    //   <CustomerCard
    //     isSelected={true}
    //     user={{
    //       imgSrc: "/people/person-1.png",
    //       fullName: "Brooklyn Simmons",
    //       description:
    //         "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
    //     }}
    //   ></CustomerCard>
    //   <CustomerCard
    //     isSelected={true}
    //     user={{
    //       imgSrc: "/people/person-1.png",
    //       fullName: "Brooklyn Simmons",
    //       description:
    //         "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
    //     }}
    //   ></CustomerCard>

    //   <CustomerCard
    //     isSelected={true}
    //     user={{
    //       imgSrc: "/people/person-1.png",
    //       fullName: "Brooklyn Simmons",
    //       description:
    //         "“wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.",
    //     }}
    //   ></CustomerCard>
    // </Carousel>
  );
};

export default CustomersContainer;
