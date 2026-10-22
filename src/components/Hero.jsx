import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#fcfcf9] flex items-center">
      
      {/* ===== ANIMATED BACKGROUND BLOBS ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-violet-200 via-indigo-100 to-pink-100 rounded-full blur-[80px] opacity-60 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 rounded-full blur-[80px] opacity-60 animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-32 left-1/3 w-[700px] h-[400px] bg-gradient-to-r from-blue-50 to-teal-50 rounded-full blur-[90px] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-7 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[11px] tracking-[0.2em] font-semibold text-zinc-600">NEW • CURATED FOR COMFORT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[300] leading-[0.95] tracking-tight">
            <span className="font-serif italic font-light block">Good things.</span>
            <span className="font-serif italic font-light block text-zinc-400">Better living.</span>
          </h1>

          <p className="text-[16px] leading-7 text-zinc-600 max-w-[420px]">
            Elevate your everyday with thoughtfully designed furniture and home goods for a calmer, more beautiful life.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/shop" className="group bg-black text-white px-8 py-4 rounded-full text-[14px] font-medium flex items-center gap-3 hover:bg-zinc-800 transition-all hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              Shop Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full text-[14px] font-medium border border-zinc-300 hover:border-black hover:bg-white transition-all">
              Our Philosophy
            </Link>
          </div>

          <div className="flex gap-6 pt-6 text-[12.5px] text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">✓ Free shipping $100+</span>
            <span className="flex items-center gap-1.5">✓ 2-Year Warranty</span>
            <span className="hidden sm:flex items-center gap-1.5">✓ 30-Day Returns</span>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING CARDS */}
        <div className="relative lg:h-[600px] h-[480px] z-10">
          {/* Main Image */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958" 
              alt="Modern living room"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating Product Card 1 */}
          <div className="absolute -left-6 top-16 bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 flex gap-3 w-[300px] animate-[floatCard_6s_ease-in-out_infinite]">
            <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200" className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="text-[13px] font-semibold">Ceramic Table Lamp</p>
              <p className="text-[11px] text-zinc-500">Warm glow • Linen shade</p>
              <p className="text-[13px] font-bold mt-1">$89</p>
            </div>
            <button className="w-8 h-8 bg-black text-white rounded-full text-sm">+</button>
          </div>

          {/* Floating Product Card 2 */}
          <div className="absolute -right-2 lg:-right-8 bottom-20 bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 flex gap-3 w-[280px] animate-[floatCard_6s_ease-in-out_infinite_1s]">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=200" className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="text-[13px] font-semibold">Boucle Lounge Chair</p>
              <p className="text-[11px] text-zinc-500">Best seller</p>
              <p className="text-[13px] font-bold mt-1">$429</p>
            </div>
          </div>

          {/* Live Badge */}
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 text-[11px] font-medium shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            Live Demo
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
