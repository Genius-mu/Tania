import { useEffect, useRef, useState } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2, title, xp, sign }) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    fallbackInView: true,
  });

  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  const { start } = useCountUp({
    ref: countRef,
    start: 0,
    end,
    duration,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      start();
      hasAnimated.current = true;
    }
  }, [inView, start]);

  // Safety net for elements already in view on load
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasAnimated.current) {
        start();
        hasAnimated.current = true;
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [start]);

  return (
    <div
      ref={inViewRef}
      className="flex flex-col w-full xl:w-[24%] md:w-[24%] h-[10em] bg-white shadow-xl rounded-2xl justify-center items-center transition-all duration-500 hover:scale-105"
    >
      <h2 className="text-4xl font-bold text-red-500 flex items-baseline">
        <span
          ref={countRef}
          className="text-4xl font-bold text-red-500 md:text-3xl"
        >
          0
        </span>
        <span className="ml-1 text-4xl font-bold text-red-500 md:text-2xl">
          {sign}
        </span>
        {xp && (
          <span className="text-4xl font-bold text-red-500 md:text-2xl">
            {xp}
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
