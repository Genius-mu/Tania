import {
  Search,
  Clock,
  Check,
  X,
  Sparkles,
  Flame,
  Droplet,
  Heart,
  Wind,
  Leaf,
  Crown,
  Info,
  Tag,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Pricing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("massage");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const [Tabs] = useState([
    {
      id: "massage",
      label: "Massage",
      icon: <Heart size={16} strokeWidth={2} />,
    },
    {
      id: "facial",
      label: "Facials",
      icon: <Sparkles size={16} strokeWidth={2} />,
    },
    {
      id: "body",
      label: "Body Care",
      icon: <Droplet size={16} strokeWidth={2} />,
    },
    {
      id: "rituals",
      label: "Rituals",
      icon: <Flame size={16} strokeWidth={2} />,
    },
    {
      id: "wellness",
      label: "Wellness",
      icon: <Leaf size={16} strokeWidth={2} />,
    },
  ]);

  const [Services] = useState({
    massage: [
      {
        name: "Swedish Relaxation",
        desc: "Light, flowing strokes designed to release surface tension and calm the nervous system.",
        durations: [
          { time: "30 min", price: 55 },
          { time: "60 min", price: 95, popular: true },
          { time: "90 min", price: 135 },
        ],
      },
      {
        name: "Deep Tissue Release",
        desc: "Firm pressure targeting chronic knots, muscle tension, and recovery support.",
        durations: [
          { time: "45 min", price: 85 },
          { time: "75 min", price: 130, popular: true },
          { time: "120 min", price: 195 },
        ],
      },
      {
        name: "Aromatherapy Massage",
        desc: "Custom-blended essential oils paired with rhythmic touch for emotional balance.",
        durations: [
          { time: "60 min", price: 110, popular: true },
          { time: "90 min", price: 155 },
        ],
      },
      {
        name: "Hot Stone Therapy",
        desc: "Heated basalt stones placed along energy points for deep muscle warmth.",
        durations: [
          { time: "60 min", price: 125 },
          { time: "90 min", price: 175, popular: true },
        ],
      },
      {
        name: "Prenatal Massage",
        desc: "Gentle, side-positioned massage tailored for expectant mothers in their second or third trimester.",
        durations: [{ time: "60 min", price: 105 }],
      },
    ],
    facial: [
      {
        name: "Hydration Facial",
        desc: "Deep moisture infusion for dry, dehydrated, or travel-stressed skin.",
        durations: [
          { time: "45 min", price: 85, popular: true },
          { time: "75 min", price: 135 },
        ],
      },
      {
        name: "Anti-Aging Renewal",
        desc: "Collagen-boosting treatment with peptide serums and lifting massage techniques.",
        durations: [
          { time: "60 min", price: 145 },
          { time: "90 min", price: 195, popular: true },
        ],
      },
      {
        name: "Clarity Detox Facial",
        desc: "Purifying ritual for congested or oily skin using natural clays and enzymes.",
        durations: [{ time: "60 min", price: 115 }],
      },
      {
        name: "Gentle Glow Facial",
        desc: "Calming treatment formulated for sensitive skin and rosacea-prone complexions.",
        durations: [
          { time: "45 min", price: 95 },
          { time: "75 min", price: 145 },
        ],
      },
    ],
    body: [
      {
        name: "Sea Salt Body Polish",
        desc: "Mineral-rich exfoliation that leaves skin renewed and softly glowing.",
        durations: [{ time: "45 min", price: 75 }],
      },
      {
        name: "Detoxifying Body Wrap",
        desc: "Clay or seaweed wrap that draws out impurities while nourishing the skin.",
        durations: [{ time: "60 min", price: 110, popular: true }],
      },
      {
        name: "Sugar & Citrus Scrub",
        desc: "Sweet citrus-infused scrub that brightens and revitalizes tired skin.",
        durations: [
          { time: "30 min", price: 55 },
          { time: "60 min", price: 95 },
        ],
      },
      {
        name: "Marine Algae Treatment",
        desc: "Mineral-dense algae wrap rich in antioxidants and remineralizing benefits.",
        durations: [{ time: "75 min", price: 145 }],
      },
    ],
    rituals: [
      {
        name: "Royal Renewal Ritual",
        desc: "Full-body signature ritual including massage, facial, and herbal soak.",
        durations: [
          { time: "120 min", price: 220, popular: true },
          { time: "180 min", price: 320 },
        ],
      },
      {
        name: "Inner Glow Detox",
        desc: "Three-phase cleansing ritual: dry brush, clay wrap, and lymphatic drainage.",
        durations: [{ time: "90 min", price: 180 }],
      },
      {
        name: "Twin Souls Escape",
        desc: "Side-by-side couples ritual with massage, facial, and champagne service.",
        durations: [{ time: "150 min", price: 380, popular: true }],
      },
      {
        name: "Moonlight Candle Ritual",
        desc: "Evening ritual with warm candle oils, soft music, and full-body massage.",
        durations: [
          { time: "90 min", price: 165 },
          { time: "120 min", price: 215 },
        ],
      },
    ],
    wellness: [
      {
        name: "Reflexology Session",
        desc: "Targeted pressure point work on hands and feet for whole-body balance.",
        durations: [
          { time: "30 min", price: 50 },
          { time: "60 min", price: 85, popular: true },
        ],
      },
      {
        name: "Wellness Consultation",
        desc: "One-on-one session with a wellness specialist to design your custom plan.",
        durations: [{ time: "45 min", price: 65 }],
      },
      {
        name: "Sound Bath Therapy",
        desc: "Immersive sound healing using crystal bowls, gongs, and tuning forks.",
        durations: [{ time: "60 min", price: 75 }],
      },
      {
        name: "Guided Meditation",
        desc: "Private guided session for stress reduction and mental clarity.",
        durations: [
          { time: "30 min", price: 45 },
          { time: "60 min", price: 80 },
        ],
      },
    ],
  });

  const [AddOns] = useState([
    {
      name: "Hot Stone Add-On",
      price: 25,
      icon: <Flame size={22} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      name: "Aromatherapy Boost",
      price: 18,
      icon: <Leaf size={22} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      name: "Scalp Treatment",
      price: 30,
      icon: <Sparkles size={22} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      name: "Foot Reflexology",
      price: 35,
      icon: <Droplet size={22} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      name: "Eye Mask Therapy",
      price: 20,
      icon: <Wind size={22} strokeWidth={1.5} color="#dc2626" />,
    },
    {
      name: "CBD Oil Upgrade",
      price: 28,
      icon: <Heart size={22} strokeWidth={1.5} color="#dc2626" />,
    },
  ]);

  const [Comparison] = useState([
    {
      feature: "Per-visit pricing",
      walkIn: true,
      essential: false,
      devotee: false,
      sanctuary: false,
    },
    {
      feature: "Monthly signature treatments",
      walkIn: "—",
      essential: "1",
      devotee: "3",
      sanctuary: "Unlimited",
    },
    {
      feature: "Priority booking",
      walkIn: false,
      essential: false,
      devotee: true,
      sanctuary: true,
    },
    {
      feature: "Retail product discount",
      walkIn: false,
      essential: "10%",
      devotee: "20%",
      sanctuary: "30%",
    },
    {
      feature: "Guest passes",
      walkIn: false,
      essential: false,
      devotee: "Quarterly",
      sanctuary: "Monthly",
    },
    {
      feature: "Personal wellness concierge",
      walkIn: false,
      essential: false,
      devotee: false,
      sanctuary: true,
    },
    {
      feature: "Annual retreat invitation",
      walkIn: false,
      essential: false,
      devotee: false,
      sanctuary: true,
    },
  ]);

  const [FAQs] = useState([
    {
      q: "Do prices include tax and gratuity?",
      a: "Listed prices exclude local tax. Gratuity is at your discretion and is never automatically added — though always appreciated by our therapists.",
    },
    {
      q: "Can I combine multiple add-ons in one session?",
      a: "Yes. Most services support up to two add-ons in a single visit. Our team will help you choose combinations that fit your time and budget.",
    },
    {
      q: "What's your cancellation policy?",
      a: "Free cancellation up to 24 hours before your appointment. Within 24 hours, a 50% fee applies. No-shows are charged the full service amount.",
    },
    {
      q: "Are gift cards available at all price points?",
      a: "Absolutely. Gift cards can be loaded with any amount from $50 upward and never expire.",
    },
  ]);

  const [openFaq, setOpenFaq] = useState(null);

  const fadeVariants = {
    hiddenUp: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const filteredServices = Services[activeTab].filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderCell = (val) => {
    if (val === true)
      return (
        <Check
          size={20}
          strokeWidth={2.5}
          color="#dc2626"
          className="mx-auto"
        />
      );
    if (val === false)
      return <X size={20} strokeWidth={2.5} color="#999" className="mx-auto" />;
    return <span className="text-black/80 font-semibold">{val}</span>;
  };

  return (
    <>
      {/* Hero */}
      <section className="w-full h-fit pt-[30px] pb-[30px] flex justify-center items-center">
        <div
          className="p-[20px] w-[90%] h-[55vh] rounded-2xl flex sm:justify-center sm:items-center md:justify-start relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/images/webp/mas3.webp)`,
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
              Transparent Pricing
            </p>
            <h2 className="text-black font-bold sm:text-3xl xl:text-5xl text-2xl [text-shadow:1px_1px_2px_#fff]">
              Honest Prices for Honest Care.
            </h2>
            <p className="text-black/80 max-w-[500px]">
              Every service. Every duration. Every price — laid out clearly so
              you can plan your sanctuary with confidence.
            </p>
            <div className="flex gap-x-[3%] mt-2">
              <Link
                to=""
                className="bg-red-600 flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit rounded-4xl text-white hover:bg-white hover:text-red-600 transition duration-300 text-[13px] shadow-xl"
              >
                Browse Services
              </Link>
              <Link
                to=""
                className="bg-white flex whitespace-nowrap h-fit pt-[10px] pb-[10px] pr-[20px] pl-[20px] w-fit hover:bg-black hover:text-white transition duration-300 rounded-4xl shadow-xl text-black text-[13px]"
              >
                Compare Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">Service Menu</p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center [text-shadow:1px_1px_2px_#000]">
              Every Service, Every Duration
            </h2>
          </div>

          {/* Search bar */}
          <div className="w-full max-w-[500px] relative">
            <Search
              size={18}
              strokeWidth={2}
              color="#999"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search a service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-black/5 border-2 border-transparent focus:border-red-500 focus:outline-none text-[14px] transition duration-300"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-x-2 px-5 py-2 rounded-full text-[13px] font-semibold transition duration-300 ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-black/5 text-black hover:bg-black/10"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <motion.div
            key={activeTab + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-y-4"
          >
            {filteredServices.length === 0 ? (
              <p className="text-black/60 italic text-center py-10">
                No services match your search in this category.
              </p>
            ) : (
              filteredServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl rounded-2xl p-6 flex xl:flex-row md:flex-row flex-col gap-x-6 gap-y-4 items-start xl:items-center hover:-translate-y-1 transition duration-300"
                >
                  <div className="xl:w-[40%] md:w-[40%] w-full">
                    <h3 className="font-semibold xl:text-xl text-lg mb-2">
                      {service.name}
                    </h3>
                    <p className="text-black/70 text-[14px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="xl:w-[60%] md:w-[60%] w-full flex flex-wrap gap-3">
                    {service.durations.map((d, idx) => (
                      <div
                        key={idx}
                        className={`relative flex-1 min-w-[140px] rounded-xl p-4 border-2 transition duration-300 ${
                          d.popular
                            ? "border-red-500 bg-red-50"
                            : "border-black/10 bg-white hover:border-red-200"
                        }`}
                      >
                        {d.popular && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-[2px] rounded-full whitespace-nowrap">
                            Best Value
                          </span>
                        )}
                        <div className="flex items-center gap-x-1 text-black/60 text-[12px] mb-1">
                          <Clock size={12} strokeWidth={2} />
                          <span>{d.time}</span>
                        </div>
                        <p className="font-bold xl:text-2xl text-xl">
                          ${d.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Service Enhancements
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Add a Little, Feel a Lot More
            </h2>
          </div>
          <div className="flex w-full flex-wrap md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 h-fit">
            {AddOns.map((addon, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white rounded-2xl p-5 flex items-center gap-x-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="bg-red-50 p-3 rounded-xl flex-shrink-0">
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

      {/* Membership Comparison Table */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Compare Plans
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[600px] [text-shadow:1px_1px_2px_#000]">
              Single Visit or Membership?
            </h2>
            <p className="text-black/60 text-center max-w-[500px] mt-2 text-[14px]">
              See exactly what you get at every level.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex bg-black/5 rounded-full p-1 gap-x-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition duration-300 ${
                billingCycle === "monthly"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-black/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition duration-300 flex items-center gap-x-2 ${
                billingCycle === "yearly"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-black/60"
              }`}
            >
              Yearly
              <span
                className={`text-[10px] font-bold px-2 py-[2px] rounded-full ${
                  billingCycle === "yearly"
                    ? "bg-white text-red-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Save 15%
              </span>
            </button>
          </div>

          {/* Comparison table */}
          <div className="w-full overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full min-w-[700px] bg-white">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-left p-5 font-semibold text-[14px] text-black/60 w-[35%]">
                    Features
                  </th>
                  <th className="p-5 text-center">
                    <p className="font-bold xl:text-lg text-base">Walk-In</p>
                    <p className="text-black/50 text-[12px]">Pay-as-you-go</p>
                  </th>
                  <th className="p-5 text-center">
                    <p className="font-bold xl:text-lg text-base">Essential</p>
                    <p className="font-bold text-red-600 text-[15px]">
                      ${billingCycle === "monthly" ? "89" : "76"}
                      <span className="text-black/50 font-normal text-[11px]">
                        {billingCycle === "monthly"
                          ? "/mo"
                          : "/mo billed yearly"}
                      </span>
                    </p>
                  </th>
                  <th className="p-5 text-center bg-red-50 relative">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-[2px] rounded-full whitespace-nowrap">
                      Most Loved
                    </span>
                    <p className="font-bold xl:text-lg text-base mt-3">
                      Devotee
                    </p>
                    <p className="font-bold text-red-600 text-[15px]">
                      ${billingCycle === "monthly" ? "189" : "161"}
                      <span className="text-black/50 font-normal text-[11px]">
                        {billingCycle === "monthly"
                          ? "/mo"
                          : "/mo billed yearly"}
                      </span>
                    </p>
                  </th>
                  <th className="p-5 text-center">
                    <p className="font-bold xl:text-lg text-base">Sanctuary</p>
                    <p className="font-bold text-red-600 text-[15px]">
                      ${billingCycle === "monthly" ? "349" : "297"}
                      <span className="text-black/50 font-normal text-[11px]">
                        {billingCycle === "monthly"
                          ? "/mo"
                          : "/mo billed yearly"}
                      </span>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Comparison.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-black/5 ${
                      i % 2 === 0 ? "bg-black/[0.02]" : ""
                    }`}
                  >
                    <td className="p-4 text-[14px] text-black/80 font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center text-[14px]">
                      {renderCell(row.walkIn)}
                    </td>
                    <td className="p-4 text-center text-[14px]">
                      {renderCell(row.essential)}
                    </td>
                    <td className="p-4 text-center text-[14px] bg-red-50/50">
                      {renderCell(row.devotee)}
                    </td>
                    <td className="p-4 text-center text-[14px]">
                      {renderCell(row.sanctuary)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Link
                      to=""
                      className="inline-block bg-black/5 hover:bg-black/10 text-black px-4 py-2 rounded-full text-[12px] font-semibold transition duration-300"
                    >
                      Book Visit
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link
                      to=""
                      className="inline-block bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-full text-[12px] font-semibold transition duration-300"
                    >
                      Choose
                    </Link>
                  </td>
                  <td className="p-4 text-center bg-red-50">
                    <Link
                      to=""
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-[12px] font-semibold transition duration-300 shadow-md"
                    >
                      Choose
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link
                      to=""
                      className="inline-block bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-full text-[12px] font-semibold transition duration-300"
                    >
                      Choose
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">Gift Cards</p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Give the Gift of Stillness
            </h2>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full">
            {[50, 100, 200, 500].map((amount, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 flex flex-col gap-y-3 cursor-pointer hover:-translate-y-2 transition duration-300 relative overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(220, 38, 38, 0.95), rgba(0,0,0,0.85)), url(/images/webp/mas${(i % 8) + 1}.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex justify-between items-start">
                  <Tag color="#fff" size={20} strokeWidth={1.5} />
                  <Crown color="#fff" size={20} strokeWidth={1.5} />
                </div>
                <p className="text-white/70 text-[12px] uppercase font-semibold mt-3">
                  Gift Card
                </p>
                <p className="font-bold xl:text-4xl text-3xl text-white">
                  ${amount}
                </p>
                <p className="text-white/70 text-[12px]">
                  Never expires · Any service
                </p>
                <Link
                  to=""
                  className="bg-white text-red-600 hover:bg-black hover:text-white transition duration-300 px-4 py-2 rounded-full text-[12px] font-semibold text-center mt-2"
                >
                  Send Gift
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-black/60 text-[13px] text-center">
            Custom amounts available from $50 upward.{" "}
            <Link to="" className="text-red-600 font-semibold underline">
              Build a custom gift card
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex pt-[5%] pb-[5%] justify-center items-center bg-white w-full h-fit">
        <div className="flex flex-col gap-y-9 w-[90%] xl:w-[70%] justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-red-600 font-semibold uppercase">
              Pricing Questions
            </p>
            <h2 className="font-semibold xl:text-4xl text-2xl text-center max-w-[500px] [text-shadow:1px_1px_2px_#000]">
              Things Worth Knowing
            </h2>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            {FAQs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeVariants}
                initial="hiddenUp"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/[0.03] rounded-2xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex justify-between items-center gap-x-4 hover:bg-black/5 transition duration-300"
                >
                  <span className="font-semibold text-left xl:text-base text-[14px]">
                    {faq.q}
                  </span>
                  <span
                    className={`bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-black/70 text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-x-3 bg-red-50 p-5 rounded-2xl w-full">
            <Info
              size={24}
              strokeWidth={1.5}
              color="#dc2626"
              className="flex-shrink-0"
            />
            <p className="text-black/70 text-[14px]">
              Still have pricing questions?{" "}
              <Link to="" className="text-red-600 font-semibold underline">
                Talk to our wellness team
              </Link>{" "}
              — we're happy to walk you through any service or plan.
            </p>
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
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.85), rgba(0,0,0,0.7)), url(/images/webp/mas7.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white/80 font-semibold uppercase text-sm">
            Ready When You Are
          </p>
          <h2 className="font-semibold xl:text-4xl text-2xl text-white max-w-[600px] [text-shadow:1px_1px_2px_#000]">
            Pick Your Service. Pick Your Time.
          </h2>
          <p className="text-white/90 max-w-[500px] xl:text-[16px] text-[14px]">
            No hidden fees, no pressure. Just clear pricing and the calmest
            sixty minutes of your week.
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
              Buy a Gift Card
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Pricing;
