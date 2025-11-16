export default function Mask({ className = "w-6 h-6", base = "#0B0B0F", trim = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 64 32" className={className} role="img" aria-hidden="true">
      <defs>
        <linearGradient id="maskTrim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E27A" />
          <stop offset="60%" stopColor={trim} />
          <stop offset="100%" stopColor="#8C6A1A" />
        </linearGradient>
      </defs>
      <path d="M2 16c6-12 20-14 30-14s24 2 30 14c-10 6-18 6-26 2-2-1-6-1-8 0-8 4-16 4-26-2z" fill={base} stroke="url(#maskTrim)" strokeWidth="2"/>
      <path d="M20 14c-4 0-8 2-8 6 3 0 6-1 8-2s4-2 8-2 6 1 8 2 5 2 8 2c0-4-4-6-8-6s-6 1-8 2-4-2-8-2z" fill="#F6F2EA" opacity="0.9"/>
      <circle cx="20" cy="18" r="4" fill="#0B0B0F"/>
      <circle cx="44" cy="18" r="4" fill="#0B0B0F"/>
    </svg>
  );
}
