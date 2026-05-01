// Fucking Update Pleeeease!

import {
  Sparkles,
  Flame,
  Droplet,
  Leaf,
  Clock,
  Check,
  Star,
  Crown,
  Heart,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const [Categories] = useState([
    { id: "all", label: "All Packages" },
    { id: "signature", label: "Signature" },
    { id: "couples", label: "Couples" },
    { id: "rituals", label: "Rituals" },
    { id: "express", label: "Express" },
  ]);

  const [Packages] = useState([
    {
      id: 1,
      category: "signature",
      tag: "Most Popular",
      icon: <Crown size={28} strokeWidth={1.5} color="#fff" />,
      title: "Royal Renewal Ritual",
      desc: "A regal full-body experience designed to restore deep balance and radiance.",
      duration: "120 min",
      price: 220,
      bgVal: "/images/webp/mas2.webp",
      includes: [
        "Full-body aromatherapy massage",
        "Hot stone therapy session",
        "Hydrating facial treatment",
        "Herbal foot soak & scrub",
        "Complimentary herbal tea",
      ],
    },
    {
      id: 2,
      category: "rituals",
      tag: "New",
      icon: <Flame size={28} strokeWidth={1.5} color="#fff" />,
      title: "Inner Glow Detox",
      desc: "A cleansing ritual that draws out toxins while restoring inner radiance.",
      duration: "90 min",
      price: 180,
      bgVal: "/images/webp/mas1.webp",
      includes: [
        "Dry brush exfoliation",
        "Detoxifying clay body wrap",
        "Lymphatic drainage massage",
        "Steam infusion therapy",
      ],
    },
    {
      id: 3,
      category: "couples",
      tag: "Romantic",
      icon: <Heart size={28} strokeWidth={1.5} color="#fff" />,
      title: "Twin Souls Escape",
      desc: "A side-by-side journey of relaxation crafted for two.",
      duration: "150 min",
      price: 380,
      bgVal: "/images/webp/mas3.webp",
      includes: [
        "Couples aromatherapy massage",
        "Side-by-side facials",
        "Champagne & chocolate service",
        "Private suite access",
        "Rose petal foot bath",
      ],
    },
    {
      id: 4,
      category: "express",
      tag: "Quick",
      icon: <Wind size={28} strokeWidth={1.5} color="#fff" />,
      title: "Lunch Hour Reset",
      desc: "A swift but soulful escape designed for the busiest of days.",
      duration: "45 min",
      price: 75,
      bgVal: "/images/webp/mas4.webp",
      includes: [
        "Express neck & shoulder massage",
        "Quick facial refresh",
        "Aromatherapy steam",
      ],
    },
    {
      id: 5,
      category: "signature",
      tag: null,
      icon: <Sparkles size={28} strokeWidth={1.5} color="#fff" />,
      title: "Celestial Stone Therapy",
      desc: "Hot basalt stones radiate warmth through your muscles for total renewal.",
      duration: "90 min",
      price: 165,
      bgVal: "/images/webp/mas9.webp",
      includes: [
        "Hot basalt stone placement",
        "Deep tissue massage",
        "Aromatic oil infusion",
        "Cool-down ritual",
      ],
    },
    {
      id: 6,
      category: "rituals",
      tag: null,
      icon: <Droplet size={28} strokeWidth={1.5} color="#fff" />,
      title: "Ocean Breeze Detox",
      desc: "A salt-infused ritual that purifies the skin and clears the mind.",
      duration: "75 min",
      price: 140,
      bgVal: "/images/webp/mas7.webp",
      includes: [
        "Sea salt body polish",
        "Marine algae wrap",
        "Mineral mist infusion",
        "Hydration therapy",
      ],
    },
    {
      id: 7,
      category: "express",
      tag: null,
      icon: <Leaf size={28} strokeWidth={1.5} color="#fff" />,
      title: "Serenity Starter",
      desc: "Perfect first-timer package — a gentle introduction to our wellness world.",
      duration: "60 min",
      price: 95,
      bgVal: "/images/webp/mas4.webp",
      includes: ["Swedish back massage", "Mini facial", "Hand & arm treatment"],
    },
    {
      id: 8,
      category: "couples",
      tag: null,
      icon: <Heart size={28} strokeWidth={1.5} color="#fff" />,
      title: "Moonlight for Two",
      desc: "An evening ritual under candlelight, made for connection and calm.",
      duration: "120 min",
      price: 320,
      bgVal: "/images/webp/mas12.webp",
      includes: [
        "Candle oil massage for two",
        "Shared aromatic bath",
        "Wine pairing service",
        "Sunset relaxation lounge",
      ],
    },
  ]);

  const [Tiers] = useState([
    {
      name: "Essential",
      price: 89,
      period: "/month",
      desc: "For those just beginning their wellness journey.",
      features: [
        "1 signature treatment monthly",
        "Access to relaxation lounge",
        "10% off retail products",
        "Birthday treat voucher",
      ],
      featured: false,
    },
    {
      name: "Devotee",
      price: 189,
      period: "/month",
      desc: "Our most loved tier — balanced indulgence.",
      features: [
        "3 signature treatments monthly",
        "Priority booking access",
        "20% off retail products",
        "Free guest pass quarterly",
        "Exclusive members-only rituals",
      ],
      featured: true,
    },
    {
      name: "Sanctuary",
      price: 349,
      period: "/month",
      desc: "Unlimited access to total wellness living.",
      features: [
        "Unlimited treatments",
        "Personal wellness concierge",
        "30% off retail products",
        "Monthly couples session",
        "Private suite access",
        "Annual wellness retreat invite",
      ],
      featured: false,
    },
  ]);

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

  const filteredPackages =
    activeCategory === "all"
      ? Packages
      : Packages.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-fit pt-[30px] pb-[30px] flex justify-center items-center">
        <div
          className="p-[20px] w-[90%] h-[55vh] rounded-2xl flex sm:justify-center sm:items-center md:justify-start relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/images/webp/mas6.webp)`,
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
              Wellness Packages
            </p>
            <h2 className="text-black font-bold sm:text-3xl xl:text-5xl text-2xl [text-shadow:1px_1px_2px_#fff]">
              Crafted for Every Kind of Calm.
            </h2>
            <p className="text-black/80 max-w-[500px]">
              From quick lunchtime escapes to soul-deep rituals, find the
              package that fits the moment you're in.
            </p>
            <div className="flex gap-x-[3%] mt-2">
              <Link
                to=""
                className="bg-red-600 flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit rounded-4xl text-white hover:bg-white hover:text-red-600 transition duration-300 text-[13px] shadow-xl"
              >
                View All Packages
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

      {/* Filter & Packages Grid */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Choose Your Experience
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center [text-shadow:1px_1px_2px_#000]">
              Tailored Wellness Packages
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {Categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition duration-300 ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-black/5 text-black hover:bg-black/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="flex w-full flex-wrap md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 h-fit justify-center items-stretch">
            {filteredPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: (i % 3) * 0.15 }}
                className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col w-full hover:-translate-y-2 transition duration-300"
              >
                {/* Image Header */}
                <div
                  className="h-[15em] w-full relative flex flex-col justify-between p-5"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${pkg.bgVal})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="bg-red-600/90 backdrop-blur-sm p-2 rounded-xl">
                      {pkg.icon}
                    </div>
                    {pkg.tag && (
                      <span className="bg-white/90 backdrop-blur-sm text-red-600 text-[11px] font-bold uppercase px-3 py-1 rounded-full">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-x-2 text-white text-[12px] [text-shadow:1px_1px_2px_#000]">
                    <Clock size={14} strokeWidth={2} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-y-3 flex-1">
                  <h3 className="font-semibold xl:text-xl text-lg">
                    {pkg.title}
                  </h3>
                  <p className="text-black/70 text-[14px] leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Includes */}
                  <div className="flex flex-col gap-y-2 mt-2">
                    {pkg.includes.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-x-2 text-[13px] text-black/70"
                      >
                        <Check
                          size={16}
                          strokeWidth={2.5}
                          color="#dc2626"
                          className="flex-shrink-0 mt-[2px]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                    {pkg.includes.length > 3 && (
                      <p className="text-[12px] text-red-600 font-semibold ml-6">
                        + {pkg.includes.length - 3} more inclusions
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-black/10">
                    <div>
                      <p className="text-[11px] text-black/50 uppercase font-semibold">
                        From
                      </p>
                      <p className="font-bold xl:text-2xl text-xl">
                        ${pkg.price}
                      </p>
                    </div>
                    <Link
                      to=""
                      className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-4 py-2 rounded-full text-[13px] font-semibold shadow-lg"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <p className="text-black/60 italic">
              No packages found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Membership Tiers
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Make Wellness a Way of Life
            </h2>
            <p className="text-black/60 text-center max-w-[500px] mt-2 text-[14px]">
              Become a member and turn occasional escape into your everyday
              ritual.
            </p>
          </div>

          <div className="flex w-full flex-wrap md:grid md:grid-cols-3 gap-5 h-fit justify-center items-stretch">
            {Tiers.map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.2 }}
                className={`rounded-2xl p-7 flex flex-col gap-y-4 w-full transition duration-300 hover:-translate-y-2 ${
                  tier.featured
                    ? "bg-red-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-xl"
                }`}
              >
                {tier.featured && (
                  <div className="flex items-center gap-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                    <Star size={14} fill="#fff" strokeWidth={0} />
                    <span className="text-[11px] font-bold uppercase">
                      Most Loved
                    </span>
                  </div>
                )}
                <h3
                  className={`font-bold xl:text-2xl text-xl ${
                    tier.featured ? "text-white" : "text-black"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-[13px] ${
                    tier.featured ? "text-white/80" : "text-black/60"
                  }`}
                >
                  {tier.desc}
                </p>
                <div className="flex items-end gap-x-1">
                  <span
                    className={`font-bold xl:text-5xl text-4xl ${
                      tier.featured ? "text-white" : "text-black"
                    }`}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={`text-[14px] mb-2 ${
                      tier.featured ? "text-white/70" : "text-black/50"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    tier.featured ? "bg-white/20" : "bg-black/10"
                  }`}
                />
                <div className="flex flex-col gap-y-3 flex-1">
                  {tier.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-x-2 text-[14px]"
                    >
                      <Check
                        size={18}
                        strokeWidth={2.5}
                        color={tier.featured ? "#fff" : "#dc2626"}
                        className="flex-shrink-0 mt-[2px]"
                      />
                      <span
                        className={
                          tier.featured ? "text-white/90" : "text-black/80"
                        }
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to=""
                  className={`mt-4 px-5 py-3 rounded-full text-[13px] font-semibold text-center transition duration-300 ${
                    tier.featured
                      ? "bg-white text-red-600 hover:bg-black hover:text-white"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Choose {tier.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Enhance Your Visit
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Little Extras, Big Difference
            </h2>
          </div>

          <div className="flex w-full flex-wrap md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 h-fit">
            {[
              {
                name: "Hot Stone Add-On",
                price: 25,
                icon: <Flame size={28} strokeWidth={1.5} color="#dc2626" />,
              },
              {
                name: "Aromatherapy Boost",
                price: 18,
                icon: <Leaf size={28} strokeWidth={1.5} color="#dc2626" />,
              },
              {
                name: "Scalp Treatment",
                price: 30,
                icon: <Sparkles size={28} strokeWidth={1.5} color="#dc2626" />,
              },
              {
                name: "Foot Reflexology",
                price: 35,
                icon: <Droplet size={28} strokeWidth={1.5} color="#dc2626" />,
              },
            ].map((addon, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.15 }}
                className="bg-black/5 rounded-2xl p-5 flex items-center gap-x-4 hover:bg-red-50 transition duration-300 cursor-pointer"
              >
                <div className="bg-white p-3 rounded-xl shadow-md">
                  {addon.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[15px]">{addon.name}</h4>
                  <p className="text-red-600 font-bold text-[14px]">
                    +${addon.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.85), rgba(0,0,0,0.7)), url(/images/webp/mas11.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white/80 font-semibold uppercase text-sm">
            Not Sure Where to Start?
          </p>
          <h2 className="font-semibold xl:text-4xl text-2xl text-white max-w-[600px] [text-shadow:1px_1px_2px_#000]">
            Let Us Curate Your Experience
          </h2>
          <p className="text-white/90 max-w-[500px] xl:text-[16px] text-[14px]">
            Speak with our wellness consultants and we'll design a custom
            package built entirely around what your body and mind need today.
          </p>
          <div className="flex gap-x-3 mt-3 flex-wrap justify-center gap-y-3">
            <Link
              to=""
              className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit rounded-4xl text-red-600 hover:bg-black hover:text-white transition duration-300 text-[13px] shadow-xl font-semibold"
            >
              Get a Free Consultation
            </Link>
            <Link
              to=""
              className="bg-transparent border-2 border-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[25px] pl-[25px] w-fit hover:bg-white hover:text-red-600 transition duration-300 rounded-4xl text-white text-[13px] font-semibold"
            >
              Call Us Now
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Packages;
