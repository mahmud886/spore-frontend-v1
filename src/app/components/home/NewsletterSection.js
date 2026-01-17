'use client';

export default function NewsletterSection() {
  return (
    <section className="py-20 px-8  border-y border-white/5">
      <div className="flex flex-col md:flex-row gap-8 items-end">
        <div className="flex-1 w-full">
          <label className="text-[10px] text-white/60 uppercase tracking-widest mb-2 block">Your Name</label>
          <input
            className="w-full bg-transparent border border-dashed border-primary/40 p-4 focus:ring-1 focus:ring-primary focus:border-primary text-sm text-primary placeholder:text-primary/20 transition-all"
            placeholder="Enter Name"
            type="text"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="text-[10px] text-white/60 uppercase tracking-widest mb-2 block">Your Email</label>
          <input
            className="w-full bg-transparent border border-dashed border-primary/40 p-4 focus:ring-1 focus:ring-primary focus:border-primary text-sm text-primary placeholder:text-primary/20 transition-all"
            placeholder="Enter E-mail address"
            type="email"
          />
        </div>
        <button className="bg-primary text-black px-12 py-4 font-display font-black uppercase tracking-widest hover:brightness-110 transition-all">
          Submit
        </button>
      </div>
    </section>
  );
}
