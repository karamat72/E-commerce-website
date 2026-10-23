import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

/* ===== FIXED: 4 White Shoes - All Pure Black Background ===== */
const productsByCategory = {
  "Shoes Collection": {
    bg: "bg-[#0f0f0f]",
    style: { innerBg: "bg-[#050505]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black hover:bg-zinc-200" },
    items: [
      { id: 1, name: "Air White Sneakers", price: 12490, badge: "Bestseller", sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=90" },
      { id: 2, name: "Classic White Sneakers", price: 8490, badge: "New", sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800&q=90" },
      { id: 3, name: "Running White Pro", price: 10990, badge: "Popular", sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=90" },
      { id: 4, name: "Street White Sneakers", price: 9490, sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=90" },
    ]
  },
  "Dresses Collection": {
    bg: "bg-[#0f0f0f]",
    style: { innerBg: "bg-[#050505]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black hover:bg-zinc-200" },
    items: [
      { id: 5, name: "Elegant Black Dress", price: 5490, badge: "New", sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=90" },
      { id: 6, name: "Classic Black Dress", price: 8990, badge: "Trending", sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=90" },
      { id: 7, name: "Evening Black Dress", price: 4290, sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=90" },
      { id: 8, name: "Party Black Gown", price: 12490, sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=90" },
    ]
  },
  "Bags Collection": {
    bg: "bg-[#0f0f0f]",
    style: { innerBg: "bg-[#050505]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black hover:bg-zinc-200" },
    items: [
      { id: 9, name: "Luxury Black Handbag", price: 7490, badge: "Bestseller", sub: "Same Black • Leather", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=90" },
      { id: 10, name: "Classic Black Tote", price: 2490, sub: "Same Black • Leather", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=90" },
      { id: 11, name: "Mini Black Bag", price: 3990, badge: "New", sub: "Same Black • Leather", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=90" },
      { id: 12, name: "Office Black Bag", price: 5990, sub: "Same Black • Leather", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=90" },
    ]
  },
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f9f6f1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[.17em]"><Sparkles size={15} /> Thoughtfully chosen</p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">Good things. <span className="font-normal text-[#b18a5d]">Better living.</span></h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">Everyday essentials, chosen for the way they look, feel, and fit into your life.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4"><Link to="/shop"><Button>Shop Collection <ArrowRight size={16} /></Button></Link></div>
          </div>
          <div className="mx-auto w-full max-w-2xl"><div className="overflow-hidden rounded-[28px]"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90" alt="living room" className="block h-[350px] w-full object-cover sm:h-[470px] lg:h-[570px]" /></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-20 bg-black">
        {Object.entries(productsByCategory).map(([categoryName, data]) => (
          <div key={categoryName} className="rounded-[28px] p-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase mb-2">PURE BLACK THEME</p><h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-white">{categoryName}</h2></div>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all text-white">View All <ArrowRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {data.items.map((product) => (
                <ProductCard key={product.id} product={product} uniformBg={data.bg} uniformStyle={data.style} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
