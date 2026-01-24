export const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary font-subheading flex items-center gap-2 sm:gap-3 md:gap-4 uppercase tracking-widest">
      <span className="text-primary/40 text-2xl sm:text-3xl md:text-4xl font-light">||</span> {children}
    </h2>
  );
};
