import {
  FileQuestionMark,
  FlameKindling,
  History,
  ReceiptPoundSterlingIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Section2 = () => {
  const [CardNum, setCardNum] = useState(0);
  const [Cards2, setCards2] = useState([
    [
      {
        icon: (
          <ReceiptPoundSterlingIcon
            size={30}
            strokeWidth={1}
            color="#fff"
            fill="red"
          />
        ),
        h2Val: "Blissful Renewal Day",
        pVal: "Finding solutions to complex needs",
        bgVal: "/images/mas2.jpg",
      },
      {
        icon: (
          <FileQuestionMark size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Inner Glow Detox",
        pVal: "Discovering the path to independence",
        bgVal: "/images/mas1.jpg",
      },
      {
        icon: <History size={30} strokeWidth={1} color="#fff" fill="red" />,
        h2Val: "Moon & Soul Ritual",
        pVal: "Restoring the skills to rebuild your life",
        bgVal: "/images/mas3.jpg",
      },
      {
        icon: (
          <FlameKindling size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Serenity Starter",
        pVal: "Recovering ability, mobility and more",
        bgVal: "/images/mas4.jpg",
      },
    ],
    [
      {
        icon: <History size={30} strokeWidth={1} color="#fff" fill="red" />,
        h2Val: "Eternal Calm Therapy",
        pVal: "A gentle escape that melts away the tension of busy days",
        bgVal: "/images/mas5.jpg",
      },
      {
        icon: (
          <FlameKindling size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Aroma Heat Revival",
        pVal: "Feel the warmth, scent, and serenity reconnect within you",
        bgVal: "/images/mas6.jpg",
      },
      {
        icon: (
          <ReceiptPoundSterlingIcon
            size={30}
            strokeWidth={1}
            color="#fff"
            fill="red"
          />
        ),
        h2Val: "Ocean Breeze Detox",
        pVal: "A salt-infused massage that purifies the skin and clears the mind",
        bgVal: "/images/mas7.jpg",
      },
      {
        icon: (
          <FileQuestionMark size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Golden Harmony Ritual",
        pVal: "A fusion of touch and aroma that restores emotional balance",
        bgVal: "/images/mas8.jpg",
      },
    ],
    [
      {
        icon: (
          <FlameKindling size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Celestial Stone Massage",
        pVal: "Hot basalt stones radiate warmth through your muscles for total renewal",
        bgVal: "/images/mas9.jpg",
      },
      {
        icon: <History size={30} strokeWidth={1} color="#fff" fill="red" />,
        h2Val: "Tranquil Mind Escape",
        pVal: "A soothing blend of scalp, neck, and shoulder massage to reset your mind",
        bgVal: "/images/mas10.jpg",
      },
      {
        icon: (
          <FileQuestionMark size={30} strokeWidth={1} color="#fff" fill="red" />
        ),
        h2Val: "Luxe Rejuvenation Ritual",
        pVal: "Full-body oil therapy that restores vitality and balance from within",
        bgVal: "/images/mas11.jpg",
      },
      {
        icon: (
          <ReceiptPoundSterlingIcon
            size={30}
            strokeWidth={1}
            color="#fff"
            fill="red"
          />
        ),
        h2Val: "Twilight Candle Therapy",
        pVal: "Warm candle oils and rhythmic touch for deep serenity and glowing skin",
        bgVal: "/images/mas12.jpg",
      },
    ],
  ]);

  const handlePrev = () => {
    setCardNum((prev) => (prev === 0 ? Cards2.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCardNum((prev) => (prev === Cards2.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              WELLNESS PACKAGES
            </p>
            <h2 className="font-semibold xl:text-4xl [text-shadow:1px_1px_2px_#000]">
              Tailored Wellness Experiences
            </h2>
          </div>
          <div className="flex xl:flex gap-x-4 w-full flex-wrap md:grid md:grid-cols-2 gap-y-5 h-fit justify-center items-center">
            {Cards2[CardNum].map((card, i) => (
              <div
                key={i}
                className="flex flex-col xl:p-6 md:p-4 sm:p-3 sm:shadow-xl sm:rounded-2xl sm:w-[48%] md:w-[100%] justify-end md:rounded-2xl xl:rounded-4xl xl:w-[24%] h-[27em] w-full p-5 rounded-2xl"
                style={{
                  backgroundImage: `url(${card.bgVal})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="flex flex-col gap-y-4">
                  {card.icon}
                  <h2 className="text-white xl:text-xl font-semibold [text-shadow:1px_1px_1px_#000] md:text-[15px]">
                    {card.h2Val}
                  </h2>
                  <p className="text-white xl:text-[15px] md:text-[13px] leading-[20px] [text-shadow:1px_1px_2px_#000]">
                    {card.pVal}
                  </p>
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between">
            <Link
              to=""
              className="flex pl-5 pr-5 pt-2 pb-2 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-700 transition duration-300"
              onClick={handlePrev}
            >
              {"<"}
            </Link>
            <Link
              to=""
              className="flex pl-5 pr-5 pt-2 pb-2 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-700 transition duration-300"
              onClick={handleNext}
            >
              {">"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
