import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";
import Button from "../components/Button";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  return (
    <div className="min-h-[60vh] bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">Your selections</p>
        <h1 className="text-4xl font-semibold tracking-[-.05em] text-ink sm:text-5xl">Shopping bag<span className="text-bronze">.</span></h1>
        <p className="mt-3 text-sm text-muted">{cart.length ? "A good choice. Review your items below." : "Your bag is ready for something good."}</p>
        {!cart.length ? (
          <div className="mt-10 rounded-[2rem] border border-ink/10 bg-white px-5 py-16 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ivory text-ink"><ShoppingBag size={25}/></span>
            <h2 className="mt-5 text-xl font-semibold text-ink">Your bag is empty</h2>
            <p className="mt-2 text-sm text-muted">Explore our collection and find a new everyday favourite.</p>
            <Link to="/shop" className="mt-6 inline-block"><Button>Explore products</Button></Link>
          </div>
        ) : (
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              {cart.map((item, index) => (
                <div key={item.id} className={`flex gap-4 p-4 sm:gap-5 sm:p-6 ${index ? "border-t border-ink/10" : ""}`}>
                  <Link to={`/product/${item.id}`} className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-ivory sm:h-36 sm:w-32"><img src={item.image} alt={item.name} className="h-full w-full object-cover"/></Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-muted">{item.category}</p>
                    <Link to={`/product/${item.id}`} className="mt-1 font-semibold text-ink hover:underline">{item.name}</Link>
                    <p className="mt-2 text-sm font-semibold">{formatPrice(item.price)}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                      <div className="inline-flex items-center gap-3 rounded-full border border-ink/10 p-1"><button onClick={() => item.quantity === 1 ? removeFromCart(item.id) : updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="grid h-7 w-7 place-items-center rounded-full hover:bg-ivory"><Minus size={13}/></button><span className="text-xs font-semibold">{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" className="grid h-7 w-7 place-items-center rounded-full hover:bg-ivory"><Plus size={13}/></button></div>
                      <div className="flex items-center gap-3"><span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span><button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="text-muted transition hover:text-red-600"><Trash2 size={16}/></button></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="rounded-2xl border border-ink/10 bg-white p-6">
              <h2 className="text-lg font-semibold text-ink">Order summary</h2>
              <div className="mt-6 flex justify-between text-sm text-muted"><span>Subtotal</span><span className="font-semibold text-ink">{formatPrice(subtotal)}</span></div>
              <div className="mt-4 flex justify-between text-sm text-muted"><span>Delivery</span><span className="font-medium text-ink">Calculated at checkout</span></div>
              <div className="my-5 border-t border-ink/10"/>
              <p className="text-xs leading-6 text-muted">Delivery details are collected at checkout. This demo does not take payment.</p>
              <Link to="/checkout" className="mt-6 block"><Button className="w-full">Continue to checkout</Button></Link>
              <Link to="/shop" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-muted hover:text-ink"><ArrowLeft size={14}/> Continue shopping</Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
