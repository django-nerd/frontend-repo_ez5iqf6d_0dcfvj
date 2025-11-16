export default function Crown({ className = "w-6 h-6", fill = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E27A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9C7C1B" />
        </linearGradient>
      </defs>
      <path fill="url(#gold)" d="M8 22l8 10 8-14 8 14 8-14 8 14 8-10v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V22z" />
      <rect x="10" y="42" width="44" height="6" rx="2" fill={fill} opacity="0.4" />
      <circle cx="16" cy="18" r="3" fill={fill} />
      <circle cx="32" cy="14" r="4" fill={fill} />
      <circle cx="48" cy="18" r="3" fill={fill} />
    </svg>
  )
}
