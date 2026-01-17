import CountdownCard from "./CountdownCard";

export default function CountdownSection({
  days = 2,
  hours = 14,
  minutes = 33,
  seconds = 59,
  highlightMinutes = true,
}) {
  const formatValue = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
      <CountdownCard value={formatValue(days)} label="Days" />
      <CountdownCard value={formatValue(hours)} label="Hours" />
      <CountdownCard value={formatValue(minutes)} label="Minutes" highlight={highlightMinutes} />
      <CountdownCard value={formatValue(seconds)} label="Seconds" />
    </div>
  );
}
