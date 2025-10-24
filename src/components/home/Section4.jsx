import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

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
          <div className="flex md:gap-x-4 xl:justify-between items-center w-full">
            {Cards3.map((Card3, i) => (
              <>
                <div className="xl:w-[30%] p-6 h-[30em] rounded-2xl flex flex-col gap-y-[1.5em] bg-black/6 shadow-xl">
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
                  <div className="flex xl:justify-between items-center">
                    <span className="flex gap-x-[10px]">
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white pl-3 pr-3 pt-[10px] pb-[10px] rounded-[50%]">
                        <Facebook
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white pl-3 pr-3 pt-[10px] pb-[10px] rounded-[50%]">
                        <Twitter
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                      <Link className="bg-red-600 shadow-xl hover:bg-red-700 transition duration-300 text-white pl-3 pr-3 pt-[10px] pb-[10px] rounded-[50%]">
                        <Linkedin
                          fill="#fff"
                          size={15}
                          strokeWidth={0}
                          className=""
                        />
                      </Link>
                    </span>
                    <span className="flex gap-x-[10px]">
                      <Link className="bg-transparent border-1 md:text-[14px] md:px-3 border-red-500 hover:bg-red-600 hover:text-white transition duration-300 text-black pl-7 pr-7 pt-[8px] pb-[8px] rounded-3xl">
                        Open Profile
                      </Link>
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
