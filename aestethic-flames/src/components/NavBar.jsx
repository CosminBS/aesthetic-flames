import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1D1F24] shadow-md w-full z-50 absolute top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-[2.5rem] md:text-6xl font-qwigley">
            <Link to="/" className="text-[#C0B696]">
              Aesthetic Flames
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-[15px]">
            <Link to="/" className="text-white hover:text-[#C0B696] hover:underline">
              Acasa
            </Link>
            <Link to="/contact" className="text-white hover:text-[#C0B696] hover:underline">
              Contact
            </Link>
            <Link to="/products" className="text-white hover:text-[#C0B696] hover:underline">
              Produse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-[#1D1F24] shadow-md py-4 text-[20px]">
          <Link to="/" onClick={handleLinkClick} className="block px-4 py-2 text-white">
            Acasa
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-white">
            Contact
          </Link>
          <Link to="/products" onClick={handleLinkClick} className="block px-4 py-2 text-white">
            Produse
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
