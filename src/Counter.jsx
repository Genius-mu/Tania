import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2, title, xp, sign }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // set to true if you want it to animate only once
    threshold: 0.5, // triggers when 50% of element is visible
  });

  return (
    <div className="flex flex-col w-full xl:w-[24%] md:w-[24%] h-[10em] bg-white shadow-xl rounded-2xl justify-center items-center ">
      <h2 className="text-4xl font-bold text-red-500 flex items-baseline">
        <CountUp start={0} end={end} duration={duration}>
          {({ countUpRef }) => (
            <>
              <span
                ref={countUpRef}
                className="text-4xl font-bold text-red-500 md:text-3xl"
              />
              <span className="ml-1 text-4xl font-bold text-red-500 md:text-2xl">{sign}</span>
              <span className="text-4xl font-bold text-red-500 md:text-2xl">{xp}</span>
            </>
          )}
        </CountUp>
      </h2>
      <p className="text-gray-600 text-[15px] font-medium md:text-[13px] text-center sm:text-[12px]">{title}</p>
    </div>
  );
};

export default Counter;
