export default function PollResultSection({
  faction1 = {
    name: 'Evolution Faction',
    territory: 'Expanding',
    percentage: 55,
    color: 'primary',
  },
  faction2 = {
    name: 'Containment Unit',
    territory: 'Compromised',
    percentage: 45,
    color: 'accent-blue',
  },
  showLabel = true,
  labelText = 'Population Split',
}) {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-1">
            {faction1.name}
          </h3>
          <p className="text-[10px] text-white/40 uppercase">Territory: {faction1.territory}</p>
        </div>
        {showLabel && (
          <div className="text-center hidden md:block">
            <p className="text-[10px] text-white/60 uppercase tracking-widest">{labelText}</p>
          </div>
        )}
        <div className="text-right">
          <h3
            className={`${
              faction2.color === 'accent-blue' ? 'text-accent-blue' : 'text-primary'
            } text-xs font-bold tracking-widest uppercase mb-1`}
          >
            {faction2.name}
          </h3>
          <p className="text-[10px] text-white/40 uppercase">Territory: {faction2.territory}</p>
        </div>
      </div>
      <div className="h-10 w-full flex overflow-hidden border border-white/10">
        <div
          className="striped-lime flex items-center px-4"
          style={{ width: `${faction1.percentage}%` }}
        >
          <span className="text-black font-black italic">{faction1.percentage}%</span>
        </div>
        <div
          className="striped-blue flex items-center justify-end px-4"
          style={{ width: `${faction2.percentage}%` }}
        >
          <span className="text-white font-black italic">{faction2.percentage}%</span>
        </div>
      </div>
    </section>
  );
}
