import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Star, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

const heroSlides = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=90",
];

const productsByCategory = {
  "Shoes Collection": {
    bg: "bg-white", style: { innerBg: "bg-[#f5f5f5]", textColor: "text-black", subText: "text-zinc-500", badge: "bg-black text-white", button: "bg-black text-white hover:bg-zinc-800" },
    items: [
      { id: 1, name: "Air White Sneakers", price: 12490, badge: "Bestseller", sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=90" },
      { id: 2, name: "Classic White Sneakers", price: 8490, badge: "New", sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=90" },
      { id: 3, name: "Running White Pro", price: 10990, sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=90" },
      { id: 4, name: "Street White Sneakers", price: 9490, sub: "Pure White • Premium", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=90" },
    ]
  },
  "Dresses Collection": {
    bg: "bg-[#0f0f0f]", style: { innerBg: "bg-[#1a1a1a]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black hover:bg-zinc-200" },
    items: [
      { id: 5, name: "Elegant Black Dress", price: 5490, badge: "New", sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=90" },
      { id: 6, name: "Classic Black Dress", price: 8990, sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
      { id: 7, name: "Evening Black Dress", price: 4290, sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=90" },
      { id: 8, name: "Party Black Gown", price: 12490, sub: "Jet Black • Premium", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=90" },
    ]
  },
  "Bags Collection": {
    bg: "bg-[#fdf8f2]", style: { innerBg: "bg-[#fff4e6]", textColor: "text-black", subText: "text-zinc-500", badge: "bg-black text-white", button: "bg-black text-white" },
    items: [
      { id: 9, name: "Luxury Black Handbag", price: 7490, badge: "Bestseller", sub: "Black Leather", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=90" },
      { id: 10, name: "Classic Black Tote", price: 2490, sub: "Black Leather", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=90" },
      { id: 11, name: "Mini Black Bag", price: 3990, badge: "New", sub: "Black Leather", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=90" },
      { id: 12, name: "Office Black Bag", price: 5990, sub: "Black Leather", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=90" },
    ]
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative h-[80vh] min-h-[550px] overflow-hidden bg-black">
        {heroSlides.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={img} alt="hero" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white"><Sparkles size={14} /> Thoughtfully chosen</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[-.05em] text-white">Good things.<br/><span className="font-normal text-[#d4b896]">Better living.</span></h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/80">Everyday essentials, chosen for the way they look, feel, and fit into your life.</p>
            <div className="mt-8 flex gap-4"><Link to="/shop"><Button className="bg-white text-black hover:bg-zinc-100">Shop Collection <ArrowRight size={16} /></Button></Link></div>
            <div className="mt-10 flex gap-2">{heroSlides.map((_, i) => (<button key={i} onClick={() => setCurrentSlide(i)} className={`h-1 rounded-full transition-all ${i === currentSlide ? "w-8 bg-white" : "w-4 bg-white/40"}`} />))}</div>
          </div>
        </div>
      </section>

      {/* ATTRACTIVE SECTIONS */}
      <div className="bg-white">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
          <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">Step 01</p><h2 className="text-3xl md:text-4xl font-serif font-light mt-2">Shoes Collection</h2></div><Link to="/shop" className="text-sm font-semibold flex items-center gap-2">View All <ArrowRight size={14} /></Link></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Shoes Collection"].items.map(p => <ProductCard key={p.id} product={p} uniformBg={productsByCategory["Shoes Collection"].bg} uniformStyle={productsByCategory["Shoes Collection"].style} />)}</div>
        </section>

        {/* DESIGN BANNER BETWEEN - Is se black-black ajeeb nahi lagega */}
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="rounded-[28px] bg-gradient-to-r from-black via-zinc-900 to-black p-[1px]">
            <div className="rounded-[27px] bg-gradient-to-r from-[#111] to-[#1a1a1a] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6"><div className="w-14 h-14 rounded-full bg-white text-black grid place-items-center"><Star size={20} /></div><div><h3 className="text-white text-xl font-semibold">Premium Quality Guaranteed</h3><p className="text-zinc-400 text-sm mt-1">Free delivery • 30 days return • Secure payment</p></div></div>
              <div className="flex gap-8 text-white"><div className="flex items-center gap-2"><Truck size={18} /><span className="text-sm">Fast Delivery</span></div><div className="flex items-center gap-2"><Shield size={18} /><span className="text-sm">Secure</span></div></div>
            </div>
          </div>
        </div>

        <section className="bg-[#0a0a0a] rounded-t-[32px] mx-auto max-w-7xl px-4 py-16 lg:py-20 mt-6">
          <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">Step 02</p><h2 className="text-3xl md:text-4xl font-serif font-light mt-2 text-white">Dresses Collection</h2><p className="text-zinc-500 text-xs mt-2">Black premium dresses — dark theme</p></div><Link to="/shop" className="text-white text-sm flex items-center gap-2">View All <ArrowRight size={14} /></Link></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Dresses Collection"].items.map(p => <ProductCard key={p.id} product={p} uniformBg={productsByCategory["Dresses Collection"].bg} uniformStyle={productsByCategory["Dresses Collection"].style} />)}</div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20 bg-[#fdf8f2] rounded-t-[32px] -mt-8">
          <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">Step 03</p><h2 className="text-3xl md:text-4xl font-serif font-light mt-2">Bags Collection</h2></div><Link to="/shop" className="text-sm font-semibold flex items-center gap-2">View All <ArrowRight size={14} /></Link></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Bags Collection"].items.map(p => <ProductCard key={p.id} product={p} uniformBg={productsByCategory["Bags Collection"].bg} uniformStyle={productsByCategory["Bags Collection"].style} />)}</div>
        </section>
      </div>
    </>
  );
}
