import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(amount);
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl bg-[#e9e5dc]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img src={product.image} alt={product.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
        </Link>
        {product.badge && <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-ink">{product.badge}</span>}
        <button onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`} className="absolute bottom-3 right-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 shadow-soft transition duration-300 hover:bg-ink hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100">
          <ShoppingBag size={17} />
        </button>
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted">{product.category}</p>
          <Link to={`/product/${product.id}`} className="font-semibold tracking-tight text-ink hover:underline">{product.name}</Link>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-xs text-muted line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
        </div>
        <Link to={`/product/${product.id}`} aria-label={`Details for ${product.name}`} className="mt-4 text-muted transition hover:text-ink"><ArrowUpRight size={18} /></Link>
      </div>
      <div className="mt-3 sm:hidden">
        <Button onClick={() => addToCart(product)} className="w-full py-2.5 text-xs"><ShoppingBag size={14} /> Add to cart</Button>
      </div>
    </article>
  );
}
