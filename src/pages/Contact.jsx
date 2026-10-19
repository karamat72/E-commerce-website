import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

const initial = { name: "", email: "", topic: "Product question", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (!Object.keys(next).length) {
      setSent(true);
      setForm(initial);
    }
  };

  const fieldClass = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-ink";
  return (
    <div className="min-h-[60vh] bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">We’re here to help</p>
        <h1 className="text-4xl font-semibold tracking-[-.05em] text-ink sm:text-5xl">Let’s talk<span className="text-bronze">.</span></h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted">Have a question about a product or this demo store? Send a note using the form below.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-4">
            {[{icon:Mail,title:"Email",text:"hello@reactstore.example"},{icon:Phone,title:"Phone",text:"+92 300 0000000"},{icon:MapPin,title:"Based in",text:"Pakistan"}].map(({icon:Icon,title,text})=><div key={title} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ivory"><Icon size={18}/></span><div><h2 className="text-sm font-semibold text-ink">{title}</h2><p className="mt-1 text-sm text-muted">{text}</p></div></div>)}
            <p className="rounded-xl bg-[#e9e8df] p-4 text-xs leading-6 text-muted">Demo details: these contact details are placeholders. This form validates locally and does not send a real message.</p>
          </div>
          <form onSubmit={submit} noValidate className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-8">
            {sent && <div role="status" className="mb-5 flex items-start gap-3 rounded-xl bg-[#e6eee6] p-4 text-sm text-ink"><CheckCircle2 size={18} className="mt-0.5 shrink-0"/><span><strong>Message checked successfully.</strong><br/>This is a demo confirmation only. No message was sent.</span></div>}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="mb-2 block text-xs font-semibold text-ink">Your name *</span><input name="name" value={form.name} onChange={onChange} className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`} placeholder="Name"/>{errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}</label>
              <label className="block"><span className="mb-2 block text-xs font-semibold text-ink">Email address *</span><input name="email" type="email" value={form.email} onChange={onChange} className={`${fieldClass} ${errors.email ? "border-red-500" : ""}`} placeholder="you@example.com"/>{errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}</label>
              <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-ink">What’s this about?</span><select name="topic" value={form.topic} onChange={onChange} className={fieldClass}><option>Product question</option><option>Order support</option><option>Feedback</option><option>Something else</option></select></label>
              <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-ink">Message *</span><textarea name="message" value={form.message} onChange={onChange} rows="5" className={`${fieldClass} resize-y ${errors.message ? "border-red-500" : ""}`} placeholder="How can we help?"/>{errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}</label>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">Send demo message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
