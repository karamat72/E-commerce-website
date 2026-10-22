import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-PK", { 
    style: "currency", 
    currency: "PKR", 
    maximumFractionDigits: 0 
  }).format(amount);
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Har product ka alag attractive background
  const getBg = (name) => {
    if (!name) return "bg-[#f5f3ef]";
    const n = name.toLowerCase();
    if (n.includes("tote") || n.includes("bag") || n.includes("leather")) return "bg-[#FFF1E6]"; // Peach - Orange Bag
    if (n.includes("vase") || n.includes("ceramic") || n.includes("sculpted")) return "bg-[#E8F0FE]"; // Light Blue - Sofa/Vase
    if (n.includes("headphone") || n.includes("studio") || n.includes("wireless")) return "bg-[#FEF08A]"; // Bright Yellow - Headphones
    if (n.includes("bottle") || n.includes("steel") || n.includes("water")) return "bg-[#DCFCE7]"; // Mint Green - Bottle
    return "bg-[#f5f3ef]";
  };

  const getGlow = (name) => {
    if (!name) return "bg-zinc-300";
    const n = name.toLowerCase();
    if (n.includes("tote") || n.includes("bag")) return "bg-orange-400";
    if (n.includes("vase") || n.includes("ceramic")) return "bg-blue-400";
    if (n.includes("headphone") || n.includes("studio")) return "bg-yellow-400";
    if (n.includes("bottle")) return "bg-green-400";
    return "bg-zinc-300";
  };

  return (
    <article className="group">
      <div className={`relative overflow-hidden rounded-[28px] ${getBg(product.name)} p-3 border border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`}>
        
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy" 
            className="aspect-[4/5] w-full object-contain rounded-[20px] bg-white/70 backdrop-blur group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" 
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-6 top-6 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-black tracking-widest shadow-sm border border-white">
            {product.badge}
          </span>
        )}

        {/* Glow Effect on Hover */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[40px] opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none ${getGlow(product.name)}`}></div>

        {/* Add to Cart Button - Animated */}
        <button 
          onClick={() => addToCart(product)} 
          aria-label={`Add ${product.name} to cart`}
          className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-800 hover:scale-105"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 px-1.5 flex justify-between items-start">
        <div className="space-y-1">
          <Link to={`/product/${product.id}`} className="text-[14.5px] font-medium leading-tight hover:underline decoration-zinc-300 underline-offset-4">
            {product.name}
          </Link>
          <p className="text-[14px] font-bold">{formatPrice(product.price)}</p>
        </div>
        <Link to={`/product/${product.id}`} className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
