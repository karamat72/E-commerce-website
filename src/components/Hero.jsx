import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef(null);
  const navigate = useNavigate();

  // Close when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (path) => {
    setShopOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-white tracking-tight">MY STORE</Link>

        <nav className="flex items-center gap-8 text-sm">
          <Link to="/" className="text-zinc-400 hover:text-white transition">Home</Link>
          
          {/* SHOP WITH CLICK MENU - FIXED */}
          <div ref={shopRef} className="relative">
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition py-2"
            >
              Shop <ChevronDown size={14} className={`transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
            </button>

            {shopOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] rounded-[20px] bg-white text-black shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-black/5 overflow-hidden p-3 animate-in fade-in">
                {/* Bridge for mouse - prevents disappearing */}
                <div className="absolute -top-3 left-0 w-full h-3 bg-transparent"></div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleCategoryClick("/shop?category=shoes")} className="flex gap-3 text-left rounded-xl hover:bg-zinc-100 p-3 transition">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center">👟</div>
                    <div><p className="font-semibold text-sm">Shoes Collection</p><p className="text-xs text-zinc-500">Sneakers & Sports</p></div>
                  </button>
                  <button onClick={() => handleCategoryClick("/shop?category=dresses")} className="flex gap-3 text-left rounded-xl hover:bg-zinc-100 p-3 transition">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center">👗</div>
                    <div><p className="font-semibold text-sm">Dresses Collection</p><p className="text-xs text-zinc-500">Party & Casual</p></div>
                  </button>
                  <button onClick={() => handleCategoryClick("/shop?category=bags")} className="flex gap-3 text-left rounded-xl hover:bg-zinc-100 p-3 transition">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center">👜</div>
                    <div><p className="font-semibold text-sm">Bags Collection</p><p className="text-xs text-zinc-500">Handbags & Totes</p></div>
                  </button>
                  <button onClick={() => handleCategoryClick("/shop?category=tech")} className="flex gap-3 text-left rounded-xl hover:bg-zinc-100 p-3 transition">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center">🎧</div>
                    <div><p className="font-semibold text-sm">Tech Essentials</p><p className="text-xs text-zinc-500">Gadgets & Gear</p></div>
                  </button>
                  <button onClick={() => handleCategoryClick("/shop?category=lifestyle")} className="flex gap-3 text-left rounded-xl hover:bg-zinc-100 p-3 transition">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 grid place-items-center">🌿</div>
                    <div><p className="font-semibold text-sm">Lifestyle</p><p className="text-xs text-zinc-500">Home & Living</p></div>
                  </button>
                </div>

                <button
                  onClick={() => handleCategoryClick("/shop")}
                  className="mt-3 w-full bg-black text-white rounded-full py-3 text-sm font-semibold hover:bg-zinc-800 transition"
                >
                  View All Products →
                </button>
              </div>
            )}
          </div>

          <Link to="/about" className="text-zinc-400 hover:text-white transition">About</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-white transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="w-9 h-9 rounded-full bg-white text-black grid place-items-center"><ShoppingBag size={16}/></Link>
        </div>
      </div>
    </header>
  );
}
