import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] text-zinc-300 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-light tracking-widest text-white">FORMA</h2>
            <p className="text-[14px] leading-6 text-zinc-400 max-w-[280px]">
              Thoughtfully selected essentials for a more beautiful, comfortable and considered everyday life.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">𝕏</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">◈</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">◎</a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold text-zinc-500 mb-6">EXPLORE</h4>
            <ul className="space-y-3.5 text-[14px]">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Customer Care */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold text-zinc-500 mb-6">CUSTOMER CARE</h4>
            <ul className="space-y-3.5 text-[14px]">
              <li><Link to="/cart" className="hover:text-white transition">Your Shopping Bag</Link></li>
              <li><a href="#" className="hover:text-white transition">Help & Support</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Questions</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Column 4 - Get in Touch */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold text-zinc-500 mb-6">GET IN TOUCH</h4>
            <div className="space-y-3 text-[14px] text-zinc-400">
              <p className="flex items-center gap-2">✉️ contact@forma.store</p>
              <p className="flex items-center gap-2">💬 Customer assistance</p>
              <p className="flex items-center gap-2">📍 Here to help, wherever you are</p>
            </div>

            <div className="mt-8">
              <p className="text-[13px] font-medium text-white mb-3">Subscribe for 10% off</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30"
                />
                <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition">Join</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-zinc-500">
          <p>© {new Date().getFullYear()} FORMA. All rights reserved.</p>
          <p className="flex items-center gap-2">Made with care, designed to last. <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span></p>
        </div>
      </div>
    </footer>
  );
}
