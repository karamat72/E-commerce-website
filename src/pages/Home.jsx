import { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Truck, ShieldCheck, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const heroSlides = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=90",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=90",
];

const commonStyle = { innerBg: "bg-[#151515]", textColor: "text-white", subText: "text-zinc-500", badge: "bg-white text-black", button: "bg-white text-black hover:bg-zinc-200" };

const productsByCategory = {
  "Shoes Collection": {
    bg: "bg-[#0f0f0f]", style: commonStyle,
    items: [
      { id: 1, name: "Air White Sneakers", price: 12490, badge: "Bestseller", sub: "Pure White", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=90" },
      { id: 2, name: "Classic White Sneakers", price: 8490, badge: "New", sub: "Pure White", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=90" },
      { id: 3, name: "Running White Pro", price: 10990, sub: "Pure White", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=90" },
      { id: 4, name: "Street White Sneakers", price: 9490, sub: "Pure White", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=90" },
    ]
  },
  "Dresses Collection": {
    bg: "bg-[#0f0f0f]", style: commonStyle,
    items: [
      { id: 5, name: "Elegant Black Dress", price: 5490, badge: "New", sub: "Jet Black", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=90" },
      { id: 6, name: "Classic Black Dress", price: 8990, sub: "Jet Black", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
      { id: 7, name: "Evening Black Dress", price: 4290, sub: "Jet Black", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=90" },
      { id: 8, name: "Party Black Gown", price: 12490, sub: "Jet Black", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=90" },
    ]
  },
  "Bags Collection": {
    bg: "bg-[#0f0f0f]", style: commonStyle,
    items: [
      { id: 9, name: "Luxury Black Handbag", price: 7490, badge: "Bestseller", sub: "Black Leather", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=90" },
      { id: 10, name: "Classic Black Tote", price: 2490, sub: "Black Leather", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=90" },
      { id: 11, name: "Mini Black Bag", price: 3990, badge: "New", sub: "Black Leather", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=90" },
      { id: 12, name: "Office Black Bag", price: 5990, sub: "Black Leather", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=90" },
    ]
  },
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const productsRef = useRef(null);

  useEffect(() => { 
    const t = setInterval(() => setCurrent(p => (p+1)%heroSlides.length), 4000); 
    return () => clearInterval(t); 
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      {/* HERO - SHOP COLLECTION AB SCROLL KAREGA */}
      <section className="relative h-[85vh] min-h-[620px] overflow-hidden">
        {heroSlides.map((img,i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i===current?"opacity-100":"opacity-0"} pointer-events-none`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 pointer-events-none" />

        <div className="relative z-20 mx-auto max-w-7xl h-full px-6 lg:px-10 flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white"><Sparkles size={14}/> Thoughtfully Chosen</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.9] tracking-tight text-white">Good things.<br/><span className="font-light text-[#d4b896]">Better living.</span></h1>
              <p className="mt-6 max-w-lg text-white/70 text-[15px] leading-7">Everyday essentials, chosen for the way they look, feel, and fit into your life.</p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* AB YE BUTTON NICHE SCROLL KAREGA */}
                <button onClick={scrollToProducts} className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-bold hover:bg-zinc-100 transition active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer">Shop Collection <ArrowRight size={16}/></button>
                <Link to="/about" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-black transition">Our Philosophy</Link>
              </div>
              <div className="mt-8 flex gap-2">{heroSlides.map((_,i)=><button key={i} onClick={()=>setCurrent(i)} className={`h-1 rounded-full transition-all ${i===current?"w-8 bg-white":"w-4 bg-white/40"}`} />)}</div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto max-w-[340px] rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white text-black grid place-items-center"><Percent size={20}/></div>
                  <div><p className="text-white font-bold leading-none">FLAT 50% OFF</p><p className="text-white/60 text-xs mt-1">Limited Time Offer</p></div>
                </div>
                <div className="rounded-[16px] overflow-hidden h-[200px] bg-zinc-900">
                  <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80" alt="discount" className="w-full h-full object-cover opacity-90" />
                </div>
                <p className="text-white text-sm mt-4 font-medium">Premium collections at half price. Hurry up!</p>
                <button onClick={scrollToProducts} className="mt-4 w-full bg-white text-black rounded-full py-2.5 text-sm font-bold grid place-items-center hover:bg-zinc-100 transition">Claim Offer <ArrowRight size={14} className="inline ml-1"/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOES - YAHAN SCROLL HOGA */}
     {/* SHOES - SHOP CLICK PE YAHAN SCROLL HOGA */}
<section ref={productsRef} id="shoes-collection" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-20">
        <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">01 / Premium</p><h2 className="text-3xl md:text-4xl font-light text-white mt-2">Shoes Collection</h2></div><Link to="/shop?category=shoes" className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all">View All <ArrowRight size={14}/></Link></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Shoes Collection"].items.map(p=><ProductCard key={p.id} product={p} uniformBg={productsByCategory["Shoes Collection"].bg} uniformStyle={productsByCategory["Shoes Collection"].style} />)}</div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
        <div className="rounded-[24px] border border-white/10 bg-gradient-to-r from-zinc-900 to-black px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-white grid place-items-center text-black"><Truck size={20}/></div><div><h4 className="text-white font-semibold">Free & Fast Delivery</h4><p className="text-zinc-500 text-xs">On all orders above Rs 5,000</p></div></div>
          <div className="flex items-center gap-8"><span className="text-zinc-600 text-xs tracking-widest">★★★★★ TRUSTED BY 10K+ CUSTOMERS</span><div className="flex items-center gap-2 text-white text-sm"><ShieldCheck size={16}/> Secure Payment</div></div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />
      </div>

      {/* DRESSES */}
      <section id="dresses-collection" className="mx-auto max-w-7xl px-4 py-16 scroll-mt-20">
        <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">02 / Elegant</p><h2 className="text-3xl md:text-4xl font-light text-white mt-2">Dresses Collection</h2></div><Link to="/shop?category=dresses" className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all">View All <ArrowRight size={14}/></Link></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Dresses Collection"].items.map(p=><ProductCard key={p.id} product={p} uniformBg={productsByCategory["Dresses Collection"].bg} uniformStyle={productsByCategory["Dresses Collection"].style} />)}</div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="rounded-[24px] bg-white text-black p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-full bg-gradient-to-l from-zinc-100 to-transparent pointer-events-none" />
          <div className="relative z-10"><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">Special Discount</p><h3 className="text-3xl font-bold mt-2">Get 30% OFF on Bags</h3><p className="text-zinc-600 text-sm mt-2">Use code: <span className="font-bold text-black bg-zinc-100 px-2 py-1 rounded">BAG30</span> at checkout</p></div>
          <Link to="/shop?category=bags" className="relative z-10 bg-black text-white rounded-full px-8 py-3 text-sm font-bold hover:bg-zinc-800 transition">Shop Now <ArrowRight size={14} className="inline ml-2"/></Link>
        </div>
      </div>

      {/* BAGS */}
      <section id="bags-collection" className="mx-auto max-w-7xl px-4 py-16 pb-24 scroll-mt-20">
        <div className="flex justify-between items-end mb-8"><div><p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">03 / Luxury</p><h2 className="text-3xl md:text-4xl font-light text-white mt-2">Bags Collection</h2></div><Link to="/shop?category=bags" className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all">View All <ArrowRight size={14}/></Link></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">{productsByCategory["Bags Collection"].items.map(p=><ProductCard key={p.id} product={p} uniformBg={productsByCategory["Bags Collection"].bg} uniformStyle={productsByCategory["Bags Collection"].style} />)}</div>
      </section>
    </div>
  );
}
