import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Bahar click karo to menu band
  useEffect(() => {
    function close(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="sticky top-0 z-[999] bg-[#0f0f0f] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="font-bold text-white">MY STORE</Link>

        <nav className="flex items-center gap-8 text-[14px]">
          <Link to="/" className="text-zinc-400 hover:text-white">Home</Link>

          <div ref={menuRef} className="relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
              className="flex items-center gap-1 text-zinc-400 hover:text-white py-2"
            >
              Shop <ChevronDown size={14} className={open ? "rotate-180" : ""} />
            </button>

            {open && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[400px] bg-white rounded-[20px] p-3 shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/shop?category=shoes" onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black text-left block">
                    <p className="font-bold text-sm">Shoes Collection</p>
                    <p className="text-xs text-zinc-500">Sneakers & Sports</p>
                  </Link>
                  <Link to="/shop?category=dresses" onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black text-left block">
                    <p className="font-bold text-sm">Dresses Collection</p>
                    <p className="text-xs text-zinc-500">Party & Casual</p>
                  </Link>
                  <Link to="/shop?category=bags" onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black text-left block">
                    <p className="font-bold text-sm">Bags Collection</p>
                    <p className="text-xs text-zinc-500">Handbags & Totes</p>
                  </Link>
                  <Link to="/shop?category=tech" onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black text-left block">
                    <p className="font-bold text-sm">Tech Essentials</p>
                    <p className="text-xs text-zinc-500">Gadgets & Gear</p>
                  </Link>
                  <Link to="/shop?category=lifestyle" onClick={() => setOpen(false)} className="p-3 rounded-xl hover:bg-zinc-100 text-black text-left block">
                    <p className="font-bold text-sm">Lifestyle</p>
                    <p className="text-xs text-zinc-500">Home & Living</p>
                  </Link>
                </div>

                <Link to="/shop" onClick={() => setOpen(false)} className="mt-3 bg-black text-white rounded-full py-3 text-sm font-bold text-center block">
                  View All Products →
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-zinc-400 hover:text-white">About</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-white">Contact</Link>
        </nav>

        <Link to="/cart"><ShoppingBag size={18} className="text-white"/></Link>
      </div>
    </header>
  );
}
