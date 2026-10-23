import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

const productsByCategory = {
  "Shoes Collection": {
    bg: "bg-[#0f0f0f]", style: { innerBg: "bg-[#050505]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black" },
    items: [
      { id: 1, name: "Air White Sneakers", price: 12490, badge: "Bestseller", sub: "Pure White", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=90" },
      { id: 2, name: "Classic White Sneakers", price: 8490, badge: "New", sub: "Pure White", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=90" },
      { id: 3, name: "Running White Pro", price: 10990, sub: "Pure White", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=90" },
      { id: 4, name: "Street White Sneakers", price: 9490, sub: "Pure White", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=90" },
    ]
  },
  "Dresses Collection": {
    bg: "bg-[#0f0f0f]", style: { innerBg: "bg-[#050505]", textColor: "text-white", subText: "text-zinc-400", badge: "bg-white text-black", button: "bg-white text-black" },
    items: [
      { id: 5, name: "Elegant Black Dress", price: 5490, badge: "New", sub: "Jet Black", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=90" },
      { id: 6, name: "Classic Black Dress", price: 8990, sub: "Jet Black", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90" },
      { id: 7, name: "Evening Black Dress", price: 4290, sub: "Jet Black", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=90" },
      { id: 8, name: "Party Black Gown", price: 12490, sub: "Jet Black", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=90" },
    ]
  },
};

export default function Home() {
  return (
    <>
      {/* ===== VIDEO BACKGROUND HERO - Professional Human E-commerce ===== */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/5707690/5707690-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback for professional e-commerce human video */}
          <source src="https://cdn.coverr.co/videos/coverr-girl-shopping-online-1573/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* Content Over Video */}
        <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white">
              <Sparkles size={14} className="text-white" /> Thoughtfully chosen, always
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[-.05em] text-white">
              Good things. <br />
              <span className="font-normal text-[#d4b896]">Better living.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/80">
              Everyday essentials, chosen for the way they look, feel, and fit into your life. 
              Professional shopping experience with human touch.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop">
                <Button className="bg-white text-black hover:bg-zinc-100">
                  Shop Collection <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white hover:text-black transition">
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Products - All Black Background */}
      <section className="bg-black mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 space-y-20">
        {Object.entries(productsByCategory).map(([catName, data]) => (
          <div key={catName}>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">{catName}</h2>
              <Link to="/shop" className="text-white text-sm flex items-center gap-2">View All <ArrowRight size={14} /></Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {data.items.map(p => <ProductCard key={p.id} product={p} uniformBg={data.bg} uniformStyle={data.style} />)}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
