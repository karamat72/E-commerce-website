import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const whatsappNumber = "923554576050"; // 03554576050 -> international
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello My Store! Mujhe aapke products ke baare me puchna hai.")}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp par message bhejo form data ke saath
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HEADER - Same as Home/About */}
      <section className="bg-[#0f0f0f] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#151515] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400"><Sparkles size={12}/> We're Here To Help</p>
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">Let's talk.</h1>
          <p className="mt-4 text-zinc-500 max-w-xl text-[15px]">Have a question about a product or this demo store? Send a note using the form below. We reply within 24 hours.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-3 gap-10">
        {/* LEFT CONTACT CARDS */}
        <div className="space-y-4">
          <div className="rounded-[20px] bg-[#0f0f0f] border border-white/10 p-6 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 grid place-items-center"><Mail size={18}/></div>
            <div><p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p><p className="font-semibold mt-1 text-sm">hello@mystore.example</p><p className="text-xs text-zinc-500 mt-1">Reply in 24h</p></div>
          </div>

          <div className="rounded-[20px] bg-[#0f0f0f] border border-white/10 p-6 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 grid place-items-center"><Phone size={18}/></div>
            <div><p className="text-xs text-zinc-500 uppercase tracking-widest">Phone</p><p className="font-semibold mt-1 text-sm">+92 355 457 6050</p><p className="text-xs text-zinc-500 mt-1">03554576050</p></div>
          </div>

          <div className="rounded-[20px] bg-[#0f0f0f] border border-white/10 p-6 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 grid place-items-center"><MapPin size={18}/></div>
            <div><p className="text-xs text-zinc-500 uppercase tracking-widest">Based In</p><p className="font-semibold mt-1 text-sm">Pakistan</p><p className="text-xs text-zinc-500 mt-1">Deliver all over Pakistan</p></div>
          </div>

          {/* WHATSAPP CARD - Main */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-[20px] bg-[#25D366] text-black p-6 flex gap-4 hover:bg-[#20bd5a] transition block">
            <div className="w-10 h-10 rounded-full bg-black text-[#25D366] grid place-items-center"><MessageCircle size={20}/></div>
            <div><p className="text-xs uppercase tracking-widest font-bold opacity-80">Chat on WhatsApp</p><p className="font-bold mt-1">0355 457 6050</p><p className="text-xs mt-1 font-medium">Click to open WhatsApp</p></div>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-2 rounded-[28px] bg-[#0f0f0f] border border-white/10 p-8">
          <h3 className="text-xl font-semibold">Send us a message</h3>
          <p className="text-zinc-500 text-sm mt-2">Form bharo — direct WhatsApp par chala jayega</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div><label className="text-xs text-zinc-400 uppercase tracking-widest">Your name *</label><input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Saima" className="mt-2 w-full rounded-full bg-[#151515] border border-white/10 px-5 py-3.5 text-sm outline-none focus:border-white/30" /></div>
            <div><label className="text-xs text-zinc-400 uppercase tracking-widest">Email address *</label><input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="you@example.com" className="mt-2 w-full rounded-full bg-[#151515] border border-white/10 px-5 py-3.5 text-sm outline-none focus:border-white/30" /></div>
            <div className="md:col-span-2"><label className="text-xs text-zinc-400 uppercase tracking-widest">What's this about?</label><select value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} className="mt-2 w-full rounded-full bg-[#151515] border border-white/10 px-5 py-3.5 text-sm outline-none focus:border-white/30"><option>Product question</option><option>Order status</option><option>Return / Exchange</option><option>Other</option></select></div>
            <div className="md:col-span-2"><label className="text-xs text-zinc-400 uppercase tracking-widest">Message *</label><textarea required rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="How can we help?" className="mt-2 w-full rounded-[20px] bg-[#151515] border border-white/10 px-5 py-4 text-sm outline-none focus:border-white/30 resize-none" /></div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-sm font-bold hover:bg-zinc-200 transition"><Send size={16}/> Send via WhatsApp</button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-black px-8 py-3.5 text-sm font-bold hover:bg-[#20bd5a] transition"><MessageCircle size={16}/> Direct WhatsApp</a>
            </div>
          </form>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:scale-110 transition">
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
