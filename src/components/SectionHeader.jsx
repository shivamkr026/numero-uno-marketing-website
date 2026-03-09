export default function SectionHeader({ label, title, titleAccent, subtitle, center = false }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""} max-w-2xl ${center ? "mx-auto" : ""}`}>
      {label && (
        <div className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[3px] uppercase text-green mb-4 ${center ? "justify-center" : ""}`}>
          <span className="w-7 h-px bg-green" />
          {label}
        </div>
      )}
      <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight leading-[1.1] mb-4">
        {title}{" "}
        {titleAccent && <span className="text-green">{titleAccent}</span>}
      </h2>
      {subtitle && (
        <p className="text-base text-white/50 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
