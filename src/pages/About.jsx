import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Heart, Truck, Calendar, Award, Sparkles, Check } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden bg-[#0f0f0f] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#151515] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400"><Sparkles size={12}/> A Little About Us</p>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.9] tracking-tight">Less clutter.<br/><span className="font-light text-white">More meaning.</span></h1>
            <p className="mt-6 text-zinc-400 leading-7 max-w-xl text-[15px]">My Store is not just a shop — it's a promise. A promise of quality, trust, and better living. Since day one, we have chosen only what we truly believe in.</p>
            <div className="mt-8 flex items-center gap-6">
              <div><p className="text-2xl font-bold">2023</p><p className="text-[10px] text-zinc-500 uppercase">Started</p></div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div><p className="text-2xl font-bold">10K+</p><p className="text-[10px] text-zinc-500 uppercase">Happy Customers</p></div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div><p className="text-2xl font-bold">100%</p><p className="text-[10px] text-zinc-500 uppercase">Trusted</p></div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden bg-[#151515] border border-white/10 p-2">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90" alt="store" className="rounded-[20px] w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-[20px] bg-white text-black p-5 shadow-2xl max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white grid place-items-center"><ShieldCheck size={18}/></div>
                <div><p className="font-bold text-sm">Trusted Store</p><p className="text-xs text-zinc-500">Verified since 2023</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">Our Journey</p>
            <h2 className="text-3xl font-light mt-3">From an idea to 10,000 smiles.</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-[20px] bg-[#0f0f0f] border border-white/10 p-6 flex gap-6">
              <div className="w-10 h-10 rounded-full bg-white text-black grid place-items-center font-bold text-xs shrink-0">23</div>
              <div>
                <p className="flex items-center gap-2 text-xs text-zinc-500 uppercase"><Calendar size={12}/> Jan 15, 2023 — The Beginning</p>
                <h3 className="text-lg font-semibold mt-2">The Dream Started</h3>
                <p className="text-zinc-400 text-sm mt-2 leading-6">We created My Store because we couldn't find real quality in the market. We wanted every product you buy to be useful, beautiful, and chosen from the heart.</p>
              </div>
            </div>
            <div className="rounded-[20px] bg-[#0f0f0f] border border-white/10 p-6 flex gap-6">
              <div className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 text-white grid place-items-center font-bold text-xs shrink-0">24</div>
              <div>
                <p className="flex items-center gap-2 text-xs text-zinc-500 uppercase"><Calendar size={12}/> Jun 10, 2024 — Growth</p>
                <h3 className="text-lg font-semibold mt-2">Building Trust</h3>
                <p className="text-zinc-400 text-sm mt-2 leading-6">Over 5,000 customers trusted us. We expanded into Shoes, Dresses, and Bags — with one rule: No compromise on quality.</p>
              </div>
            </div>
            <div className="rounded-[20px] bg-white text-black p-6 flex gap-6">
              <div className="w-10 h-10 rounded-full bg-black text-white grid place-items-center font-bold text-xs shrink-0">26</div>
              <div>
                <p className="flex items-center gap-2 text-xs text-zinc-500 uppercase"><Calendar size={12}/> Oct 23, 2026 — Today</p>
                <h3 className="text-lg font-semibold mt-2">Your Own Store</h3>
                <p className="text-zinc-600 text-sm mt-2 leading-6">Today we serve over 10,000 happy families. Our mission is not just to sell — but to make your life a little better. We send blessings with every order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f0f0f]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 text-white grid place-items-center"><ShieldCheck size={20}/></div><div><p className="font-bold text-sm">100% Original</p><p className="text-xs text-zinc-500 mt-1">Guaranteed</p></div></div>
          <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 text-white grid place-items-center"><Truck size={20}/></div><div><p className="font-bold text-sm">Fast Delivery</p><p className="text-xs text-zinc-500 mt-1">2-3 days in Pakistan</p></div></div>
          <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 text-white grid place-items-center"><Heart size={20}/></div><div><p className="font-bold text-sm">Made with Love</p><p className="text-xs text-zinc-500 mt-1">Chosen with care</p></div></div>
          <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 text-white grid place-items-center"><Award size={20}/></div><div><p className="font-bold text-sm">30 Days Return</p><p className="text-xs text-zinc-500 mt-1">No questions asked</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 text-center bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-[#0f0f0f] border border-white/10 p-10 md:p-14">
          <p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">Our Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-light mt-4 leading-[1.1]">We don't just sell products.<br/>We sell <span className="font-semibold text-white">trust and quality.</span></h2>
          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-sm leading-7">My Store started as a small dream and grew because of your trust. Every day we strive to deliver what we would choose for our own family. Believe in quality. Believe in us.</p>
          <div className="mt-8 flex justify-center gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400"><Check size={14} className="text-white"/> Trusted</div>
            <div className="flex items-center gap-2 text-xs text-zinc-400"><Check size={14} className="text-white"/> Quality</div>
            <div className="flex items-center gap-2 text-xs text-zinc-400"><Check size={14} className="text-white"/> Fast</div>
          </div>
          <div className="mt-10"><Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-sm font-bold hover:bg-zinc-200 transition">Shop Our Collections <ArrowRight size={16}/></Link></div>
        </div>
      </section>
    </div>
  );
}
