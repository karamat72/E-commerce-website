import { CheckCircle2, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { formatPrice } from "../components/ProductCard";

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    try {
      setOrder(JSON.parse(sessionStorage.getItem("react-store-last-order") || "null"));
    } catch {
      setOrder(null);
    }
  }, []);

  return (
    <div className="min-h-[60vh] bg-ivory px-4 py-16">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-ink/10 bg-white px-6 py-12 text-center sm:px-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e6eee6] text-ink"><CheckCircle2 size={31}/></span>
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">Order confirmed in demo</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-ink sm:text-4xl">That’s a good choice.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">Your frontend demo order has been recorded for this session. No payment was taken and nothing was sent to a real store.</p>
        {order && <div className="mt-8 rounded-2xl bg-ivory p-5 text-left"><div className="flex items-center justify-between gap-3"><span className="text-xs text-muted">Demo order number</span><strong className="text-sm text-ink">{order.orderNumber}</strong></div><div className="mt-3 flex items-center justify-between gap-3"><span className="text-xs text-muted">Items</span><strong className="text-sm text-ink">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</strong></div><div className="mt-3 flex items-center justify-between gap-3"><span className="text-xs text-muted">Demo total</span><strong className="text-sm text-ink">{formatPrice(order.total)}</strong></div></div>}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/shop"><Button><PackageCheck size={16}/> Continue shopping</Button></Link><Link to="/"><Button variant="secondary">Back to home</Button></Link></div>
      </div>
    </div>
  );
}
