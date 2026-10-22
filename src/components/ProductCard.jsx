import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-PK", { 
    style: "currency", 
    currency: "PKR", 
    maximumFractionDigits: 0 
  }).format(amount);
}

export default function ProductCard({ product, uniformBg, uniformStyle }) {
  const { addToCart } = useCart();

  return (
    <article className={`rounded-[20px] p-3 border border-zinc-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${uniformBg || "bg-white"}`}>
      
      {/* Image Box - Uniform Background */}
      <div className={`rounded-[16px] aspect-square flex items-center justify-center p-6 overflow-hidden ${uniformStyle?.innerBg || "bg-zinc-50"}`}>
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      <div className={`mt-4 px-2 pb-2 flex-1 flex flex-col ${uniformStyle?.textColor || "text-black"}`}>
        <div className="flex justify-between items-center">
          <p className="font-bold text-[15px]">{formatPrice(product.price)}</p>
          {product.badge && <span className={`text-[9px] px-2 py-1 rounded-full font-bold ${uniformStyle?.badge || "bg-zinc-100"}`}>{product.badge}</span>}
        </div>
        <h3 className="text-[13px] font-semibold mt-2 line-clamp-1">{product.name}</h3>
        <p className={`text-[11px] mt-1 line-clamp-1 ${uniformStyle?.subText || "text-zinc-500"}`}>{product.sub || "Premium quality — uniform collection"}</p>
        
        <button onClick={() => addToCart(product)} className={`mt-4 w-full py-2.5 rounded-full text-[12px] font-medium transition ${uniformStyle?.button || "bg-black text-white hover:bg-zinc-800"}`}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
