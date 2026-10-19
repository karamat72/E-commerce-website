import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { formatPrice } from "../components/ProductCard";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <div className="mx-auto max-w-7xl px-4 py-20 text-center"><h1 className="text-3xl font-semibold">Product not found</h1><Link to="/shop" className="mt-4 inline-block underline">Back to shop</Link></div>;

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/shop" className="mb-7 inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink"><ArrowLeft size={15}/> Back to shop</Link>
        <div className="grid gap-9 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#e9e5dc]"><img src={product.image} alt={product.name} className="aspect-[4/4.5] w-full object-cover" /></div>
          <div className="flex flex-col justify-center py-2 md:py-8">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-bronze">{product.category} / {product.color}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.05em] text-ink sm:text-5xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-3"><span className="text-xl font-semibold">{formatPrice(product.price)}</span>{product.oldPrice && <span className="text-sm text-muted line-through">{formatPrice(product.oldPrice)}</span>}{product.badge && <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-ink">{product.badge}</span>}</div>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted">{product.description}</p>
            <div className="mt-7 border-y border-ink/10 py-5"><p className="mb-3 text-xs font-bold uppercase tracking-[.12em] text-ink">Quantity</p><div className="inline-flex items-center gap-5 rounded-full border border-ink/15 bg-white p-1.5"><button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="grid h-8 w-8 place-items-center rounded-full hover:bg-ivory"><Minus size={15}/></button><span className="min-w-4 text-center text-sm font-semibold">{quantity}</span><button onClick={() => setQuantity((q) => Math.min(10, q + 1))} aria-label="Increase quantity" className="grid h-8 w-8 place-items-center rounded-full hover:bg-ivory"><Plus size={15}/></button></div><p className="mt-2 text-xs text-muted">Maximum 10 per item in this demo.</p></div>
            <Button onClick={handleAdd} className="mt-6 w-full sm:w-auto"><ShoppingBag size={17}/>{added ? "Added to cart" : "Add to cart — " + formatPrice(product.price * quantity)}</Button>
            {added && <p role="status" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink"><Check size={16} className="text-green-700"/> Added to your bag successfully.</p>}
            <div className="mt-7 rounded-2xl bg-white p-4 text-xs leading-6 text-muted"><strong className="text-ink">A note on checkout</strong><br/>This is a frontend demo store. You can test the full cart and checkout experience; no payment is taken and no real order is sent.</div>
            <button onClick={() => navigate("/cart")} className="mt-5 text-left text-sm font-semibold text-ink underline underline-offset-4">View shopping bag</button>
          </div>
        </div>
        <div className="mt-16 grid gap-4 border-t border-ink/10 py-8 sm:grid-cols-3">
          {["Considered everyday design", "Clear prices before checkout", "Easy cart quantity controls"].map((text) => <div key={text} className="flex items-center gap-3 text-sm text-muted"><Check size={16} className="text-bronze"/>{text}</div>)}
        </div>
      </div>
    </div>
  );
}
