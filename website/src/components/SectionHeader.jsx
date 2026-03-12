export default function SectionHeader({ label, title, titleAccent, subtitle, center = false }) {
 return (
 <div className={`mb-14 ${center ? "text-center" : ""} max-w-2xl ${center ? "mx-auto" : ""}`}>
 {label && (
 <div className={`inline-flex items-center gap-2.5 text-[11px] uppercase small-label tracking-[3px] text-blue mb-4 ${center ? "justify-center" : ""}`}>
 <span className="w-7 h-px bg-blue" />
 {label}
 </div>
 )}
 <h2 className=" text-[clamp(28px,4vw,48px)] section-h2 leading-[1.1] mb-4">
 {title}{" "}
 {titleAccent && <span className="text-blue">{titleAccent}</span>}
 </h2>
 {subtitle && (
 <p className="text-base text-white/50 leading-relaxed">{subtitle}</p>
 )}
 </div>
 );
}
