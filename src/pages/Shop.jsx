import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { categories, products } from "../data/products";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = categories.includes(params.get("category")) ? params.get("category") : "All";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const term = search.trim().toLowerCase();
      const matchesSearch = !term || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [category, search, sort]);

  const chooseCategory = (value) => {
    setCategory(value);
    const next = new URLSearchParams(params);
    if (value === "All") next.delete("category"); else next.set("category", value);
    setParams(next);
  };

  return (
    <div className="min-h-[60vh] bg-ivory">
      <div className="border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">The collection</p>
          <h1 className="text-4xl font-semibold tracking-[-.05em] text-ink sm:text-5xl">All products<span className="text-bronze">.</span></h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">Everyday essentials and considered details, all in one place.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => <button key={item} onClick={() => chooseCategory(item)} className={`rounded-full px-4 py-2.5 text-xs font-semibold transition ${category === item ? "bg-ink text-white" : "border border-ink/10 bg-white text-muted hover:border-ink/30 hover:text-ink"}`}>{item}</button>)}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-w-0 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3 sm:min-w-[250px]">
              <Search size={16} className="text-muted" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted/70" />
              {search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={15}/></button>}
            </label>
            <label className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3 text-sm">
              <SlidersHorizontal size={15} className="text-muted" />
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products" className="bg-transparent text-sm outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mb-5 flex items-center justify-between text-xs text-muted"><span>{filtered.length} {filtered.length === 1 ? "product" : "products"} found</span>{(category !== "All" || search) && <button className="font-semibold text-ink underline" onClick={() => { setSearch(""); chooseCategory("All"); }}>Clear filters</button>}</div>
        {filtered.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-2xl border border-dashed border-ink/20 bg-white px-5 py-16 text-center"><h2 className="text-xl font-semibold text-ink">No products found</h2><p className="mt-2 text-sm text-muted">Try another search or clear your filters.</p><button onClick={() => { setSearch(""); chooseCategory("All"); }} className="mt-5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">Clear filters</button></div>}
      </div>
    </div>
  );
}
