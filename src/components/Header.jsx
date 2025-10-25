import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Camera,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-[5em] flex justify-center items-center bg-white shadow-sm z-50 relative">
      <div className="w-[90%] h-full flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 text-xl font-bold text-red-600">
          <Camera className="w-5 h-5" />
          Tania
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-[20px] text-sm font-medium">
          {["Home", "About Us", "Packages", "Testimonials", "Pricing", "Blog"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-black hover:text-red-600 transition-colors duration-200"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Social Links */}
        <nav className="hidden md:flex gap-x-[20px]">
          <a href="">
            <Facebook className="text-red-600 hover:text-black" size={17} />
          </a>
          <a href="">
            <Twitter className="text-red-600 hover:text-black" size={17} />
          </a>
          <a href="">
            <Linkedin className="text-red-600 hover:text-black" size={17} />
          </a>
          <a href="">
            <Instagram className="text-red-600 hover:text-black" size={17} />
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-red-600 focus:outline-none"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[5em] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 text-sm font-medium z-40">
          {["Home", "About Us", "Packages", "Testimonials", "Pricing", "Blog"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-black hover:text-red-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)} // close menu when clicked
              >
                {item}
              </a>
            )
          )}

          <div className="flex gap-x-[20px] mt-4">
            <a href="">
              <Facebook className="text-red-600 hover:text-black" size={17} />
            </a>
            <a href="">
              <Twitter className="text-red-600 hover:text-black" size={17} />
            </a>
            <a href="">
              <Linkedin className="text-red-600 hover:text-black" size={17} />
            </a>
            <a href="">
              <Instagram className="text-red-600 hover:text-black" size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
