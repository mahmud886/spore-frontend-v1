export default function CountdownCard({ value, label, highlight = false }) {
  return (
    <div className={`bg-terminal-gray/50 border border-white/10 p-4 ${highlight ? "text-primary" : ""}`}>
      <div className={`text-4xl md:text-5xl font-mono ${highlight ? "" : "text-primary"}`}>{value}</div>
      <div className="text-[10px] text-white/40 tracking-widest mt-2 uppercase">{label}</div>
    </div>
  );
}
