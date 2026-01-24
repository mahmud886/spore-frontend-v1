"use client";

export default function NewsletterSection() {
  return (
    // <section className="py-20 px-8  border-y border-white/5">
    //   <div className="flex flex-col md:flex-row gap-8 items-end">
    //     <div className="flex-1 w-full">
    //       <label className="text-[10px] text-white/60 uppercase tracking-widest mb-2 block">Your Name</label>
    //       <input
    //         className="w-full bg-transparent border border-dashed border-primary/40 p-4 focus:ring-1 focus:ring-primary focus:border-primary text-sm text-primary placeholder:text-primary/20 transition-all"
    //         placeholder="Enter Name"
    //         type="text"
    //       />
    //     </div>
    //     <div className="flex-1 w-full">
    //       <label className="text-[10px] text-white/60 uppercase tracking-widest mb-2 block">Your Email</label>
    //       <input
    //         className="w-full bg-transparent border border-dashed border-primary/40 p-4 focus:ring-1 focus:ring-primary focus:border-primary text-sm text-primary placeholder:text-primary/20 transition-all"
    //         placeholder="Enter E-mail address"
    //         type="email"
    //       />
    //     </div>
    //     <button className="bg-primary text-black px-12 py-4 font-display font-black uppercase tracking-widest hover:brightness-110 transition-all">
    //       Submit
    //     </button>
    //   </div>
    // </section>
    <section className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto">
          <div className="relative bg-black/50 rounded-2xl border border-[#C2FF02]/20 px-6 py-6 sm:px-8 md:px-12 md:pt-24 md:pb-30 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-subheading font-bold text-primary uppercase tracking-widest">
                  Stay Updated
                </h2>
                <p className="text-primary text-sm font-subheading sm:text-base md:text-lg px-2 uppercase tracking-widest">
                  Get exclusive updates, behind-the-scenes content, and secret drops
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto w-full">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-0 bg-black/20 border border-[#C2FF02]/20 text-white placeholder:text-gray-500 focus:border-[#C2FF02] focus:ring-2 focus:ring-primary rounded-lg h-auto sm:h-11 md:h-18 text-sm md:text-xl outline-none"
                />
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-0 bg-black/20 border border-[#C2FF02]/20 text-white placeholder:text-gray-500 focus:border-[#C2FF02] focus:ring-2 focus:ring-primary rounded-lg h-auto sm:h-11 md:h-18 text-sm md:text-xl outline-none"
                />
                <button className="bg-[#C2FF02] font-subheading uppercase h-11 sm:h-12 md:h-18 tracking-widest hover:bg-[#a8db02] text-black font-semibold px-6 sm:px-8 rounded-lg whitespace-nowrap text-sm md:text-xl w-full sm:w-auto">
                  Secret Drops!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
