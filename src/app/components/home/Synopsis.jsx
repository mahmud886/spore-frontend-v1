export function Synopsis() {
  return (
    <section className="relative pt-[450px] pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/assets/videos/dustkeeper_1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-subheading text-gray-300 leading-relaxed text-center">
            In the fractured city of Lionara where a deadly Spore pathogen outbreak is brutally suppressed by an
            iron-fisted regime, a disillusioned soldier and a rogue medic must bridge their ideological divide when her
            infected brother develops predictive abilities that could accelerate humanity’s evolution or end it.
          </p>
        </div>
        {/* CTA Button */}
        <div className="pt-10 text-center">
          <button className="bg-[#C2FF02] font-subheading tracking-widest hover:bg-[#a8db02] text-black text-[24px] md:text-[32px] lg:text-[48px] font-semibold px-8 md:px-16 lg:px-[80px] py-2 md:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs md:max-w-md lg:max-w-none mx-auto">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}
