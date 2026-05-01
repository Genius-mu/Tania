import {
  Leaf,
  Heart,
  Sparkles,
  Award,
  Users,
  Clock,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const About = () => {
  const [Values] = useState([
    {
      icon: <Leaf size={40} strokeWidth={1.5} color="#dc2626" />,
      h2Val: "Natural & Pure",
      pVal: "We use only natural, organic, and ethically sourced ingredients in every treatment we offer.",
    },
    {
      icon: <Heart size={40} strokeWidth={1.5} color="#dc2626" />,
      h2Val: "Compassionate Care",
      pVal: "Every guest is treated with warmth, attention, and a genuine commitment to their wellbeing.",
    },
    {
      icon: <Sparkles size={40} strokeWidth={1.5} color="#dc2626" />,
      h2Val: "Mindful Luxury",
      pVal: "Refined experiences crafted with intention, where every detail nurtures body and spirit.",
    },
    {
      icon: <Award size={40} strokeWidth={1.5} color="#dc2626" />,
      h2Val: "Proven Excellence",
      pVal: "Certified therapists, trusted methods, and years of expertise behind every session.",
    },
  ]);

  const [Milestones] = useState([
    {
      year: "2012",
      title: "The Beginning",
      desc: "Tania Salon & Spa opened its doors with a single treatment room and a vision for holistic wellness.",
    },
    {
      year: "2015",
      title: "Growing Family",
      desc: "Expanded our team with certified therapists and introduced signature wellness rituals.",
    },
    {
      year: "2019",
      title: "Award Recognition",
      desc: "Recognized as one of the top wellness destinations for our innovative therapy programs.",
    },
    {
      year: "2024",
      title: "A New Sanctuary",
      desc: "Today, we welcome thousands of guests yearly into our reimagined sanctuary of calm.",
    },
  ]);

  const [Promises] = useState([
    "Hand-picked, certified wellness therapists",
    "Organic and ethically sourced products only",
    "Personalized treatments tailored to your needs",
    "Tranquil, hygienic, and serene environments",
    "Transparent pricing with no hidden surprises",
    "A judgment-free, welcoming space for everyone",
  ]);

  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -80, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 80, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 80, scale: 0.95 },
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
      {/* Hero Section */}
      <section className="w-full overflow-x-hidden h-fit pt-[30px] pb-[30px] flex justify-center items-center">
        <div
          className="p-[20px] w-[90%] h-[60vh] rounded-2xl flex sm:justify-center sm:items-center md:justify-start relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/webp/mas2.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-[3%] bg-white/60 backdrop-blur-sm h-fit xl:w-[40%] md:w-[60%] md:shadow-2xl sm:w-[100%] rounded-2xl flex flex-col gap-y-[10px]"
          >
            <p className="text-red-600 font-semibold uppercase text-sm">
              Our Story
            </p>
            <h2 className="text-black font-bold sm:text-3xl xl:text-5xl text-2xl [text-shadow:1px_1px_2px_#fff]">
              A Sanctuary Built on Care.
            </h2>
            <p className="text-black/80 max-w-[500px]">
              For over a decade, we've devoted ourselves to one simple idea —
              that true wellness begins the moment you feel truly seen, heard,
              and cared for.
            </p>
            <div className="flex gap-x-[3%] mt-2">
              <Link
                to=""
                className="bg-red-600 flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit rounded-4xl text-white hover:bg-white hover:text-red-600 transition duration-300 text-[13px] shadow-xl"
              >
                Book a Visit
              </Link>
              <Link
                to=""
                className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit hover:bg-black hover:text-white transition duration-300 rounded-4xl shadow-xl text-black text-[13px]"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="flex overflow-x-hidden pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex xl:flex-row md:flex-row flex-col gap-x-10 gap-y-8 w-[90%] justify-between items-center">
          <motion.div
            variants={fadeVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="xl:w-[45%] md:w-[45%] w-full h-[30em] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/webp/mas5.webp"
              alt="Our spa interior"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
            />
          </motion.div>
          <motion.div
            variants={fadeVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="xl:w-[50%] md:w-[50%] w-full flex flex-col gap-y-4"
          >
            <p className="text-red-600 font-semibold uppercase">Who We Are</p>
            <h2 className="font-semibold xl:text-4xl text-2xl [text-shadow:1px_1px_2px_#000]">
              More Than a Spa — A Way of Living
            </h2>
            <p className="text-black/70 leading-relaxed xl:text-[16px] text-[14px]">
              Tania Salon & Spa was born from a quiet rebellion against the
              noise of modern life. We believed wellness shouldn't feel rushed,
              transactional, or impersonal. So we built a sanctuary — a place
              where time slows down, where touch becomes therapy, and where
              every guest is welcomed not as a customer, but as a returning
              friend.
            </p>
            <p className="text-black/70 leading-relaxed xl:text-[16px] text-[14px]">
              Today, our team of certified therapists carries that vision
              forward. From soft tissue therapy to soul-restoring rituals, every
              treatment we offer is a small invitation to come home to yourself.
            </p>
            <div className="flex gap-x-6 mt-4">
              <div className="flex items-center gap-x-2">
                <Clock color="#dc2626" size={28} strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-xl">12+</p>
                  <p className="text-[12px] text-black/60">Years of Care</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Users color="#dc2626" size={28} strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-xl">1200+</p>
                  <p className="text-[12px] text-black/60">Happy Guests</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              What We Stand For
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center [text-shadow:1px_1px_2px_#000]">
              The Values That Guide Us
            </h2>
          </div>
          <div className="flex w-full flex-wrap md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 h-fit justify-center items-stretch">
            {Values.map((val, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-y-3 w-full hover:-translate-y-2 transition duration-300"
              >
                <div className="bg-red-50 w-fit p-3 rounded-xl">{val.icon}</div>
                <h2 className="font-semibold xl:text-xl text-lg">
                  {val.h2Val}
                </h2>
                <p className="text-black/70 text-[14px] leading-relaxed">
                  {val.pVal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">Our Journey</p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Twelve Years, One Vision
            </h2>
          </div>
          <div className="w-full flex flex-col gap-y-6 relative">
            <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-200 -translate-x-1/2" />
            {Milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.2 }}
                className={`flex w-full items-center ${
                  i % 2 === 0 ? "xl:justify-start" : "xl:justify-end"
                }`}
              >
                <div className="xl:w-[45%] w-full bg-black/5 shadow-xl rounded-2xl p-6 relative">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold w-fit inline-block mb-3">
                    {m.year}
                  </span>
                  <h3 className="font-semibold xl:text-xl text-lg mb-2">
                    {m.title}
                  </h3>
                  <p className="text-black/70 text-[14px] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex xl:flex-row md:flex-row flex-col-reverse gap-x-10 gap-y-8 w-[90%] justify-between items-center">
          <motion.div
            variants={fadeVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="xl:w-[50%] md:w-[50%] w-full flex flex-col gap-y-4"
          >
            <p className="text-red-600 font-semibold uppercase">Our Promise</p>
            <h2 className="font-semibold xl:text-4xl text-2xl [text-shadow:1px_1px_2px_#000]">
              What You Can Always Count On
            </h2>
            <p className="text-black/70 leading-relaxed xl:text-[16px] text-[14px]">
              When you walk through our doors, you're stepping into a space
              built around a few non-negotiable promises.
            </p>
            <div className="flex flex-col gap-y-3 mt-3">
              {Promises.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-x-3"
                >
                  <CheckCircle2
                    color="#dc2626"
                    size={22}
                    strokeWidth={2}
                    className="flex-shrink-0 mt-[2px]"
                  />
                  <p className="text-black/80 text-[14px]">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="xl:w-[45%] md:w-[45%] w-full h-[30em] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/webp/mas9.webp"
              alt="Our promise"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <motion.div
          variants={fadeVariants}
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-[90%] xl:w-[70%] flex flex-col items-center gap-y-6 text-center bg-red-50 rounded-2xl p-10 shadow-xl"
        >
          <Quote color="#dc2626" size={50} strokeWidth={1} />
          <p className="xl:text-2xl text-lg italic text-black/80 leading-relaxed max-w-[700px]">
            "We don't just offer treatments — we offer a moment to breathe, a
            place to belong, and a reason to slow down. That, to me, is what
            true wellness feels like."
          </p>
          <div className="flex flex-col items-center gap-y-1">
            <h3 className="font-semibold xl:text-xl">Tania Mareli</h3>
            <p className="text-red-600 font-semibold text-sm">
              Founder & Lead Therapist
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <motion.div
          variants={fadeVariants}
          initial="hiddenUp"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-[90%] rounded-2xl p-10 flex flex-col items-center gap-y-5 text-center relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.85), rgba(0,0,0,0.7)), url(/images/webp/mas12.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white/80 font-semibold uppercase text-sm">
            Ready to Begin?
          </p>
          <h2 className="font-semibold xl:text-4xl text-2xl text-white max-w-[600px] [text-shadow:1px_1px_2px_#000]">
            Your Sanctuary is Waiting
          </h2>
          <p className="text-white/90 max-w-[500px] xl:text-[16px] text-[14px]">
            Step into a space designed entirely around your peace. Book your
            first visit today and experience the Tania difference.
          </p>
          <div className="flex gap-x-3 mt-3 flex-wrap justify-center gap-y-3">
            <Link
              to=""
              className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit rounded-4xl text-red-600 hover:bg-black hover:text-white transition duration-300 text-[13px] shadow-xl font-semibold"
            >
              Book Appointment
            </Link>
            <Link
              to=""
              className="bg-transparent border-2 border-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit hover:bg-white hover:text-red-600 transition duration-300 rounded-4xl text-white text-[13px] font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
