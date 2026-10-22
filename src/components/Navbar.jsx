import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          My Store
        </Link>

        {/* CENTER MENU - Desktop Only */}
        <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/shop" className="hover:text-gray-300">Shop</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Right + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
            <Link to="/signup" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200">Sign Up</Link>
          </div>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-zinc-900 p-4 rounded">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-zinc-700" />
          <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link to="/signup" className="bg-white text-black px-4 py-2 rounded text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
