import {
  ArrowDownRight,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Leaf,
} from "lucide-react";

import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

/* ===== NEW: Attractive Category Wise Products ===== */
const productsByCategory = {
  "Shoes Collection": [
    { id: 1, name: "Air Max Sneakers", price: 12490, badge: "Bestseller", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
    { id: 2, name: "Classic White Sneakers", price: 8490, badge: "New", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80" },
    { id: 3, name: "Running Pro Shoes", price: 10990, badge: "Popular", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80" },
    { id: 4, name: "Casual Street Sneakers", price: 9490, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
  ],
  "Dresses Collection": [
    { id: 5, name: "Summer Floral Dress", price: 5490, badge: "New", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80" },
    { id: 6, name: "Elegant Evening Dress", price: 8990, badge: "Trending", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80" },
    { id: 7, name: "Casual Cotton Dress", price: 4290, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" },
    { id: 8, name: "Party Wear Gown", price: 12490, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80" },
  ],
  "Bags Collection": [
    { id: 9, name: "Luxury Leather Handbag", price: 7490, badge: "Bestseller", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80" },
    { id: 10, name: "Everyday Linen Tote", price: 2490, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80" },
    { id: 11, name: "Crossbody Mini Bag", price: 3990, badge: "New", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
    { id: 12, name: "Office Laptop Bag", price: 5990, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80" },
  ],
};

/* Categories */
const categories = [
  {
    name: "Home",
    subtitle: "Make room for calm",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tech",
    subtitle: "Better everyday tools",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accessories",
    subtitle: "The finishing touches",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="forma-hero relative isolate overflow-hidden bg-ivory">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div className="hero-content">
            <p className="hero-label mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[.17em] text-ink sm:text-xs">
              <Sparkles size={15} className="text-bronze" />
              Thoughtfully chosen, always
            </p>

            <h1 className="hero-heading max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] text-ink sm:text-6xl lg:text-7xl xl:text-[82px]">
              <span className="block whitespace-nowrap">Good things.</span>
              <span className="hero-gold mt-1 block whitespace-nowrap font-normal">Better living.</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Everyday essentials, chosen for the way they look, feel, and fit into your life. Discover pieces worth keeping around.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop">
                <Button>
                  Shop Collection <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-bronze hover:text-bronze">
                Our Philosophy
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-ink/10 pt-6">
              <div className="pr-3">
                <Truck size={22} strokeWidth={1.6} className="mb-3 text-bronze" />
                <p className="text-xs font-semibold text-ink sm:text-sm">Easy Shopping</p>
                <p className="mt-1 text-[10px] leading-4 text-muted sm:text-xs">Simple ordering</p>
              </div>
              <div className="border-x border-ink/10 px-3 sm:px-5">
                <ShieldCheck size={22} strokeWidth={1.6} className="mb-3 text-bronze" />
                <p className="text-xs font-semibold text-ink sm:text-sm">Secure Checkout</p>
                <p className="mt-1 text-[10px] leading-4 text-muted sm:text-xs">Review before ordering</p>
              </div>
              <div className="pl-3 sm:pl-5">
                <Leaf size={22} strokeWidth={1.6} className="mb-3 text-bronze" />
                <p className="text-xs font-semibold text-ink sm:text-sm">Timeless Style</p>
                <p className="mt-1 text-[10px] leading-4 text-muted sm:text-xs">Everyday favourites</p>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -right-4 -top-4 h-36 w-36 rounded-full bg-bronze/20 blur-3xl sm:h-48 sm:w-48" />
            <div className="hero-image-frame relative overflow-hidden rounded-[28px] bg-[#DDE2D8] shadow-soft">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90" alt="Elegant modern living room" fetchPriority="high" className="hero-image block h-[350px] w-full object-cover sm:h-[470px] lg:h-[570px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172A25]/25 via-transparent to-white/5" />
              <div className="hero-image-card absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[250px] sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-bronze">The FORMA Edit</p>
                <p className="mt-2 text-lg font-semibold text-ink">Little details. Big difference.</p>
                <p className="mt-1 text-xs leading-5 text-muted">Thoughtful pieces for everyday living.</p>
              </div>
            </div>
            <div className="hero-floating absolute -right-2 -top-3 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#E8D7C2] bg-white shadow-lg sm:-right-5 sm:-top-5 sm:h-[90px] sm:w-[90px]">
              <div className="text-center">
                <Leaf size={21} className="mx-auto text-bronze" />
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-widest text-ink">Live well</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-y border-ink/10 bg-white/50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-5 text-center text-[9px] font-bold uppercase tracking-[.12em] text-muted sm:px-8 sm:text-xs md:grid-cols-4 lg:px-10">
            <span>Considered Design</span>
            <span>Everyday Utility</span>
            <span>Timeless Favourites</span>
            <span>Relaxed Shopping</span>
          </div>
        </div>
      </section>

      {/* ================= NEW: CATEGORY WISE PRODUCTS - ALAG ARRANGED ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-20">
        {Object.entries(productsByCategory).map(([categoryName, products]) => (
          <div key={categoryName}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase mb-2">{categoryName.split(" ")[0]} Essentials</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">{categoryName}</h2>
              </div>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                View All {categoryName} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= CATEGORIES BANNERS ================= */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Find your kind of good" title="Shop by category" description="Start with what your everyday needs most." />
          <div className="grid gap-5 sm:grid-cols-3">
            {categories.map((category) => (
              <Link to={`/shop?category=${category.name}`} key={category.name} className="group relative overflow-hidden rounded-2xl bg-ivory">
                <img src={category.image} alt={category.name} loading="lazy" className="aspect-[4/4.4] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                  <div>
                    <p className="text-xs text-white/75">{category.subtitle}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">{category.name}</h3>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-ink">
                    <ArrowDownRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 rounded-[2rem] bg-[#e9e8df] p-7 sm:p-10 md:grid-cols-[1fr_.8fr] md:items-center lg:p-14">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">A little less, a little better</p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-.04em] text-ink sm:text-4xl">Good design should make everyday feel a little easier.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">We look for practical details, honest materials, and pieces that feel at home in real life — not just on a screen.</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:gap-3">Get to know us <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=700&q=85" alt="Minimal lifestyle" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85" alt="Warm minimal home" loading="lazy" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ================= SHOPPING BENEFITS ================= */}
      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: PackageCheck, title: "Simple from start to finish", text: "A clear, easy-to-follow shopping experience." },
            { icon: ShieldCheck, title: "No surprises at checkout", text: "Review your items and delivery details before confirming." },
            { icon: Sparkles, title: "Curated, not crowded", text: "A considered collection of useful everyday favourites." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ivory text-ink"><Icon size={19} /></span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-xs leading-6 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
