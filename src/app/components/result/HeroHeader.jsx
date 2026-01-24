export default function HeroHeader({
  status = "● STATUS: ACTIVE CONFLICT // SECTOR 7",
  heading = "THE CITY IS\nDIVIDED",
  showStatus = true,
}) {
  // Split heading by newline or use <br />
  const headingLines = heading.split("\n");

  return (
    <>
      <div className="text-center pt-16">
        {showStatus && (
          <div className="inline-block border border-red-500/50 px-3 py-1 mb-6">
            <span className="text-[10px] text-red-500 font-bold tracking-[0.2em]">{status}</span>
          </div>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-oswald font-bold uppercase tracking-tighter text-primary mb-8 leading-none glitch-text cursor-default">
          {headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
      </div>
    </>
  );
}
