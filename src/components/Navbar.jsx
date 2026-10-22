import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShopDrop, setShowShopDrop] = useState(false);
  const location = useLocation();

  const shopSubMenu = [
    { name: "Shoes Collection", path: "/shop?category=Shoes", emoji: "👟", desc: "Sneakers & Sports" },
    { name: "Dresses Collection", path: "/shop?category=Dresses", emoji: "👗", desc: "Party & Casual" },
    { name: "Bags Collection", path: "/shop?category=Bags", emoji: "👜", desc: "Handbags & Totes" },
    { name: "Tech Essentials", path: "/shop?category=Tech", emoji: "🎧", desc: "Gadgets & Gear" },
    { name: "Lifestyle", path: "/shop?category=Lifestyle", emoji: "🌿", desc: "Home & Living" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", hasSubmenu: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path || location.search.includes(path);

  return (
    <header className="sticky top-0 z-50 w-full">
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
                link.hasSubmenu ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowShopDrop(true)}
                    onMouseLeave={() => setShowShopDrop(false)}
                  >
                    <Link
                      to={link.path}
                      className={`relative text-[14.5px] font-medium tracking-wide transition-all duration-300 group flex items-center gap-1
                        ${location.pathname.includes("/shop") ? "text-black" : "text-zinc-500 hover:text-black"}`}
                    >
                      {link.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${showShopDrop ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
                      <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-300 ${location.pathname.includes("/shop") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </Link>

                    {/* Dropdown - 5 Menus */}
                    {showShopDrop && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-[20px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-zinc-100 p-3 grid grid-cols-2 gap-2">
                        {shopSubMenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start gap-3 p-3 rounded-[14px] hover:bg-zinc-50 transition group/item"
                          >
                            <span className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[18px] group-hover/item:scale-110 transition">{item.emoji}</span>
                            <div>
                              <p className="text-[13px] font-semibold leading-tight">{item.name}</p>
                              <p className="text-[11px] text-zinc-500 mt-[2px]">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        <Link to="/shop" className="col-span-2 mt-1 bg-black text-white text-center py-[12px] rounded-full text-[12px] font-medium hover:bg-zinc-800 transition">
                          View All Products →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-[14.5px] font-medium tracking-wide transition-all duration-300 group
                      ${isActive(link.path) ? "text-black" : "text-zinc-500 hover:text-black"}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                )
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
                <Link to="/signin" className="text-[14px] font-medium text-zinc-600 hover:text-black transition">Sign In</Link>
                <Link to="/signup" className="bg-black text-white px-5 py-2.5 rounded-full text-[13.5px] font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-[1px]">Sign Up</Link>
              </div>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black text-white">
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with 5 Submenus */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white/95 backdrop-blur-xl px-6 py-6">
            <div className="flex flex-col gap-5">
              <Link to="/" onClick={() => setIsOpen(false)} className={`text-[18px] font-medium ${isActive("/") ? "text-black" : "text-zinc-500"}`}>Home</Link>
              
              <div>
                <p className="text-[18px] font-medium text-black mb-3">Shop</p>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {shopSubMenu.map((item) => (
                    <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-2">
                      <span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[14px]">{item.emoji}</span>
                      <span className="text-[14px] text-zinc-600">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" onClick={() => setIsOpen(false)} className={`text-[18px] font-medium ${isActive("/about") ? "text-black" : "text-zinc-500"}`}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-[18px] font-medium ${isActive("/contact") ? "text-black" : "text-zinc-500"}`}>Contact</Link>
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
