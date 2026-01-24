import SectionTitleSeparator from "./SectionTitleSeparator";

export const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary font-subheading flex items-center gap-2 sm:gap-3 md:gap-4 uppercase tracking-widest">
      <SectionTitleSeparator className="w-2 h-8 sm:w-2.5 sm:h-10 md:w-3 md:h-12 text-primary" />
      {children}
    </h2>
  );
};
