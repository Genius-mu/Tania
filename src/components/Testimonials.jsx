import {
  Quote,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [Featured] = useState([
    {
      name: "Sophia Reynolds",
      role: "Yoga Instructor",
      img: "/images/webp/user1.webp",
      bgImg: "/images/webp/mas5.webp",
      rating: 5,
      quote:
        "I've visited spas all over the world, and Tania's stands apart. The therapists don't just perform treatments — they listen, they sense, they respond. I left feeling like a different person.",
      treatment: "Royal Renewal Ritual",
    },
    {
      name: "Marcus Chen",
      role: "Software Engineer",
      img: "/images/webp/user2.webp",
      bgImg: "/images/webp/mas9.webp",
      rating: 5,
      quote:
        "After months of back pain from long hours at my desk, the Celestial Stone Therapy gave me relief I didn't think was possible. I've already booked three more sessions.",
      treatment: "Celestial Stone Therapy",
    },
    {
      name: "Amara & David",
      role: "Anniversary Visit",
      img: "/images/webp/user3.webp",
      bgImg: "/images/webp/mas12.webp",
      rating: 5,
      quote:
        "We came for our anniversary and left with something we didn't know we needed — time to actually be present together. The Twin Souls Escape was the most thoughtful gift we've ever given each other.",
      treatment: "Twin Souls Escape",
    },
  ]);

  const [Reviews] = useState([
    {
      name: "Eleanor Vasquez",
      role: "First-time Guest",
      img: "/images/webp/user1.webp",
      rating: 5,
      quote:
        "I was nervous as a first-timer, but the staff made me feel completely at ease. The Serenity Starter was the perfect introduction.",
      date: "2 weeks ago",
      service: "Serenity Starter",
    },
    {
      name: "James O'Connor",
      role: "Member",
      img: "/images/webp/user2.webp",
      rating: 5,
      quote:
        "Being a Devotee member has changed my month-to-month rhythm completely. Wellness isn't a luxury anymore — it's part of my routine.",
      date: "1 month ago",
      service: "Membership",
    },
    {
      name: "Priya Sharma",
      role: "Returning Guest",
      img: "/images/webp/user3.webp",
      rating: 5,
      quote:
        "The Inner Glow Detox left my skin radiant for weeks. The therapist explained every step and made me feel completely cared for.",
      date: "3 weeks ago",
      service: "Inner Glow Detox",
    },
    {
      name: "Thomas Wright",
      role: "Corporate Client",
      img: "/images/webp/user1.webp",
      rating: 5,
      quote:
        "Booked the Lunch Hour Reset between meetings — best decision of the week. Came back to work sharper than I've felt in months.",
      date: "1 week ago",
      service: "Lunch Hour Reset",
    },
    {
      name: "Isabella Romano",
      role: "Wellness Enthusiast",
      img: "/images/webp/user2.webp",
      rating: 5,
      quote:
        "Ocean Breeze Detox is something I'll keep coming back for. The salt scrub alone is worth the visit. Pure bliss.",
      date: "2 months ago",
      service: "Ocean Breeze Detox",
    },
    {
      name: "Daniel Kowalski",
      role: "Athlete",
      img: "/images/webp/user3.webp",
      rating: 4,
      quote:
        "As someone who pushes my body hard, the deep tissue work here has been invaluable for recovery. Highly recommend for active folks.",
      date: "5 weeks ago",
      service: "Celestial Stone Therapy",
    },
    {
      name: "Maria Fernandez",
      role: "New Mother",
      img: "/images/webp/user1.webp",
      rating: 5,
      quote:
        "First time I'd taken time for myself in nine months. I cried during the massage — happy tears. They truly understood.",
      date: "1 month ago",
      service: "Royal Renewal Ritual",
    },
    {
      name: "Robert Hayes",
      role: "Retired",
      img: "/images/webp/user2.webp",
      rating: 5,
      quote:
        "My wife gifted me a session for my birthday and I've been a regular ever since. The team feels like family now.",
      date: "3 months ago",
      service: "Tranquil Mind Escape",
    },
    {
      name: "Aisha Bello",
      role: "Entrepreneur",
      img: "/images/webp/user3.webp",
      rating: 5,
      quote:
        "Running a business is exhausting. The Aroma Heat Revival is my monthly non-negotiable. Pure restoration.",
      date: "2 weeks ago",
      service: "Aroma Heat Revival",
    },
  ]);

  const [Stats] = useState([
    {
      number: "1200+",
      label: "Happy Guests",
      icon: <Heart size={28} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      number: "98%",
      label: "5-Star Reviews",
      icon: <Star size={28} strokeWidth={1.5} color="#dc2626" fill="#dc2626" />,
    },
    {
      number: "12+",
      label: "Years of Trust",
      icon: <Sparkles size={28} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      number: "95%",
      label: "Return Rate",
      icon: <ThumbsUp size={28} strokeWidth={1.5} color="#dc2626" />,
    },
  ]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? Featured.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === Featured.length - 1 ? 0 : prev + 1));
  };

  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -80, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 80, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-fit pt-[30px] pb-[30px] flex justify-center items-center">
        <div
          className="p-[20px] w-[90%] h-[55vh] rounded-2xl flex sm:justify-center sm:items-center md:justify-start relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/images/webp/mas10.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-[3%] bg-white/60 backdrop-blur-sm h-fit xl:w-[40%] md:w-[60%] sm:w-[100%] md:shadow-2xl rounded-2xl flex flex-col gap-y-[10px]"
          >
            <p className="text-red-600 font-semibold uppercase text-sm">
              Voices of Our Guests
            </p>
            <h2 className="text-black font-bold sm:text-3xl xl:text-5xl text-2xl [text-shadow:1px_1px_2px_#fff]">
              Stories Written in Stillness.
            </h2>
            <p className="text-black/80 max-w-[500px]">
              The kindest words come from those who've felt the difference
              firsthand. Read what our guests have to say.
            </p>
            <div className="flex gap-x-[3%] mt-2">
              <Link
                to=""
                className="bg-red-600 flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit rounded-4xl text-white hover:bg-white hover:text-red-600 transition duration-300 text-[13px] shadow-xl"
              >
                Share Your Story
              </Link>
              <Link
                to=""
                className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit hover:bg-black hover:text-white transition duration-300 rounded-4xl shadow-xl text-black text-[13px]"
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="flex pt-[3%] pb-[3%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {Stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-y-2 p-5 bg-black/5 rounded-2xl"
              >
                <div className="bg-red-50 p-3 rounded-xl">{stat.icon}</div>
                <p className="font-bold xl:text-3xl text-2xl">{stat.number}</p>
                <p className="text-black/60 text-[13px] text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Featured Story
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center [text-shadow:1px_1px_2px_#000]">
              Real Words, Real Renewal
            </h2>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl flex xl:flex-row flex-col"
          >
            {/* Image side */}
            <div
              className="xl:w-[45%] w-full xl:h-auto h-[20em] relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${Featured[activeIndex].bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-red-600 font-semibold text-[12px] uppercase">
                  {Featured[activeIndex].treatment}
                </p>
              </div>
            </div>

            {/* Content side */}
            <div className="xl:w-[55%] w-full bg-white p-8 xl:p-12 flex flex-col gap-y-5 justify-center">
              <Quote color="#dc2626" size={45} strokeWidth={1} />
              <div className="flex gap-x-1">
                {[...Array(Featured[activeIndex].rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={20}
                    fill="#dc2626"
                    strokeWidth={0}
                    color="#dc2626"
                  />
                ))}
              </div>
              <p className="xl:text-xl text-base italic text-black/80 leading-relaxed">
                "{Featured[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-x-4 pt-4 border-t border-black/10">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={Featured[activeIndex].img}
                    alt={Featured[activeIndex].name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-semibold xl:text-lg">
                    {Featured[activeIndex].name}
                  </h3>
                  <p className="text-red-600 font-semibold text-[13px]">
                    {Featured[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel controls */}
          <div className="w-full flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-white bg-red-500 hover:bg-red-700 transition duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-x-2">
              {Featured.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-red-600"
                      : "w-2 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-white bg-red-500 hover:bg-red-700 transition duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonial Block */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Hear Their Stories
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Watch Our Guests Share
            </h2>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
            {[
              {
                name: "Sophia R.",
                duration: "1:24",
                img: "/images/webp/mas2.webp",
              },
              {
                name: "Marcus C.",
                duration: "0:52",
                img: "/images/webp/mas7.webp",
              },
              {
                name: "Amara & David",
                duration: "2:10",
                img: "/images/webp/mas11.webp",
              },
            ].map((video, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden h-[20em] cursor-pointer group shadow-xl"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${video.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 group-hover:scale-110 group-hover:bg-red-600 transition duration-300">
                    <Play
                      size={28}
                      fill="#dc2626"
                      strokeWidth={0}
                      className="group-hover:fill-white transition duration-300 ml-1"
                    />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div>
                    <p className="text-white font-semibold [text-shadow:1px_1px_2px_#000]">
                      {video.name}
                    </p>
                    <p className="text-white/80 text-[12px] [text-shadow:1px_1px_2px_#000]">
                      Guest Story
                    </p>
                  </div>
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-full">
                    {video.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Wall */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">All Reviews</p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              A Wall of Gratitude
            </h2>
          </div>

          <div className="w-full columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
            {Reviews.map((review, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white shadow-xl rounded-2xl p-6 break-inside-avoid mb-5 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[15px]">
                        {review.name}
                      </h4>
                      <p className="text-black/50 text-[12px]">{review.role}</p>
                    </div>
                  </div>
                  <span className="text-black/40 text-[11px]">
                    {review.date}
                  </span>
                </div>
                <div className="flex gap-x-[2px] mb-3">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      fill="#dc2626"
                      strokeWidth={0}
                      color="#dc2626"
                    />
                  ))}
                </div>
                <p className="text-black/70 text-[14px] leading-relaxed mb-4">
                  "{review.quote}"
                </p>
                <div className="pt-3 border-t border-black/10">
                  <span className="bg-red-50 text-red-600 text-[11px] font-semibold px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to=""
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-7 py-3 rounded-full text-[13px] font-semibold shadow-xl mt-5"
          >
            Load More Reviews
          </Link>
        </div>
      </section>

      {/* External Platforms */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Trusted Across Platforms
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Loved Wherever Reviews Live
            </h2>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full">
            {[
              { platform: "Google", rating: "4.9", reviews: "847" },
              { platform: "TripAdvisor", rating: "5.0", reviews: "412" },
              { platform: "Yelp", rating: "4.8", reviews: "326" },
              { platform: "Facebook", rating: "4.9", reviews: "598" },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/5 rounded-2xl p-6 flex flex-col items-center gap-y-3 hover:bg-red-50 transition duration-300"
              >
                <h3 className="font-bold xl:text-xl">{p.platform}</h3>
                <div className="flex items-center gap-x-2">
                  <span className="font-bold xl:text-3xl text-2xl text-red-600">
                    {p.rating}
                  </span>
                  <div className="flex gap-x-[2px]">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        fill="#dc2626"
                        strokeWidth={0}
                        color="#dc2626"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-black/60 text-[13px]">
                  Based on {p.reviews} reviews
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <motion.div
          variants={fadeVariants}
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-[90%] rounded-2xl p-10 flex flex-col items-center gap-y-5 text-center relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.85), rgba(0,0,0,0.7)), url(/images/webp/mas8.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white/80 font-semibold uppercase text-sm">
            Your Story is Next
          </p>
          <h2 className="font-semibold xl:text-4xl text-2xl text-white max-w-[600px] [text-shadow:1px_1px_2px_#000]">
            Come Write Your Own Chapter
          </h2>
          <p className="text-white/90 max-w-[500px] xl:text-[16px] text-[14px]">
            Every name on this page once walked in for the first time. Your
            sanctuary is one booking away.
          </p>
          <div className="flex gap-x-3 mt-3 flex-wrap justify-center gap-y-3">
            <Link
              to=""
              className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit rounded-4xl text-red-600 hover:bg-black hover:text-white transition duration-300 text-[13px] shadow-xl font-semibold"
            >
              Book Your First Visit
            </Link>
            <Link
              to=""
              className="bg-transparent border-2 border-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit hover:bg-white hover:text-red-600 transition duration-300 rounded-4xl text-white text-[13px] font-semibold"
            >
              Leave a Review
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
