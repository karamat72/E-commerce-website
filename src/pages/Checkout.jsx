import { ArrowLeft, CheckCircle2, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";
import Button from "../components/Button";

const initialForm = { firstName: "", lastName: "", email: "", phone: "", address: "", city: "", postalCode: "", notes: "" };

function Field({ label, name, value, onChange, error, required = true, type = "text", ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-ink">{label}{required && <span className="text-bronze"> *</span>}</span>
      <input name={name} type={type} value={value} onChange={onChange} required={required} {...props} className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-ink ${error ? "border-red-500" : "border-ink/15"}`} />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  if (!cart.length) return <div className="mx-auto max-w-3xl px-4 py-20 text-center"><h1 className="text-3xl font-semibold text-ink">Nothing to check out yet</h1><p className="mt-3 text-sm text-muted">Add a product to your bag before continuing.</p><Link to="/shop" className="mt-5 inline-block underline">Browse products</Link></div>;

  const delivery = subtotal >= 10000 ? 0 : 350;
  const total = subtotal + delivery;
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setNotice("");
  };

  const validate = () => {
    const next = {};
    ["firstName", "lastName", "email", "phone", "address", "city"].forEach((key) => {
      if (!form[key].trim()) next[key] = "This field is required.";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.phone && form.phone.replace(/\D/g, "").length < 7) next.phone = "Enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setNotice("Please check the highlighted fields and try again.");
      return;
    }
    const order = {
      orderNumber: `RS-${Date.now().toString().slice(-6)}`,
      customer: form,
      items: cart.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total,
      createdAt: new Date().toISOString()
    };
    sessionStorage.setItem("react-store-last-order", JSON.stringify(order));
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="min-h-[60vh] bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Link to="/cart" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"><ArrowLeft size={14}/> Back to bag</Link>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">Almost there</p>
        <h1 className="text-4xl font-semibold tracking-[-.05em] text-ink sm:text-5xl">Checkout<span className="text-bronze">.</span></h1>
        <p className="mt-3 text-sm text-muted">Add your delivery details and review your order.</p>
        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[1fr_370px]">
          <form onSubmit={submit} noValidate className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-8">
            <div className="mb-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory"><LockKeyhole size={18}/></span><div><h2 className="font-semibold text-ink">Delivery information</h2><p className="mt-1 text-xs text-muted">Fields marked with * are required.</p></div></div>
            {notice && <p role="alert" className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{notice}</p>}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" name="firstName" value={form.firstName} onChange={onChange} error={errors.firstName} autoComplete="given-name"/>
              <Field label="Last name" name="lastName" value={form.lastName} onChange={onChange} error={errors.lastName} autoComplete="family-name"/>
              <Field label="Email address" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} autoComplete="email"/>
              <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={onChange} error={errors.phone} autoComplete="tel"/>
              <div className="sm:col-span-2"><Field label="Street address" name="address" value={form.address} onChange={onChange} error={errors.address} autoComplete="street-address" placeholder="House / street / area"/></div>
              <Field label="City" name="city" value={form.city} onChange={onChange} error={errors.city} autoComplete="address-level2"/>
              <Field label="Postal code" name="postalCode" value={form.postalCode} onChange={onChange} required={false} autoComplete="postal-code"/>
              <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-ink">Delivery notes <span className="font-normal text-muted">(optional)</span></span><textarea name="notes" value={form.notes} onChange={onChange} rows="3" placeholder="Anything the delivery team should know?" className="w-full resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:border-ink"/></label>
            </div>
            <div className="mt-7 rounded-xl bg-ivory p-4 text-xs leading-6 text-muted"><strong className="text-ink">Demo checkout only.</strong> No payment will be processed and no real order or delivery request will be sent.</div>
            <Button type="submit" className="mt-6 w-full">Place demo order · {formatPrice(total)}</Button>
          </form>
          <aside className="rounded-2xl border border-ink/10 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">Your order</h2>
            <div className="mt-5 space-y-4">
              {cart.map((item) => <div key={item.id} className="flex gap-3"><img src={item.image} alt="" className="h-16 w-14 rounded-lg object-cover"/><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-ink">{item.name}</p><p className="mt-1 text-xs text-muted">Qty: {item.quantity}</p></div><span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span></div>)}
            </div>
            <div className="my-5 border-t border-ink/10"/>
            <div className="flex justify-between text-sm text-muted"><span>Subtotal</span><span className="text-ink">{formatPrice(subtotal)}</span></div>
            <div className="mt-3 flex justify-between text-sm text-muted"><span>Delivery</span><span className="text-ink">{delivery ? formatPrice(delivery) : "Free"}</span></div>
            {subtotal < 10000 && <p className="mt-2 text-xs text-muted">Free demo delivery on orders over PKR 10,000.</p>}
            <div className="my-5 border-t border-ink/10"/>
            <div className="flex justify-between"><span className="font-semibold text-ink">Total</span><span className="text-lg font-bold text-ink">{formatPrice(total)}</span></div>
          </aside>
        </div>
      </div>
    </div>
  );
}
