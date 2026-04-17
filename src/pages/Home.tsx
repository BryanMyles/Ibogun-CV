import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-5 px-4 sm:px-10 py-5">
      {/* Left Sidebar */}
      <aside className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5 hidden lg:block h-fit sticky top-[90px]">
        <span className="text-xs uppercase tracking-widest text-[color:var(--color-text-muted)] mb-4 block font-semibold flex-shrink-0">Categories</span>
        <div className="flex flex-col">
          <Link to="/shop?cat=laptops" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">💻 Laptops & PCs</Link>
          <Link to="/shop?cat=smartphones" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">📱 Smartphones</Link>
          <Link to="/shop?cat=accessories" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">🔌 Accessories</Link>
          <Link to="/shop?cat=home-electronics" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">📺 Home Electronics</Link>
          <Link to="/shop?cat=engineering-tools" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">🛠️ Engineering Tools</Link>
          <Link to="/shop?cat=solar-equipment" className="flex items-center py-2.5 text-sm text-[color:var(--color-text-main)] border-b border-slate-50 hover:text-[color:var(--color-primary)] transition-colors">☀️ Solar Equipment</Link>
        </div>
      </aside>

      {/* Center Content */}
      <section className="flex flex-col gap-5">
        <div className="hero-gradient rounded-2xl p-8 text-white relative overflow-hidden shadow-sm">
          <h1 className="text-[28px] font-bold leading-tight mb-2 max-w-[300px]">
            Your Trusted Tech Marketplace
          </h1>
          <p className="text-sm text-white/90 mb-5 max-w-[360px]">
            Specialized student deals and professional gadgets in the heart of Ibogun.
          </p>
          <Link
            to="/shop"
            className="bg-white text-[color:var(--color-primary)] px-5 py-2.5 rounded-lg font-semibold text-[13px] inline-block shadow-sm hover:shadow-md transition-shadow"
          >
            Explore Deals
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className="flex flex-col gap-5">
        <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5">
           <span className="text-xs uppercase tracking-widest text-[color:var(--color-text-muted)] mb-4 block font-semibold">Why Choose Us</span>
           
           <div className="flex flex-col gap-4">
             <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-[color:var(--color-primary)] rounded-lg flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">%</div>
                <div>
                  <h4 className="text-[13px] font-semibold text-[color:var(--color-text-main)] mb-0.5">Student Friendly</h4>
                  <p className="text-[11px] text-[color:var(--color-text-muted)]">Installment plans available</p>
                </div>
             </div>
             
             <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-[color:var(--color-primary)] rounded-lg flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">✓</div>
                <div>
                  <h4 className="text-[13px] font-semibold text-[color:var(--color-text-main)] mb-0.5">Reliable Tech</h4>
                  <p className="text-[11px] text-[color:var(--color-text-muted)]">100% Tested & Verified</p>
                </div>
             </div>
           </div>

           <span className="text-xs uppercase tracking-widest text-[color:var(--color-text-muted)] mt-6 mb-4 block font-semibold">Testimonials</span>
           <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-4 text-[13px] text-[color:var(--color-text-muted)] italic relative shadow-sm">
              "The best place to get laptops in Ibogun. My EliteBook is still going strong after 2 years!"
              <span className="not-italic font-semibold text-[color:var(--color-text-main)] text-[12px] block mt-2.5">— Tolu W., Engineering Student</span>
           </div>
        </div>
      </aside>
    </div>
  );
}
