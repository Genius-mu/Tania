import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Crown,
  Flame,
  Droplet,
  Wind,
  Leaf,
  Plus,
  Minus,
  Shield,
  CalendarCheck,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState("any");
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    firstVisit: false,
  });
  const [confirmed, setConfirmed] = useState(false);

  const Steps = [
    { num: 1, label: "Service" },
    { num: 2, label: "Date & Time" },
    { num: 3, label: "Your Details" },
    { num: 4, label: "Confirm" },
  ];

  const Services = [
    {
      id: "swedish",
      icon: <Heart size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Swedish Relaxation",
      desc: "Light, flowing strokes for surface tension and calm.",
      durations: [
        { time: "30 min", price: 55 },
        { time: "60 min", price: 95 },
        { time: "90 min", price: 135 },
      ],
    },
    {
      id: "deep",
      icon: <Flame size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Deep Tissue Release",
      desc: "Firm pressure for chronic knots and recovery.",
      durations: [
        { time: "45 min", price: 85 },
        { time: "75 min", price: 130 },
        { time: "120 min", price: 195 },
      ],
    },
    {
      id: "stone",
      icon: <Sparkles size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Celestial Stone Therapy",
      desc: "Heated basalt stones along energy points.",
      durations: [
        { time: "60 min", price: 125 },
        { time: "90 min", price: 175 },
      ],
    },
    {
      id: "royal",
      icon: <Crown size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Royal Renewal Ritual",
      desc: "Signature ritual: massage, facial, herbal soak.",
      durations: [
        { time: "120 min", price: 220 },
        { time: "180 min", price: 320 },
      ],
    },
    {
      id: "ocean",
      icon: <Droplet size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Ocean Breeze Detox",
      desc: "Salt-infused ritual that purifies skin and mind.",
      durations: [{ time: "75 min", price: 140 }],
    },
    {
      id: "twin",
      icon: <Wind size={22} strokeWidth={1.5} color="#dc2626" />,
      name: "Twin Souls Escape",
      desc: "Side-by-side ritual with champagne service.",
      durations: [{ time: "150 min", price: 380 }],
    },
  ];

  const AddOns = [
    {
      id: "stone-add",
      name: "Hot Stone Add-On",
      price: 25,
      icon: <Flame size={16} strokeWidth={2} />,
    },
    {
      id: "aroma",
      name: "Aromatherapy Boost",
      price: 18,
      icon: <Leaf size={16} strokeWidth={2} />,
    },
    {
      id: "scalp",
      name: "Scalp Treatment",
      price: 30,
      icon: <Sparkles size={16} strokeWidth={2} />,
    },
    {
      id: "feet",
      name: "Foot Reflexology",
      price: 35,
      icon: <Droplet size={16} strokeWidth={2} />,
    },
  ];

  const Therapists = [
    { id: "any", name: "First Available", role: "Any therapist", img: null },
    {
      id: "alex",
      name: "Alex Hormozi",
      role: "Soft Tissue",
      img: "/images/webp/user1.webp",
    },
    {
      id: "chris",
      name: "Chris James",
      role: "Reflexology",
      img: "/images/webp/user2.webp",
    },
    {
      id: "goslin",
      name: "Goslin Mane",
      role: "Massage",
      img: "/images/webp/user3.webp",
    },
  ];

  const TimeSlots = {
    morning: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
    afternoon: [
      "12:00",
      "12:30",
      "1:00",
      "1:30",
      "2:00",
      "2:30",
      "3:00",
      "3:30",
      "4:00",
      "4:30",
    ],
    evening: ["5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00"],
  };

  // Mark some slots as unavailable for realism
  const unavailableSlots = ["10:00", "1:30", "3:00", "6:30"];

  // Calendar generation
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monthName = calendarMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const days = getDaysInMonth(calendarMonth);

  const isSameDay = (a, b) => a && b && a.toDateString() === b.toDateString();

  const isPast = (date) => date && date < today;

  const changeMonth = (delta) => {
    const newMonth = new Date(calendarMonth);
    newMonth.setMonth(newMonth.getMonth() + delta);
    setCalendarMonth(newMonth);
  };

  // Pricing logic
  const servicePrice = selectedDuration?.price || 0;
  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const addon = AddOns.find((a) => a.id === id);
    return sum + (addon?.price || 0);
  }, 0);
  const subtotal = servicePrice + addOnsTotal;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedService && selectedDuration;
    if (currentStep === 2) return selectedDate && selectedTime;
    if (currentStep === 3)
      return (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone
      );
    return true;
  };

  const handleSubmit = () => {
    setConfirmed(true);
    setCurrentStep(5);
  };

  const formatDate = (date) =>
    date?.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      {/* Editorial header */}
      <section className="w-full pt-[60px] pb-[40px] flex justify-center">
        <div className="w-[90%] flex flex-col gap-y-6">
          <div className="flex items-center gap-x-3">
            <CalendarCheck size={16} strokeWidth={2} color="#dc2626" />
            <p className="text-red-600 font-semibold uppercase text-xs tracking-[0.2em]">
              Book Your Visit
            </p>
          </div>
          <div className="flex xl:flex-row md:flex-row flex-col gap-x-10 gap-y-6 items-end justify-between">
            <h1 className="font-bold xl:text-7xl md:text-5xl text-4xl leading-[1] max-w-[800px] tracking-tight">
              {confirmed ? (
                <>
                  See you
                  <br />
                  <span className="italic text-red-600">soon.</span>
                </>
              ) : (
                <>
                  Reserve your
                  <br />
                  <span className="italic text-red-600">moment</span> of
                  stillness.
                </>
              )}
            </h1>
            <p className="text-black/60 max-w-[350px] xl:text-[15px] text-[14px] leading-relaxed">
              {confirmed
                ? "We've sent confirmation to your inbox. We're already getting your room ready."
                : "Four short steps. Real-time availability. Free cancellation up to 24 hours before."}
            </p>
          </div>
          <div className="h-[1px] w-full bg-black/10 mt-4" />
        </div>
      </section>

      {/* Step indicator (hidden on confirmation) */}
      {!confirmed && (
        <section className="w-full pb-[30px] flex justify-center">
          <div className="w-[90%]">
            <div className="flex items-center justify-between max-w-[700px] mx-auto">
              {Steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="flex flex-col items-center gap-y-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition duration-300 ${
                        currentStep > step.num
                          ? "bg-red-600 text-white"
                          : currentStep === step.num
                            ? "bg-black text-white"
                            : "bg-black/10 text-black/40"
                      }`}
                    >
                      {currentStep > step.num ? (
                        <Check size={16} strokeWidth={3} />
                      ) : (
                        step.num
                      )}
                    </div>
                    <p
                      className={`text-[10px] uppercase tracking-wider font-semibold ${
                        currentStep >= step.num ? "text-black" : "text-black/40"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                  {i < Steps.length - 1 && (
                    <div
                      className={`flex-1 h-[2px] mx-2 mb-6 transition duration-300 ${
                        currentStep > step.num ? "bg-red-600" : "bg-black/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main booking area */}
      <section className="w-full pb-[80px] flex justify-center">
        <div className="w-[90%] flex xl:flex-row gap-x-10 gap-y-10 flex-col">
          {/* Left: Step content */}
          <div className="xl:w-[65%] w-full">
            <AnimatePresence mode="wait">
              {/* STEP 1: SERVICE */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-y-8"
                >
                  <div>
                    <h2 className="font-bold xl:text-3xl text-2xl tracking-tight mb-2">
                      Choose your service
                    </h2>
                    <p className="text-black/60 text-[14px]">
                      Pick what your body's asking for today.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {Services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setSelectedService(service);
                          setSelectedDuration(null);
                        }}
                        className={`text-left p-5 rounded-2xl border-2 transition duration-300 ${
                          selectedService?.id === service.id
                            ? "border-red-600 bg-red-50"
                            : "border-black/10 bg-white hover:border-red-200"
                        }`}
                      >
                        <div className="flex items-start gap-x-3 mb-3">
                          <div className="bg-red-50 p-2 rounded-lg">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[15px]">
                              {service.name}
                            </h3>
                            <p className="text-black/60 text-[12px] mt-1 leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                          {selectedService?.id === service.id && (
                            <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <p className="text-[11px] text-black/50 uppercase tracking-wider">
                          From ${service.durations[0].price}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Duration picker */}
                  {selectedService && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-y-4 pt-4 border-t border-black/10"
                    >
                      <h3 className="font-semibold text-[15px]">
                        Select duration
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedService.durations.map((d) => (
                          <button
                            key={d.time}
                            onClick={() => setSelectedDuration(d)}
                            className={`px-5 py-3 rounded-xl border-2 transition duration-300 flex flex-col items-start gap-y-1 ${
                              selectedDuration?.time === d.time
                                ? "border-red-600 bg-red-50"
                                : "border-black/10 bg-white hover:border-red-200"
                            }`}
                          >
                            <span className="text-[12px] text-black/60 flex items-center gap-x-1">
                              <Clock size={11} strokeWidth={2} />
                              {d.time}
                            </span>
                            <span className="font-bold text-[16px]">
                              ${d.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Add-ons */}
                  {selectedDuration && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-y-4 pt-4 border-t border-black/10"
                    >
                      <div>
                        <h3 className="font-semibold text-[15px]">
                          Enhance your visit
                        </h3>
                        <p className="text-black/50 text-[12px] mt-1">
                          Optional · Up to two recommended
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {AddOns.map((addon) => {
                          const active = selectedAddOns.includes(addon.id);
                          return (
                            <button
                              key={addon.id}
                              onClick={() => toggleAddOn(addon.id)}
                              className={`flex items-center justify-between p-3 rounded-xl border-2 transition duration-300 ${
                                active
                                  ? "border-red-600 bg-red-50"
                                  : "border-black/10 bg-white hover:border-red-200"
                              }`}
                            >
                              <div className="flex items-center gap-x-3">
                                <div
                                  className={`p-2 rounded-lg ${
                                    active
                                      ? "bg-red-600 text-white"
                                      : "bg-red-50 text-red-600"
                                  }`}
                                >
                                  {addon.icon}
                                </div>
                                <div className="text-left">
                                  <p className="font-semibold text-[13px]">
                                    {addon.name}
                                  </p>
                                  <p className="text-red-600 font-bold text-[12px]">
                                    +${addon.price}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition duration-200 ${
                                  active
                                    ? "bg-red-600 text-white"
                                    : "bg-black/5 text-black/40"
                                }`}
                              >
                                {active ? (
                                  <Minus size={12} strokeWidth={3} />
                                ) : (
                                  <Plus size={12} strokeWidth={3} />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STEP 2: DATE & TIME */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-y-8"
                >
                  <div>
                    <h2 className="font-bold xl:text-3xl text-2xl tracking-tight mb-2">
                      Pick a date and time
                    </h2>
                    <p className="text-black/60 text-[14px]">
                      Real-time availability. Slots fill quickly on weekends.
                    </p>
                  </div>

                  {/* Therapist preference */}
                  <div className="flex flex-col gap-y-3">
                    <h3 className="font-semibold text-[15px]">
                      Preferred therapist
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Therapists.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTherapist(t.id)}
                          className={`flex items-center gap-x-2 px-3 py-2 rounded-full border-2 transition duration-300 ${
                            selectedTherapist === t.id
                              ? "border-red-600 bg-red-50"
                              : "border-black/10 bg-white hover:border-red-200"
                          }`}
                        >
                          {t.img ? (
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <img
                                src={t.img}
                                alt={t.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                              <Sparkles
                                size={10}
                                strokeWidth={2.5}
                                color="#666"
                              />
                            </div>
                          )}
                          <span className="text-[12px] font-semibold">
                            {t.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-white border-2 border-black/10 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        onClick={() => changeMonth(-1)}
                        className="w-9 h-9 rounded-full bg-black/5 hover:bg-red-600 hover:text-white transition duration-300 flex items-center justify-center"
                      >
                        <ChevronLeft size={16} strokeWidth={2.5} />
                      </button>
                      <h3 className="font-bold text-[15px]">{monthName}</h3>
                      <button
                        onClick={() => changeMonth(1)}
                        className="w-9 h-9 rounded-full bg-black/5 hover:bg-red-600 hover:text-white transition duration-300 flex items-center justify-center"
                      >
                        <ChevronRight size={16} strokeWidth={2.5} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div
                          key={i}
                          className="text-center text-[11px] font-bold text-black/40 uppercase py-2"
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, i) => {
                        if (!day) return <div key={i} />;
                        const past = isPast(day);
                        const selected = isSameDay(day, selectedDate);
                        const isToday = isSameDay(day, today);
                        return (
                          <button
                            key={i}
                            onClick={() => !past && setSelectedDate(day)}
                            disabled={past}
                            className={`aspect-square rounded-lg text-[13px] font-medium transition duration-200 flex items-center justify-center ${
                              selected
                                ? "bg-red-600 text-white shadow-md"
                                : past
                                  ? "text-black/20 cursor-not-allowed"
                                  : isToday
                                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                                    : "text-black hover:bg-black/5"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-y-5 pt-4 border-t border-black/10"
                    >
                      <h3 className="font-semibold text-[15px]">
                        Available times for {formatDate(selectedDate)}
                      </h3>

                      {Object.entries(TimeSlots).map(([period, slots]) => (
                        <div key={period} className="flex flex-col gap-y-2">
                          <p className="text-[10px] uppercase tracking-wider font-bold text-black/50">
                            {period}
                          </p>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                            {slots.map((slot) => {
                              const unavailable =
                                unavailableSlots.includes(slot);
                              const isSelected = selectedTime === slot;
                              return (
                                <button
                                  key={slot}
                                  onClick={() =>
                                    !unavailable && setSelectedTime(slot)
                                  }
                                  disabled={unavailable}
                                  className={`py-2 px-3 rounded-lg text-[13px] font-semibold transition duration-200 ${
                                    isSelected
                                      ? "bg-red-600 text-white shadow-md"
                                      : unavailable
                                        ? "bg-black/5 text-black/30 line-through cursor-not-allowed"
                                        : "bg-white border border-black/10 hover:border-red-600 hover:text-red-600"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: DETAILS */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-y-6"
                >
                  <div>
                    <h2 className="font-bold xl:text-3xl text-2xl tracking-tight mb-2">
                      Your details
                    </h2>
                    <p className="text-black/60 text-[14px]">
                      We'll send your confirmation here. Promise — no marketing
                      emails.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-black/60">
                        First name
                      </label>
                      <div className="relative">
                        <User
                          size={15}
                          strokeWidth={2}
                          color="#999"
                          className="absolute left-4 top-1/2 -translate-y-1/2"
                        />
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border-2 border-black/10 focus:border-red-500 focus:outline-none text-[14px] transition duration-200"
                          placeholder="Sophia"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-[12px] font-semibold uppercase tracking-wider text-black/60">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-black/10 focus:border-red-500 focus:outline-none text-[14px] transition duration-200"
                        placeholder="Reynolds"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-black/60">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        strokeWidth={2}
                        color="#999"
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                      />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border-2 border-black/10 focus:border-red-500 focus:outline-none text-[14px] transition duration-200"
                        placeholder="sophia@email.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-black/60">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone
                        size={15}
                        strokeWidth={2}
                        color="#999"
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                      />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border-2 border-black/10 focus:border-red-500 focus:outline-none text-[14px] transition duration-200"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-black/60 flex items-center justify-between">
                      <span>Anything we should know?</span>
                      <span className="text-black/40 normal-case font-normal">
                        Optional
                      </span>
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={15}
                        strokeWidth={2}
                        color="#999"
                        className="absolute left-4 top-4"
                      />
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border-2 border-black/10 focus:border-red-500 focus:outline-none text-[14px] transition duration-200 resize-none"
                        placeholder="Allergies, preferences, areas of focus, pregnancy..."
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-x-3 cursor-pointer p-4 rounded-xl bg-[#faf7f5]">
                    <input
                      type="checkbox"
                      checked={formData.firstVisit}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstVisit: e.target.checked,
                        })
                      }
                      className="mt-0.5 accent-red-600 w-4 h-4"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-[13px]">
                        This is my first visit
                      </p>
                      <p className="text-black/60 text-[12px] mt-0.5">
                        We'll add 10 extra minutes for a wellness consultation —
                        on the house.
                      </p>
                    </div>
                  </label>
                </motion.div>
              )}

              {/* STEP 4: CONFIRM */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-y-6"
                >
                  <div>
                    <h2 className="font-bold xl:text-3xl text-2xl tracking-tight mb-2">
                      One last look
                    </h2>
                    <p className="text-black/60 text-[14px]">
                      Confirm everything looks right, then we'll lock it in.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black/10 rounded-2xl p-6 flex flex-col gap-y-5">
                    <div className="flex justify-between items-start pb-5 border-b border-black/10">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1">
                          Service
                        </p>
                        <h4 className="font-bold text-[16px]">
                          {selectedService?.name}
                        </h4>
                        <p className="text-black/60 text-[12px] mt-1">
                          {selectedDuration?.time}
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="text-red-600 text-[12px] font-semibold hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between items-start pb-5 border-b border-black/10">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1">
                          When
                        </p>
                        <h4 className="font-bold text-[16px]">
                          {formatDate(selectedDate)}
                        </h4>
                        <p className="text-black/60 text-[12px] mt-1">
                          {selectedTime} ·{" "}
                          {
                            Therapists.find((t) => t.id === selectedTherapist)
                              ?.name
                          }
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="text-red-600 text-[12px] font-semibold hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex justify-between items-start pb-5 border-b border-black/10">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1">
                          Guest
                        </p>
                        <h4 className="font-bold text-[16px]">
                          {formData.firstName} {formData.lastName}
                        </h4>
                        <p className="text-black/60 text-[12px] mt-1">
                          {formData.email} · {formData.phone}
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(3)}
                        className="text-red-600 text-[12px] font-semibold hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    {selectedAddOns.length > 0 && (
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-black/50 mb-2">
                          Add-ons
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedAddOns.map((id) => {
                            const a = AddOns.find((x) => x.id === id);
                            return (
                              <span
                                key={id}
                                className="bg-red-50 text-red-600 text-[12px] font-semibold px-3 py-1 rounded-full"
                              >
                                {a?.name} +${a?.price}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-x-3 bg-red-50 p-4 rounded-xl">
                    <Shield
                      size={18}
                      strokeWidth={2}
                      color="#dc2626"
                      className="flex-shrink-0 mt-0.5"
                    />
                    <p className="text-[12px] text-black/70 leading-relaxed">
                      <span className="font-semibold text-black">
                        No payment due now.
                      </span>{" "}
                      We'll charge your card on the day of service. Free
                      cancellation up to 24 hours before your appointment.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: CONFIRMED */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-y-6 items-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center"
                  >
                    <Check size={40} color="#fff" strokeWidth={3} />
                  </motion.div>

                  <div className="flex flex-col gap-y-3">
                    <h2 className="font-bold xl:text-3xl text-2xl tracking-tight">
                      You're booked.
                    </h2>
                    <p className="text-black/60 text-[14px] max-w-[400px]">
                      Confirmation sent to{" "}
                      <span className="text-black font-semibold">
                        {formData.email}
                      </span>
                      . We'll send a gentle reminder 24 hours before.
                    </p>
                  </div>

                  <div className="bg-[#faf7f5] rounded-2xl p-5 max-w-[400px] w-full">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-red-600 mb-3">
                      Confirmation code
                    </p>
                    <p className="font-bold text-2xl tracking-[0.3em]">
                      TNA-{Math.floor(Math.random() * 9000) + 1000}
                    </p>
                  </div>

                  <div className="flex gap-x-3 flex-wrap justify-center gap-y-2">
                    <Link
                      to="/"
                      className="bg-red-600 hover:bg-black transition duration-300 text-white px-6 py-3 rounded-full text-[13px] font-semibold flex items-center gap-x-2"
                    >
                      Back home
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </Link>
                    <button className="bg-transparent border-2 border-black/20 hover:border-red-600 hover:text-red-600 transition duration-300 text-black px-6 py-3 rounded-full text-[13px] font-semibold">
                      Add to calendar
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            {!confirmed && (
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-black/10">
                <button
                  onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                  disabled={currentStep === 1}
                  className={`px-5 py-3 rounded-full text-[13px] font-semibold transition duration-300 flex items-center gap-x-2 ${
                    currentStep === 1
                      ? "text-black/30 cursor-not-allowed"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  <ChevronLeft size={14} strokeWidth={2.5} />
                  Back
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={() => setCurrentStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className={`px-6 py-3 rounded-full text-[13px] font-semibold flex items-center gap-x-2 transition duration-300 ${
                      canProceed()
                        ? "bg-red-600 hover:bg-black text-white shadow-md"
                        : "bg-black/10 text-black/40 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-red-600 hover:bg-black text-white px-6 py-3 rounded-full text-[13px] font-semibold flex items-center gap-x-2 shadow-md transition duration-300"
                  >
                    Confirm booking
                    <Check size={14} strokeWidth={2.5} />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: Sticky summary */}
          {!confirmed && (
            <aside className="xl:w-[35%] w-full">
              <div className="xl:sticky xl:top-32 flex flex-col gap-y-5">
                <div className="bg-black text-white rounded-2xl p-6 flex flex-col gap-y-5">
                  <div className="flex items-center justify-between">
                    <p className="text-red-500 font-semibold uppercase text-[10px] tracking-[0.2em]">
                      Your booking
                    </p>
                    <Sparkles size={14} strokeWidth={2} color="#dc2626" />
                  </div>

                  {!selectedService ? (
                    <p className="text-white/40 text-[13px] italic py-6 text-center">
                      Select a service to begin.
                    </p>
                  ) : (
                    <>
                      <div className="flex flex-col gap-y-3 pb-4 border-b border-white/10">
                        <div className="flex justify-between items-start gap-x-2">
                          <span className="text-white/70 text-[13px]">
                            {selectedService.name}
                          </span>
                          <span className="font-bold text-[14px]">
                            ${servicePrice}
                          </span>
                        </div>
                        {selectedDuration && (
                          <p className="text-white/40 text-[11px]">
                            {selectedDuration.time}
                          </p>
                        )}
                      </div>

                      {selectedAddOns.length > 0 && (
                        <div className="flex flex-col gap-y-2 pb-4 border-b border-white/10">
                          {selectedAddOns.map((id) => {
                            const a = AddOns.find((x) => x.id === id);
                            return (
                              <div
                                key={id}
                                className="flex justify-between items-center text-[13px]"
                              >
                                <span className="text-white/70">{a?.name}</span>
                                <span>+${a?.price}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {selectedDate && selectedTime && (
                        <div className="flex flex-col gap-y-1 pb-4 border-b border-white/10">
                          <div className="flex items-center gap-x-2 text-white/70 text-[12px]">
                            <Calendar size={12} strokeWidth={2} />
                            <span>{formatDate(selectedDate)}</span>
                          </div>
                          <div className="flex items-center gap-x-2 text-white/70 text-[12px]">
                            <Clock size={12} strokeWidth={2} />
                            <span>{selectedTime}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-y-2">
                        <div className="flex justify-between text-[12px] text-white/60">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[12px] text-white/60">
                          <span>Tax (8%)</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-baseline pt-3 border-t border-white/10">
                          <span className="font-semibold text-[13px]">
                            Total
                          </span>
                          <span className="font-bold text-2xl">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-white/40 text-[10px] mt-1">
                          Charged day of service
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-[#faf7f5] rounded-2xl p-5 flex flex-col gap-y-3">
                  <p className="text-red-600 font-semibold uppercase text-[10px] tracking-[0.2em]">
                    Need help booking?
                  </p>
                  <p className="text-black/70 text-[13px] leading-relaxed">
                    Speak with our team if you'd rather book by phone or have
                    questions about a service.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-red-600 font-semibold text-[13px] flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300"
                  >
                    <Phone size={12} strokeWidth={2.5} />
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="flex items-start gap-x-2 text-black/50 text-[11px]">
                  <Shield
                    size={12}
                    strokeWidth={2}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <p>
                    Your information is encrypted and never shared. We don't
                    send marketing without permission.
                  </p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </section>
    </>
  );
};

export default Booking;
