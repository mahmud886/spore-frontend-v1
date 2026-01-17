export default function HeroHeader({
  status = "● STATUS: ACTIVE CONFLICT // SECTOR 7",
  heading = "THE CITY IS\nDIVIDED",
  showStatus = true,
}) {
  // Split heading by newline or use <br />
  const headingLines = heading.split("\n");

  return (
    <>
      {showStatus && (
        <div className="inline-block border border-red-500/50 px-3 py-1 mb-6">
          <span className="text-[10px] text-red-500 font-bold tracking-[0.2em]">{status}</span>
        </div>
      )}
      <h1 className="font-display text-5xl md:text-8xl font-black text-primary leading-tight mb-12 uppercase">
        {headingLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < headingLines.length - 1 && <br />}
          </span>
        ))}
      </h1>
    </>
  );
}
