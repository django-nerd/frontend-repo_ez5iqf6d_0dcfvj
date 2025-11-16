export default function JesterHat({ className = "w-6 h-6", fillA = "#8B1E2D", fillB = "#4B2A7B", trim = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <path d="M6 38c6-10 14-16 26-16s20 6 26 16l-6 2c-5-6-11-10-20-10S19 34 14 40l-8-2z" fill={fillB} />
      <path d="M12 40c4-12 12-18 20-18s16 6 20 18l-6 2c-3-8-8-12-14-12s-11 4-14 12l-6-2z" fill={fillA} />
      <path d="M10 42h44v6H10z" fill={trim} />
      <circle cx="12" cy="38" r="3" fill={trim} />
      <circle cx="52" cy="38" r="3" fill={trim} />
      <circle cx="32" cy="22" r="3" fill={trim} />
    </svg>
  )
}
