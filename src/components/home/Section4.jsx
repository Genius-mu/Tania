import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Section4 = () => {
  const [Cards3, setCards3] = useState([
    {
      h2Val: "Alex Hormozi",
      pVal: "Soft Tissue Therapist",
      imgVal: "/images/user1.jpg",
    },
    {
      h2Val: "Chris James",
      pVal: "Reflexology Therapist",
      imgVal: "/images/user2.jpg",
    },
    {
      h2Val: "Goslin Mane",
      pVal: "Massage Therapist",
      imgVal: "/images/user3.jpg",
    },
  ]);

  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.95 },
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
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              meet our team
            </p>
            <h2 className="font-semibold xl:text-4xl max-w-[400px] text-center [text-shadow:1px_1px_2px_#000]">
              The Healing Hands Behind Our Spa
            </h2>
          </div>
          <div className="flex md:gap-x-4 xl:flex-nowrap md:flex-nowrap gap-y-6 justify-center xl:justify-between sm:flex-wrap flex-wrap sm:justify-center sm:gap-y-5 sm:gap-x-5 items-center w-full">
            {Cards3.map((Card3, index) => (
              <>
                <motion.div
                  variants={fadeVariants}
                  initial={index % 2 === 0 ? "hiddenUp" : "hiddenLeft"}
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.25 }}
                  className="xl:w-[30%] p-6 h-[30em] rounded-2xl flex flex-col gap-y-[1.5em] bg-black/6 shadow-xl md:w-[40%] w-[90%]"
                >
                  <span className="flex flex-col">
                    <h2 className="text-black font-semibold xl:text-2xl">
                      {Card3.h2Val}
                    </h2>
                    <p className="text-red-500 font-semibold">{Card3.pVal}</p>
                  </span>
                  <div className="w-full h-[70%] rounded-2xl overflow-hidden">
                    <img
                      src={Card3.imgVal}
                      alt=""
                      className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="flex xl:justify-between md:justify-between items-center justify-between">
                    <span className="flex xl:gap-x-[10px] md:gap-x-[5px] gap-x-2">
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white pl-2 pr-2 pt-[7px] pb-[7px] md:pl-[7px] md:pr-[7px] md:pt-[5px] md:pb-[5px] xl:pl-3 xl:pr-3 xl:pt-[10px] xl:pb-[10px] rounded-[50%]">
                        <Facebook
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white pl-2 pr-2 pt-[7px] pb-[7px] md:pl-[7px] md:pr-[7px] md:pt-[5px] md:pb-[5px] xl:pl-3 xl:pr-3 xl:pt-[10px] xl:pb-[10px] rounded-[50%]">
                        <Twitter
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white md:pl-[7px] md:pr-[7px] md:pt-[5px] md:pb-[5px] xl:pl-3 xl:pr-3 xl:pt-[10px] xl:pb-[10px] rounded-[50%] pl-2 pr-2 pt-[7px] pb-[7px]">
                        <Linkedin
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                    </span>
                    <span className="flex gap-x-[10px]">
                      <Link className="bg-transparent border-1 md:text-[13px] md:px-3 border-red-500 hover:bg-red-600 hover:text-white transition duration-300 text-black xl:pl-7 xl:pr-7 xl:pt-[8px] xl:pb-[8px] pl-5 pr-5 pt-[5px] pb-[5px] md:pl-4 md:pr-4 md:pt-[7px] md:pb-[7px] rounded-3xl text-[13px]">
                        Open Profile
                      </Link>
                    </span>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
