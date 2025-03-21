const SubscribeCard = () => {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-between rounded-[5vh] bg-white p-[20vw] shadow-2xl sm:absolute sm:mt-[10vh] sm:flex-row sm:gap-[25vw] sm:rounded-[1vw] sm:px-6 sm:py-10">
      <div className="mb-[7vh] sm:mb-0">
        <a href="#">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:w-[10vw] sm:text-left">
            Subscribe now for get special features!
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center rounded-[5vw] bg-red-700 px-[12vw] py-5 text-center text-lg font-medium text-white sm:rounded-[1vw] sm:px-8 "
        >
          Subscribe now
        </a>
      </div>
    </div>
  );
};

export default SubscribeCard;
