import { Dock, Sailboat, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Section1 = () => {
  const [Cards, setCards] = useState([
    {
      icon: <Star size={50} />,
      h2Value: "Serving Since 2012",
      pValue:
        "Over a decade of guiding guests toward balance, beauty, and inner space.",
      linkVal: "About Us",
      bord: "1px solid #999",
    },
    {
      icon: <Dock size={50} />,
      h2Value: "Trusted by Thousands",
      pValue: "We offer high quality services. Check out clients testimonials!",
      linkVal: "View Reviews",
      bord: "1px solid #999",
    },
    {
      icon: <Sailboat size={50} />,
      h2Value: "Convenient Locations",
      pValue:
        "Our tranquill retreats are thoughtfully placed for ease, access, and security.",
      linkVal: "Read More",
      bord: "1px solid #ff00",
    },
  ]);

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="flex pt-[5%] pb-[5%] justify-center bg-white items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase text-center">
              Welcome to Tania Salon & Spa
            </p>
            <h2 className="font-semibold xl:text-4xl [text-shadow:1px_1px_2px_#000] text-center">
              Complete Healing Experience
            </h2>
          </div>
          <div className="flex w-full flex-wrap sm:gap-y-6 md:gap-x-5 justify-center items-center h-fit">
            {Cards.map((Card, index) => (
              <>
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hiddenRight"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.3 }}
                  className="w-[100%] xl:w-[32%] md:w-[40%] flex flex-col gap-y-3 border-[#999] shadow-2xl justify-center items-center p-4"
                  // style={{ borderRight: `${Card.bord}` }}
                >
                  {Card.icon}
                  <h2 className="xl:text-2xl md:text-xl font-medium text-center">
                    {" "}
                    {Card.h2Value}{" "}
                  </h2>
                  <p className="xl:text-xl md:text-[14px] text-center xl:max-w-[600px] sm:max-w-[400px]">
                    {" "}
                    {Card.pValue}{" "}
                  </p>
                  <Link className="rounded-4xl hover:bg-red-500 hover:border-[#ff00] hover:text-white transition duration-300 w-fit h-fit pl-4 pr-4 pt-1 pb-1 xl:pt-2 xl:pb-2 border-2 xl:text-[15px] md:pt-1 md:pb-1 border-black">
                    {" "}
                    {Card.linkVal}{" "}
                  </Link>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
