import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2, title, xp, sign }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // lowered from 0.3
    rootMargin: "0px 0px -50px 0px",
    fallbackInView: true,
  });

  const [startCount, setStartCount] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      setStartCount(true);
      hasAnimated.current = true;
    }
  }, [inView]);

  // Safety net: if observer hasn't fired after 1.5s (e.g. already in view on load), start anyway
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasAnimated.current) {
        setStartCount(true);
        hasAnimated.current = true;
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col w-full xl:w-[24%] md:w-[24%] h-[10em] bg-white shadow-xl rounded-2xl justify-center items-center transition-all duration-500 hover:scale-105"
    >
      <h2 className="text-4xl font-bold text-red-500 flex items-baseline">
        {startCount ? (
          <CountUp start={0} end={end} duration={duration}>
            {({ countUpRef }) => (
              <>
                <span
                  ref={countUpRef}
                  className="text-4xl font-bold text-red-500 md:text-3xl"
                />
                <span className="ml-1 text-4xl font-bold text-red-500 md:text-2xl">
                  {sign}
                </span>
                <span className="text-4xl font-bold text-red-500 md:text-2xl">
                  {xp}
                </span>
              </>
            )}
          </CountUp>
        ) : (
          <span className="text-4xl font-bold text-red-500 md:text-3xl">
            0{sign}
          </span>
        )}
      </h2>
      <p className="text-gray-600 text-[15px] font-medium md:text-[13px] text-center sm:text-[12px]">
        {title}
      </p>
    </div>
  );
};

export default Counter;
