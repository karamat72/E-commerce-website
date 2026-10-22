import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass Effect */}
      <nav className="backdrop-blur-xl bg-white/70 border-b border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-[22px] font-black tracking-tighter">My Store</span>
              <span className="w-2 h-2 bg-black rounded-full -mt-3"></span>
            </Link>

            {/* Center Menu - Desktop */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[14.5px] font-medium tracking-wide transition-all duration-300 group
                    ${isActive(link.path) ? "text-black" : "text-zinc-500 hover:text-black"}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-300
                    ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">
              <button className="hidden md:block text-zinc-500 hover:text-black transition">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </button>
              
              <Link to="/cart" className="hidden md:block relative text-zinc-500 hover:text-black transition">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></span>
              </Link>

              <div className="hidden md:flex items-center gap-3 ml-2">
                <Link to="/signin" className="text-[14px] font-medium text-zinc-600 hover:text-black transition">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-black text-white px-5 py-2.5 rounded-full text-[13.5px] font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-[1px]">
                  Sign Up
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black text-white"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white/95 backdrop-blur-xl px-6 py-6 animate-in">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-[18px] font-medium ${isActive(link.path) ? "text-black" : "text-zinc-500"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-zinc-100 my-2"></div>
              <Link to="/signin" onClick={() => setIsOpen(false)} className="text-[16px]">Sign In</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-black text-white text-center py-3 rounded-full">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
