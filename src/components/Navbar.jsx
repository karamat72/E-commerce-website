import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setShopOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header className="sticky top-0 z-[999] bg-[#0f0f0f] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[60px] flex items-center justify-between">
        
        {/* LOGO - Fixed to single line */}
        <Link to="/" className="text-white font-bold tracking-[0.1em] text-[15px] whitespace-nowrap leading-none">
          MY STORE
        </Link>

        {/* DESKTOP MENU - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px]">
          <Link to="/" className="text-white">Home</Link>
          
          <div ref={ref} className="relative">
            <button onClick={(e) => { e.stopPropagation(); setShopOpen(!shopOpen); }} className="flex items-center gap-1 text-zinc-400 hover:text-white">
              Shop <ChevronDown size={14} className={shopOpen ? "rotate-180" : ""} />
            </button>
            {shopOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[45px] w-[420px] bg-white rounded-[20px] p-3 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/shop?category=shoes" onClick={() => setShopOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black block"><p className="font-bold text-sm">Shoes</p><p className="text-xs text-zinc-500">Sneakers</p></Link>
                  <Link to="/shop?category=dresses" onClick={() => setShopOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black block"><p className="font-bold text-sm">Dresses</p><p className="text-xs text-zinc-500">Party & Casual</p></Link>
                  <Link to="/shop?category=bags" onClick={() => setShopOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black block"><p className="font-bold text-sm">Bags</p><p className="text-xs text-zinc-500">Handbags</p></Link>
                  <Link to="/shop?category=tech" onClick={() => setShopOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black block"><p className="font-bold text-sm">Tech</p><p className="text-xs text-zinc-500">Gadgets</p></Link>
                </div>
                <Link to="/shop" onClick={() => setShopOpen(false)} className="mt-3 bg-black text-white rounded-full py-3 text-sm font-bold text-center block">View All →</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-zinc-400 hover:text-white">About</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-white">Contact</Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2">
          <Link to="/cart" className="w-9 h-9 rounded-full bg-white text-black grid place-items-center"><ShoppingBag size={16}/></Link>
          {/* Hamburger only on mobile/tablet */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/10 text-white grid place-items-center">
            {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER - Pehle jaisa simple */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-white/10 px-6 py-5 space-y-1">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-white border-b border-white/5">Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="block py-3 text-white border-b border-white/5">Shop</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-white border-b border-white/5">About</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-white">Contact</Link>
        </div>
      )}
    </header>
  );
}
