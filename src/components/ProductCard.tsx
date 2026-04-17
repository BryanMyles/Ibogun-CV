import { Product } from "../data/products";
import { formatPrice } from "../lib/utils";

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "2348123689153";
  const whatsappMessage = encodeURIComponent(`Hello, I'm interested in ordering the ${product.name} listed at ${formatPrice(product.price)}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-3 flex flex-col gap-2 relative shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-[140px] bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-dashed border-slate-300">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-col flex-grow mt-2">
        <h3 className="text-sm font-semibold text-[color:var(--color-text-main)] truncate max-w-full">
          {product.name}
        </h3>
        <span className="text-[15px] font-bold text-[color:var(--color-primary)] mt-1">
          {formatPrice(product.price)}
        </span>
        
        <div className="mt-4 flex-grow flex items-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[color:var(--color-whatsapp)] text-white text-center py-2 rounded-md text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
