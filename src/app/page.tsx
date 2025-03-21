"use client";
import StartedCard from "../components/started-card";
import Image from "next/image";
import StaticsCard from "../components/statics-card";
import FeaturesCard from "../components/features-card";
import PlanContainer from "../components/plan-container";
import CustomersContainer from "../components/customers-container";
import SubscribeCard from "../components/subscribe-card";
import FooterComponent from "../components/footer-component";

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto flex w-full flex-col justify-between sm:max-w-screen-xl sm:p-4">
        <nav className="border-gray-200 bg-white ">
          <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/images/VPNlogo.png"
                className="h-8"
                width={150}
                height={20}
                alt="Flowbite Logo"
              />
            </a>
            {/* <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
            <div className="mx-auto hidden w-full" id="navbar-default">
              <ul className="mt-4 flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
                <li>
                  <a
                    href="#"
                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="items-center">
              <button
                type="button"
                className="mb-2 me-2 rounded-full bg-white px-5 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Sign in
              </button>
              <button
                type="button"
                className="mb-2 me-2 rounded-full border-4 border-red-500 bg-white px-5 py-2.5 text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100 dark:border-red-600 dark:bg-red-500 dark:text-white dark:hover:border-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700"
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>
        <section className="mt-14 flex flex-col justify-between  sm:flex-row-reverse">
          <Image
            src="/images/Illustration11.png"
            width={550}
            height={820}
            alt="Illustration11"
          />
          <StartedCard></StartedCard>
        </section>
        <section className="mt-16 flex items-center justify-center">
          <StaticsCard></StaticsCard>
        </section>
        <section className="mt-14 flex flex-col justify-between sm:flex-row">
          <Image
            src="/images/Illustration12.png"
            width={550}
            height={820}
            alt="Illustration12"
          />
          <FeaturesCard></FeaturesCard>
        </section>
        <section className="mt-16 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold dark:text-white">
            Choose your plan
          </h3>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 sm:w-[25vw]">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <PlanContainer></PlanContainer>
        </section>
        <section className="mt-16 flex flex-col items-center justify-center">
          <h3 className="w-[90vw] text-center text-3xl font-bold dark:text-white sm:w-[15vw]">
            Huge global network of fast VPN
          </h3>

          <p className="mt-6 w-full text-center text-gray-500 dark:text-gray-400 sm:w-[25vw]">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <Image
            src="/images/map.png"
            className="mt-[7vh]"
            width={1150}
            height={1220}
            alt="Illustration12"
          />
          <Image
            src="/images/Sponsored.png"
            className="mt-[7vh]"
            width={1150}
            height={1220}
            alt="Illustration12"
          />
        </section>
        <section className="mt-16 flex flex-col items-center justify-center">
          <h3 className="text-center text-3xl font-bold dark:text-white sm:w-[17vw]">
            Trusted by thousands of happy customer
          </h3>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 sm:w-[25vw]">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <CustomersContainer></CustomersContainer>
        </section>
        <section className="relative bottom-[5vh] flex flex-col items-center justify-center sm:mt-16">
          <SubscribeCard></SubscribeCard>
        </section>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}
