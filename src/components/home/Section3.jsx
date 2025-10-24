import Counter from "../../Counter";

const Section3 = () => {
  return (
    <>
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              PROOF OF AUTHENTICITY
            </p>
            <h2 className="font-semibold xl:text-4xl [text-shadow:1px_1px_2px_#000]">
              Numbers Speak
            </h2>
          </div>
          <div className="w-full flex flex-col gap-y-5 xl:flex h-fit xl:justify-between md:flex md:flex-row sm:grid sm:gap-y-5 gap-x-5 sm:grid-cols-2 md:justify-between items-center">
            <Counter
              end={1200}
              sign={"+"}
              title="Relaxed & Rejuvenated Guests"
            />
            <Counter
              end={10}
              sign={"+"}
              xp={"Years"}
              title="of wellness & Spa Experience"
            />
            <Counter end={95} sign={"%"} title="client Satisfaction Rate" />
            <Counter end={98} sign={"%"} title="Return for a Second Visit" />
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default Section3;
