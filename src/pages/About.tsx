export default function About() {
  return (
    <div className="px-4 sm:px-10 py-8 lg:py-12 max-w-4xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[color:var(--color-text-main)] mb-4 tracking-tight">
          About Ibogun Computer Village
        </h1>
        <p className="text-[color:var(--color-text-muted)] text-sm max-w-2xl mx-auto">
          Providing specialized student deals and professional gadgets directly to the university sector.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 md:p-8 shadow-sm">
           <h2 className="text-xl font-semibold text-[color:var(--color-text-main)] mb-3">Our Mission</h2>
           <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed mb-6">
             Ibogun Computer Village was established to solve a critical networking failure 
             in the university sector: the lack of reliable, accessible technology for the student 
             demographic.
           </p>
           
           <h2 className="text-xl font-semibold text-[color:var(--color-text-main)] mb-3">What We Do</h2>
           <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
             We deploy high-quality laptops, robust smartphones, and essential accessories 
             directly to the endpoints that need them most. We bypass traditional, bloated 
             retail nodes to offer student-friendly optimization packages.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[color:var(--color-text-main)] mb-3">Who We Serve</h3>
            <ul className="space-y-2 text-sm text-[color:var(--color-text-muted)]">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> University Students</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> Local Tech Operators</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> Engineering Guilds</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[color:var(--color-text-main)] mb-3">Hardware Promise</h3>
            <ul className="space-y-2 text-sm text-[color:var(--color-text-muted)]">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> Rigorous Testing</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> Authentic Parts</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)]"></div> Encrypted Transactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
