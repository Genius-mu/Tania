import { Camera, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="w-full h-[5em] flex justify-center items-center">
        <div className="header_container w-[90%] h-full flex justify-between items-center">
          <nav className="col1 flex gap-x-[20px]">
            <a href="" className="text-black hover:text-red-600">
              Home
            </a>
            <a href="" className="text-black hover:text-red-600">
              About Us
            </a>
            <a href="" className="text-black hover:text-red-600">
              Packages
            </a>
            <a href="" className="text-black hover:text-red-600">
              Testimonials
            </a>
            <a href="" className="text-black hover:text-red-600">
              Pricing
            </a>
            <a href="" className="text-black hover:text-red-600">
              Blog
            </a>
          </nav>
          <nav className="col2 flex gap-x-[20px]">
            <a href="">
              <Facebook
                className="text-red-600 hover:text-black"
                size={17}
                strokeWidth={2}
              />
            </a>
            <a href="">
              <Twitter
                size={17}
                className="text-red-600 hover:text-black"
                strokeWidth={2}
              />
            </a>
            <a href="">
              <Linkedin
                size={17}
                className="text-red-600 hover:text-black"
                strokeWidth={2}
              />
            </a>
            <a href="">
              <Instagram
                size={17}
                className="text-red-600 hover:text-black"
                strokeWidth={2}
              />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
