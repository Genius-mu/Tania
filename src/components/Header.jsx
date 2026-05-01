import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Camera,
  Phone,
  MapPin,
  ArrowUpRight,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Packages", link: "/packages" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=61569519790447" },
    { Icon: Twitter, href: "https://x.com/mustaphAdegbite" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/mustaphaadegbite/" },
    {
      Icon: Instagram,g
      href: "https://www.instagram.com/mustapha_the_website_developer/",
    },
  ];

  // Detect scroll to add backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (link) => {
    if (link === "/") return location.pathname === "/";
    return location.pathname.startsWith(link);
  };

  return (
    <>
      {/* Announcement bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-black text-white overflow-hidden"
          >
            <div className="w-[90%] mx-auto h-9 flex items-center justify-between gap-x-4 text-[11px] uppercase tracking-[0.15em]">
              <div className="hidden md:flex items-center gap-x-5 text-white/70">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-x-2 hover:text-white transition duration-300"
                >
                  <Phone size={11} strokeWidth={2.5} />
                  <span>+1 (234) 567-890</span>
                </a>
                <span className="flex items-center gap-x-2">
                  <MapPin size={11} strokeWidth={2.5} />
                  <span>Open daily · 9am – 9pm</span>
                </span>
              </div>
              <p className="text-white/90 flex-1 md:flex-initial text-center md:text-left">
                <span className="text-red-500 font-bold">New Guests:</span>{" "}
                <span className="hidden sm:inline">
                  Enjoy 15% off your first ritual.
                </span>
                <span className="sm:hidden">15% off first visit.</span>
              </p>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-white/50 hover:text-white transition duration-200 flex-shrink-0"
                aria-label="Dismiss announcement"
              >
                <X size={13} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main header */}
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="w-[90%] mx-auto h-[4.5em] flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-red-600 p-1.5 rounded-md group-hover:rotate-12 transition duration-300">
              <Camera className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-black">
                Tania
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-black/50 font-semibold">
                Salon · Spa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-x-1 items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 group ${
                  isActive(item.link)
                    ? "text-red-600"
                    : "text-black/80 hover:text-red-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-red-600 transition-all duration-300 ${
                    isActive(item.link) ? "w-5" : "w-0 group-hover:w-5"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right cluster — socials + CTA */}
          <div className="hidden lg:flex items-center gap-x-5">
            <div className="flex gap-x-3 pr-5 border-r border-black/10">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-black/60 hover:text-red-600 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label={`Social link ${i}`}
                >
                  <Icon size={15} strokeWidth={2} />
                </a>
              ))}
            </div>
            <Link
              to="/booking"
              className="bg-red-600 hover:bg-black transition duration-300 text-white px-5 py-2.5 rounded-full text-[12px] font-semibold flex items-center gap-x-2 group shadow-sm uppercase tracking-wider"
            >
              <Calendar size={13} strokeWidth={2.5} />
              Book Now
              <ArrowUpRight
                size={13}
                strokeWidth={2.5}
                className="group-hover:rotate-45 transition duration-300"
              />
            </Link>
          </div>

          {/* Mobile right cluster */}
          <div className="lg:hidden flex items-center gap-x-3">
            <Link
              to="/booking"
              className="hidden sm:flex bg-red-600 hover:bg-black transition duration-300 text-white px-4 py-2 rounded-full text-[11px] font-semibold items-center gap-x-1.5 uppercase tracking-wider"
            >
              <Calendar size={11} strokeWidth={2.5} />
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-red-600 focus:outline-none transition duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full-screen drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[60%] bg-white z-50 flex flex-col lg:hidden shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center p-6 border-b border-black/10">
                <Link
                  to="/"
                  className="flex items-center gap-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="bg-red-600 p-1.5 rounded-md">
                    <Camera className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold tracking-tight">
                      Tania
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-black/50 font-semibold">
                      Salon · Spa
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-red-600 transition duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={2} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
                <p className="text-red-600 font-semibold uppercase text-[10px] tracking-[0.25em] mb-5">
                  Menu
                </p>
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-black/5 group transition-colors duration-200 ${
                        isActive(item.link)
                          ? "text-red-600"
                          : "text-black hover:text-red-600"
                      }`}
                    >
                      <span className="text-xl font-semibold tracking-tight">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        className={`transition-all duration-300 ${
                          isActive(item.link)
                            ? "text-red-600 rotate-45"
                            : "text-black/30 group-hover:text-red-600 group-hover:rotate-45"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 pb-6 pt-4 border-t border-black/10 flex flex-col gap-y-4">
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 hover:bg-black transition duration-300 text-white px-5 py-3 rounded-full text-[13px] font-semibold flex items-center justify-center gap-x-2 uppercase tracking-wider"
                >
                  <Calendar size={14} strokeWidth={2.5} />
                  Book an Appointment
                </Link>

                <div className="flex flex-col gap-y-2 text-[12px] text-black/60">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-x-2 hover:text-red-600 transition duration-200"
                  >
                    <Phone size={12} strokeWidth={2.5} />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <span className="flex items-center gap-x-2">
                    <MapPin size={12} strokeWidth={2.5} />
                    <span>Open daily · 9am – 9pm</span>
                  </span>
                </div>

                <div className="flex gap-x-3 pt-2">
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="bg-black/5 hover:bg-red-600 hover:text-white text-black/70 p-2.5 rounded-full transition duration-200"
                      aria-label={`Social link ${i}`}
                    >
                      <Icon size={14} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
