import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setShopOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const shopCategories = [
    { name: "Shoes Collection", sub: "Sneakers & Sports", link: "/shop?category=shoes" },
    { name: "Dresses Collection", sub: "Party & Casual", link: "/shop?category=dresses" },
    { name: "Bags Collection", sub: "Handbags & Totes", link: "/shop?category=bags" },
    { name: "Tech Essentials", sub: "Gadgets & Gear", link: "/shop?category=tech" },
    { name: "Lifestyle", sub: "Home & Living", link: "/shop?category=lifestyle" },
  ];

  return (
    <header className="sticky top-0 z-[999] bg-[#0f0f0f] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="text-white font-bold tracking-[0.1em] text-[15px] whitespace-nowrap">
          MY STORE
        </Link>

        {/* DESKTOP MENU - FIXED SHOP REDIRECT */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px]">
          <Link to="/" className="text-white">Home</Link>
          
          {/* YAHAN FIX KIYA HAI - Shop Link + Arrow Button Alag */}
          <div ref={ref} className="relative flex items-center gap-1">
            <Link to="/shop" className="text-zinc-400 hover:text-white">Shop</Link>
            <button onClick={(e) => { e.stopPropagation(); setShopOpen(!shopOpen); }} className="p-1 text-zinc-400 hover:text-white grid place-items-center">
              <ChevronDown size={14} className={`${shopOpen ? "rotate-180" : ""} transition`} />
            </button>
            
            {shopOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[420px] bg-white rounded-[20px] p-3 shadow-2xl z-50">
                <div className="grid grid-cols-2 gap-2">
                  {shopCategories.map((c) => (
                    <Link key={c.name} to={c.link} onClick={() => setShopOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black block">
                      <p className="font-bold text-sm">{c.name}</p><p className="text-xs text-zinc-500">{c.sub}</p>
                    </Link>
                  ))}
                </div>
                <Link to="/shop" onClick={() => setShopOpen(false)} className="mt-3 bg-black text-white rounded-full py-3 text-sm font-bold text-center block">View All Products →</Link>
              </div>
            )}
          </div>
          
          <Link to="/about" className="text-zinc-400 hover:text-white">About</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="w-9 h-9 rounded-full bg-white/10 lg:bg-white text-white lg:text-black grid place-items-center border border-white/10 lg:border-0">
            <ShoppingBag size={16}/>
          </Link>
          <div className="hidden lg:flex items-center gap-3 ml-2">
            <Link to="/signin" className="text-sm text-zinc-400 hover:text-white px-4 py-2">Sign In</Link>
            <Link to="/signup" className="text-sm bg-white text-black px-5 py-2.5 rounded-full font-bold hover:bg-zinc-200">Sign Up</Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/10 text-white grid place-items-center">
            {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* MOBILE MEGA MENU - FIXED SHOP REDIRECT */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-white/10 px-4 py-5 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-white font-medium">Home</Link>
          
          <div className="py-2">
            <div className="flex items-center justify-between">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-3 text-white font-medium flex-1">Shop</Link>
              <button onClick={() => setMobileShopOpen(!mobileShopOpen)} className="p-2 text-white grid place-items-center">
                <ChevronDown size={16} className={`${mobileShopOpen ? "rotate-180" : ""} transition`} />
              </button>
            </div>
            
            {mobileShopOpen && (
              <div className="mt-2 bg-white rounded-[20px] p-3">
                <div className="grid grid-cols-1 gap-1">
                  {shopCategories.map((c) => (
                    <Link key={c.name} to={c.link} onClick={() => setMobileOpen(false)} className="flex gap-3 p-3 rounded-xl hover:bg-zinc-100 text-black">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center text-xs">•</div>
                      <div><p className="font-bold text-sm">{c.name}</p><p className="text-xs text-zinc-500">{c.sub}</p></div>
                    </Link>
                  ))}
                </div>
                <Link to="/shop" onClick={() => setMobileOpen(false)} className="mt-3 bg-black text-white rounded-full py-3 text-sm font-bold text-center block">View All Products →</Link>
              </div>
            )}
          </div>

          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-white font-medium border-t border-white/5 mt-2">About</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-white font-medium">Contact</Link>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link to="/signin" onClick={() => setMobileOpen(false)} className="text-center py-3 rounded-full border border-white/20 text-white text-sm">Sign In</Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)} className="text-center py-3 rounded-full bg-white text-black text-sm font-bold">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
