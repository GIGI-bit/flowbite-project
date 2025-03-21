import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-200 px-3 py-5 sm:px-[27vw] sm:pt-[10vh]">
      <div className="mx-auto w-full max-w-screen-xl sm:p-4 sm:py-6 lg:py-8">
        <div className="flex flex-col-reverse sm:flex-col md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/VPNlogo.png"
              // className="mt-[7vh]"
              width={150}
              height={220}
              alt="Illustration12"
            />
            {/* <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Flowbite
              </span>
            </a> */}
            <p className="mt-5 text-center text-gray-600 sm:w-[15vw] sm:text-left">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
              arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
            <div className="mt-7 flex gap-5">
              <Image
                src="/icons/fb.png"
                // className="mt-[7vh]"
                width={50}
                height={70}
                alt="Illustration12"
              />
              <Image
                src="/icons/whatsapp.png"
                // className="mt-[7vh]"
                width={50}
                height={70}
                alt="Illustration12"
              />
              <Image
                src="/icons/youtube.png"
                // className="mt-[7vh]"
                width={50}
                height={70}
                alt="Illustration12"
              />
            </div>
          </div>
          <div className="mb-7 flex w-full gap-7 sm:mb-0 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-[3vw] font-semibold uppercase text-gray-900 dark:text-white sm:text-sm">
                Product
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Download
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Server
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Countries
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Engage
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    LaslesVPN?
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Tutorials
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Earn money
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Become partner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
};

export default FooterComponent;
