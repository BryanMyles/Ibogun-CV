import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  
  const categories = ["ALL", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "ALL" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-5 px-4 sm:px-10 py-5">
      {/* Sidebar Categories */}
      <aside className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5 hidden lg:block h-fit sticky top-[90px]">
        <span className="text-xs uppercase tracking-widest text-[color:var(--color-text-muted)] mb-4 block font-semibold flex-shrink-0">Categories</span>
        <div className="flex flex-col">
          {categories.map(cat => (
             <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`flex items-center text-left py-2.5 text-sm transition-colors border-b border-slate-50 ${categoryFilter === cat ? 'text-[color:var(--color-primary)] font-semibold' : 'text-[color:var(--color-text-main)] hover:text-[color:var(--color-primary)]'}`}
             >
               {cat === 'ALL' ? 'Everything' : cat}
             </button>
          ))}
        </div>
      </aside>

      <section className="flex flex-col gap-5">
        <div className="relative w-full sm:w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[color:var(--color-text-muted)]" />
          </div>
          <input
             type="text"
             className="w-full bg-slate-100 border border-[color:var(--color-border-light)] text-[color:var(--color-text-main)] py-2 pl-9 pr-4 rounded-full text-[13px] focus:outline-none focus:border-[color:var(--color-primary)] focus:bg-white transition-colors"
             placeholder="Search gadgets, solar, laptops..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Mobile Categories (pills) */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-1.5 border rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                categoryFilter === cat 
                  ? "bg-[color:var(--color-primary)] text-white border-[color:var(--color-primary)]" 
                  : "bg-white text-[color:var(--color-text-muted)] border-[color:var(--color-border-light)] hover:border-[color:var(--color-primary)]"
              }`}
            >
              {cat === 'ALL' ? 'Everything' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-[color:var(--color-border-light)] rounded-xl">
            <p className="text-[color:var(--color-text-muted)] text-sm font-semibold mb-3">
              No matching products found.
            </p>
            <button 
              onClick={() => {setSearch(""); setCategoryFilter("ALL");}}
              className="px-4 py-2 bg-slate-100 text-[color:var(--color-text-main)] rounded-lg hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
