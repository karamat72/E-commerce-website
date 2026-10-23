import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(amount);
}

export default function ProductCard({ product, uniformBg, uniformStyle }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };

  return (
    <article className={`rounded-[22px] p-3 border border-white/10 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${uniformBg}`}>
      <div className={`rounded-[16px] aspect-square flex items-center justify-center p-6 overflow-hidden ${uniformStyle.innerBg}`}>
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" />
        </Link>
      </div>
      <div className={`mt-4 px-2 pb-2 flex-1 flex flex-col ${uniformStyle.textColor}`}>
        <div className="flex justify-between items-center"><p className="font-bold text-[14px]">{formatPrice(product.price)}</p>{product.badge && <span className={`text-[8px] px-2.5 py-1 rounded-full font-bold ${uniformStyle.badge}`}>{product.badge}</span>}</div>
        <h3 className="text-[13px] font-semibold mt-2 line-clamp-1">{product.name}</h3>
        <p className={`text-[11px] mt-1 ${uniformStyle.subText}`}>{product.sub}</p>
        <button onClick={handleAddToCart} className={`mt-4 w-full py-2.5 rounded-full text-[12px] font-bold active:scale-95 transition ${uniformStyle.button}`}>Add to Cart</button>
      </div>
    </article>
  );
}
