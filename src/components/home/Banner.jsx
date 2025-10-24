import { Link } from "react-router";

const Banner = () => (
  <section className="w-full h-fit pt-[30px] pb-[30px] flex justify-center items-center">
    <div className="cont1 p-[20px] w-[90%] h-full rounded-2xl flex sm:justify-center sm:items-center md:justify-start">
      <div className="p-[3%] bg-white/50 h-full xl:w-[32%] md:w-[56%] md:shadow-2xl sm:w-[100%] rounded-2xl flex flex-col gap-y-[10px]">
        <h2 className="text-black text-5xl font-bold max-w-[280px] sm:max-w-[100%] sm:text-3xl text-xl">
          Find Balance in Every Moment.
        </h2>
        <p>
          Relax, heal, and renew with natural treatments that nurture your body
          and calm your mind.
        </p>
        <div className="flex gap-x-[3%]">
          <Link
            to=""
            className="bgClr flex whitespace-nowrap h-fit pt-[3%] pb-[3%] pr-[20px] pl-[20px] w-fit rounded-4xl text-white shadow-3xl ring-gray-900/5 hover:bg-white hover:text-black shadow-xl transition duration-300 sm:pt-2 sm:pb-2 text-[13px]"
          >
            Explore Service
          </Link>
          <Link
            to=""
            className="bg-white flex whitespace-nowrap h-fit pt-[3%] pb-[3%] pr-[20px] pl-[20px] w-fit sm:pt-2 sm:pb-2 hover:bg-red-600 hover:text-white transition duration-300 rounded-4xl shadow-xl text-black text-[13px]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
