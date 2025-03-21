const StartedCard = () => {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 ">
      <a href="#">
        <h2 className="mb-2 text-center text-4xl tracking-tight text-gray-900 dark:text-white sm:text-left sm:text-6xl">
          Want anything to be easy with
          <span className="text-3xl font-bold sm:text-6xl"> LaslesVPN</span>
        </h2>
      </a>
      <p className="mb-3 mt-12 text-center font-normal text-gray-700 dark:text-gray-400 sm:text-left">
        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id
        purus ullamcorper. Vel vel erat semper augue
      </p>
      <a
        href="#"
        className="mx-auto mt-10 inline-flex items-center rounded-2xl bg-red-600 px-11 py-3 text-center text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Get Started
      </a>
    </div>
  );
};

export default StartedCard;
