export default function Hourglass({ className = "w-6 h-6", glass = "#F6F2EA", frame = "#D4AF37", sand = "#8B1E2D" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <path d="M16 10h32v6H16zM16 48h32v6H16z" fill={frame}/>
      <path d="M20 16c0 8 8 12 12 16-4 4-12 8-12 16h24c0-8-8-12-12-16 4-4 12-8 12-16H20z" fill={glass} stroke={frame} strokeWidth="2"/>
      <path d="M24 40h16l-8 6-8-6z" fill={sand}/>
      <circle cx="32" cy="24" r="2" fill={sand}/>
    </svg>
  );
}
