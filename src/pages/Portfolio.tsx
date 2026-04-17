import { Briefcase, Mail, MapPin, Award, Github, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="px-4 py-8 sm:px-10 lg:py-12 max-w-5xl mx-auto w-full">
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl border border-[color:var(--color-border-light)] p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="w-32 h-32 flex-shrink-0">
           <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop" 
              alt="Admin Profile"
              className="w-full h-full rounded-full object-cover border-4 border-slate-50 shadow-sm"
              referrerPolicy="no-referrer"
           />
        </div>
        <div className="flex-grow text-center md:text-left">
           <h1 className="text-3xl font-bold text-[color:var(--color-text-main)] mb-2">Admin / Lead Developer</h1>
           <p className="text-[15px] text-[color:var(--color-text-muted)] mb-5 max-w-2xl">
             I am a full-stack software engineer and tech entrepreneur. Currently overseeing the digital transformation of Ibogun Computer Village to deliver high-quality tech infrastructure directly to students.
           </p>
           
           <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <div className="flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-text-main)]">
                <MapPin className="w-4 h-4 text-[color:var(--color-primary)]" />
                Ibogun, Nigeria
             </div>
             <div className="flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-text-main)]">
                <Mail className="w-4 h-4 text-[color:var(--color-primary)]" />
                admin@iboguncomputers.ng
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col - Skills */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm">
             <div className="flex items-center gap-2 mb-5">
               <Briefcase className="w-5 h-5 text-[color:var(--color-primary)]" />
               <h2 className="text-lg font-semibold text-[color:var(--color-text-main)]">Competencies</h2>
             </div>
             
             <div className="flex flex-wrap gap-2">
                {['React & Next.js', 'TypeScript', 'Node.js', 'eCommerce Strategy', 'Digital Marketing', 'System Admin', 'Tailwind CSS'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-50 text-[color:var(--color-primary)] text-xs font-semibold rounded-lg border border-blue-100">
                    {skill}
                  </span>
                ))}
             </div>
          </div>

          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm">
             <div className="flex items-center gap-2 mb-5">
               <Award className="w-5 h-5 text-[color:var(--color-primary)]" />
               <h2 className="text-lg font-semibold text-[color:var(--color-text-main)]">Certifications</h2>
             </div>
             <ul className="space-y-4">
                <li className="border-l-2 border-[color:var(--color-primary)] pl-3">
                  <h4 className="text-sm font-semibold text-[color:var(--color-text-main)]">AWS Certified Solutions Architect</h4>
                  <p className="text-xs text-[color:var(--color-text-muted)]">Amazon Web Services (2024)</p>
                </li>
                <li className="border-l-2 border-[color:var(--color-border-light)] pl-3">
                  <h4 className="text-sm font-semibold text-[color:var(--color-text-main)]">Google IT Support Professional</h4>
                  <p className="text-xs text-[color:var(--color-text-muted)]">Google / Coursera (2023)</p>
                </li>
             </ul>
          </div>
        </div>

        {/* Right Col - Projects */}
        <div className="lg:col-span-2">
           <h2 className="text-xl font-bold text-[color:var(--color-text-main)] mb-6 flex items-center gap-2">
             <Github className="w-6 h-6" /> Key Projects
           </h2>

           <div className="space-y-5">
             <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-[16px] font-semibold text-[color:var(--color-text-main)]">Ibogun Connect Web App</h3>
                   <a href="#" className="p-1 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary)] border border-[color:var(--color-border-light)] rounded bg-slate-50 transition-colors">
                     <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
                <p className="text-sm text-[color:var(--color-text-muted)] mb-4 leading-relaxed">
                  Developed a high-converting web platform to help students acquire affordable gadgets. It utilizes React, Tailwind CSS, and a specialized WhatsApp direct-order pipeline to speed up the sales process and customer service responses.
                </p>
                <div className="flex gap-4 border-t border-[color:var(--color-border-light)] pt-4 mt-2">
                   <div className="text-xs font-semibold text-[color:var(--color-text-main)]">Tech:</div>
                   <div className="text-xs text-[color:var(--color-text-muted)]">React, Tailwind, Vite, UI/UX</div>
                </div>
             </div>

             <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-[16px] font-semibold text-[color:var(--color-text-main)]">Campus Inventory System API</h3>
                   <a href="#" className="p-1 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary)] border border-[color:var(--color-border-light)] rounded bg-slate-50 transition-colors">
                     <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
                <p className="text-sm text-[color:var(--color-text-muted)] mb-4 leading-relaxed">
                  Designed a RESTful microservice handling live inventory counts across three separate physical storefronts. Integrated with a local POS terminal infrastructure.
                </p>
                <div className="flex gap-4 border-t border-[color:var(--color-border-light)] pt-4 mt-2">
                   <div className="text-xs font-semibold text-[color:var(--color-text-main)]">Tech:</div>
                   <div className="text-xs text-[color:var(--color-text-muted)]">Node.js, Express, PostgreSQL, Redis</div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
