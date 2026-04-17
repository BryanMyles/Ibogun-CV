import { MapPin, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="px-4 py-8 sm:px-10 lg:py-12 max-w-4xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[color:var(--color-text-main)] mb-4 tracking-tight">
          Contact Support
        </h1>
        <p className="text-[color:var(--color-text-muted)] text-sm">
          Have questions? Reach out to us through any of our channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-green-50 text-[color:var(--color-whatsapp)] rounded-lg flex items-center justify-center flex-shrink-0">
               <MessageSquare className="w-5 h-5" />
             </div>
             <div>
               <h3 className="text-[14px] font-semibold text-[color:var(--color-text-main)] mb-1">WhatsApp Chat</h3>
               <p className="text-xs text-[color:var(--color-text-muted)] mb-3">Direct messaging for fast support.</p>
               <a
                  href="https://chat.whatsapp.com/D6SijjEHEJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[color:var(--color-whatsapp)] text-white text-xs font-semibold rounded-md hover:opacity-90 transition-opacity"
               >
                 Start Chat
               </a>
             </div>
          </div>

          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5 flex gap-4 items-start shadow-sm">
             <div className="w-10 h-10 bg-blue-50 text-[color:var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
               <Phone className="w-5 h-5" />
             </div>
             <div>
               <h3 className="text-[14px] font-semibold text-[color:var(--color-text-main)] mb-1">Phone Call</h3>
               <p className="text-xs text-[color:var(--color-text-muted)] mb-1">Standard audio comms.</p>
               <p className="text-[14px] font-bold text-[color:var(--color-primary)]">08123689153</p>
             </div>
          </div>

          <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-5 flex gap-4 items-start shadow-sm">
             <div className="w-10 h-10 bg-slate-50 text-[color:var(--color-text-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
               <MapPin className="w-5 h-5" />
             </div>
             <div>
               <h3 className="text-[14px] font-semibold text-[color:var(--color-text-main)] mb-1">Store Location</h3>
               <p className="text-xs text-[color:var(--color-text-muted)]">
                 Near Main Gate, University Campus<br />
                 Ibogun Computer Village
               </p>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[color:var(--color-border-light)] p-6 shadow-sm">
           <h2 className="text-lg font-semibold text-[color:var(--color-text-main)] mb-5">Send a Message</h2>
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
             <div>
               <label className="block text-xs font-semibold text-[color:var(--color-text-main)] mb-1.5">Full Name</label>
               <input type="text" className="w-full bg-slate-50 border border-[color:var(--color-border-light)] px-3 py-2 rounded-lg text-sm text-[color:var(--color-text-main)] focus:outline-none focus:border-[color:var(--color-primary)] focus:bg-white transition-colors" placeholder="Enter your name" />
             </div>
             <div>
               <label className="block text-xs font-semibold text-[color:var(--color-text-main)] mb-1.5">Email Address</label>
               <input type="email" className="w-full bg-slate-50 border border-[color:var(--color-border-light)] px-3 py-2 rounded-lg text-sm text-[color:var(--color-text-main)] focus:outline-none focus:border-[color:var(--color-primary)] focus:bg-white transition-colors" placeholder="Enter your email" />
             </div>
             <div>
               <label className="block text-xs font-semibold text-[color:var(--color-text-main)] mb-1.5">Message</label>
               <textarea rows={4} className="w-full bg-slate-50 border border-[color:var(--color-border-light)] px-3 py-2 rounded-lg text-sm text-[color:var(--color-text-main)] focus:outline-none focus:border-[color:var(--color-primary)] focus:bg-white transition-colors" placeholder="How can we help you?"></textarea>
             </div>
             <button className="w-full py-2.5 bg-[color:var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[color:var(--color-primary-dark)] transition-colors">
               Send Message
             </button>
           </form>
        </div>
      </div>
    </div>
  );
}
