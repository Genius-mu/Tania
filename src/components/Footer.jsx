import { Link } from "react-router";
import {
  Camera,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Heart,
  Star,
  Send,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const linkColumns = [
    {
      heading: "Explore",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Packages", to: "/packages" },
        { label: "Pricing", to: "/pricing" },
        { label: "Testimonials", to: "/testimonials" },
        { label: "Blog", to: "/blog" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Massage Therapy", to: "/services/massage" },
        { label: "Facials & Skincare", to: "/services/skincare" },
        { label: "Body Rituals", to: "/services/rituals" },
        { label: "Couples Spa", to: "/services/couples" },
        { label: "Wellness Sessions", to: "/services/wellness" },
        { label: "Gift Cards", to: "/gift-cards" },
      ],
    },
    {
      heading: "Visit",
      links: [
        { label: "Book Appointment", to: "/booking" },
        { label: "Membership Plans", to: "/pricing#membership" },
        { label: "Group Bookings", to: "/group" },
        { label: "Corporate Wellness", to: "/corporate" },
        { label: "First-Time Guests", to: "/first-visit" },
        { label: "FAQ", to: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    { Icon: Instagram, href: "", label: "Instagram" },
    { Icon: Facebook, href: "", label: "Facebook" },
    { Icon: Twitter, href: "", label: "Twitter" },
    { Icon: Linkedin, href: "", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      {/* Newsletter band */}
      <div className="w-full border-b border-white/10">
        <div className="w-[90%] mx-auto py-12 flex xl:flex-row md:flex-row flex-col gap-x-10 gap-y-8 items-start xl:items-center md:items-center justify-between">
          <div className="flex flex-col gap-y-3 max-w-[500px]">
            <p className="text-red-500 font-semibold uppercase text-[10px] tracking-[0.25em]">
              The Sunday Letter
            </p>
            <h3 className="font-bold xl:text-3xl md:text-2xl text-2xl tracking-tight leading-tight">
              Quiet reads.
              <span className="italic text-red-500"> No noise.</span>
            </h3>
            <p className="text-white/60 text-[13px] leading-relaxed">
              One thoughtful piece each Sunday morning — wellness reflections,
              treatment guides, and seasonal rituals. Unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full xl:max-w-[420px] md:max-w-[420px]"
          >
            <div className="flex bg-white/5 border-2 border-white/10 rounded-full p-1.5 focus-within:border-red-500 transition duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-[13px] placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-white hover:text-red-600 transition duration-300 text-white px-5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wider flex items-center gap-x-1.5 group"
              >
                Subscribe
                <Send
                  size={12}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-0.5 transition duration-300"
                />
              </button>
            </div>
            <p className="text-white/40 text-[11px] mt-3 ml-2">
              Joining 2,400+ guests who read with us each week.
            </p>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="w-[90%] mx-auto pt-16 pb-10">
        <div className="grid xl:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-x-8 gap-y-12">
          {/* Brand column */}
          <div className="xl:col-span-4 md:col-span-12 flex flex-col gap-y-5">
            <Link to="/" className="flex items-center gap-x-2 group w-fit">
              <div className="bg-red-600 p-1.5 rounded-md group-hover:rotate-12 transition duration-300">
                <Camera className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">
                  Tania
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 font-semibold">
                  Salon · Spa
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-[14px] leading-relaxed max-w-[360px]">
              A sanctuary built for stillness. We've been guiding guests toward
              balance, beauty, and inner space since 2012.
            </p>

            {/* Social proof bar */}
            <div className="flex items-center gap-x-4 pt-2">
              <div className="flex flex-col gap-y-0.5">
                <div className="flex gap-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#dc2626"
                      strokeWidth={0}
                      color="#dc2626"
                    />
                  ))}
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">
                  4.9 · 2,183 reviews
                </p>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex flex-col gap-y-0.5">
                <p className="font-bold text-[15px]">12+ Years</p>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">
                  Of quiet care
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-x-2 pt-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="bg-white/5 hover:bg-red-600 transition duration-300 w-9 h-9 rounded-full flex items-center justify-center group"
                >
                  <Icon
                    size={14}
                    strokeWidth={2}
                    className="text-white/70 group-hover:text-white transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((col, i) => (
            <div
              key={i}
              className="xl:col-span-2 md:col-span-4 flex flex-col gap-y-4"
            >
              <h4 className="text-red-500 font-semibold uppercase text-[11px] tracking-[0.2em]">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.to}
                      className="text-white/60 text-[13px] hover:text-white transition duration-200 inline-flex items-center gap-x-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        strokeWidth={2}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-red-500 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="xl:col-span-2 md:col-span-12 flex flex-col gap-y-4">
            <h4 className="text-red-500 font-semibold uppercase text-[11px] tracking-[0.2em]">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-y-3">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-2 text-white/60 text-[13px] hover:text-white transition duration-200 group"
                >
                  <MapPin
                    size={13}
                    strokeWidth={2}
                    className="flex-shrink-0 mt-0.5 group-hover:text-red-500 transition duration-200"
                  />
                  <span>
                    24 Wellness Avenue
                    <br />
                    Lagos, Nigeria
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2341234567890"
                  className="flex items-center gap-x-2 text-white/60 text-[13px] hover:text-white transition duration-200 group"
                >
                  <Phone
                    size={13}
                    strokeWidth={2}
                    className="flex-shrink-0 group-hover:text-red-500 transition duration-200"
                  />
                  <span>+234 802 0666 256</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:adegbitmustapha73@gmail.com"
                  className="flex items-center gap-x-2 text-white/60 text-[13px] hover:text-white transition duration-200 group"
                >
                  <Mail
                    size={13}
                    strokeWidth={2}
                    className="flex-shrink-0 group-hover:text-red-500 transition duration-200"
                  />
                  <span>hello@taniaspa.com</span>
                </a>
              </li>
              <li className="flex items-start gap-x-2 text-white/60 text-[13px]">
                <Clock
                  size={13}
                  strokeWidth={2}
                  className="flex-shrink-0 mt-0.5"
                />
                <span>
                  Daily · 9am – 9pm
                  <br />
                  <span className="text-white/40 text-[11px]">
                    Closed on holidays
                  </span>
                </span>
              </li>
            </ul>

            {/* Quick book CTA */}
            <Link
              to="/booking"
              className="mt-2 bg-red-600 hover:bg-white hover:text-red-600 transition duration-300 text-white px-4 py-2.5 rounded-full text-[12px] font-semibold flex items-center justify-center gap-x-2 group"
            >
              Book a visit
              <ArrowUpRight
                size={12}
                strokeWidth={2.5}
                className="group-hover:rotate-45 transition duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial quote band */}
      <div className="w-full border-t border-white/10 bg-white/[0.02]">
        <div className="w-[90%] mx-auto py-8 flex justify-center">
          <p className="text-white/40 italic text-[13px] text-center max-w-[500px] leading-relaxed">
            "Wellness isn't a luxury. It's a way of remembering yourself."
            <span className="block text-red-500/80 not-italic font-semibold text-[10px] uppercase tracking-[0.2em] mt-2">
              — Tania Mareli, Founder
            </span>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-white/10">
        <div className="w-[90%] mx-auto py-6 flex xl:flex-row md:flex-row flex-col gap-y-3 justify-between items-center">
          <div className="flex items-center gap-x-2 text-white/40 text-[12px]">
            <span>© {currentYear} Tania Salon & Spa.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
            <Heart
              size={11}
              fill="#dc2626"
              strokeWidth={0}
              color="#dc2626"
              className="ml-1"
            />
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Cookies", to: "/cookies" },
              { label: "Accessibility", to: "/accessibility" },
              { label: "Sitemap", to: "/sitemap" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="text-white/40 hover:text-white text-[12px] transition duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
