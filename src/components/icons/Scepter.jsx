export default function Scepter({ className = "w-6 h-6", gold = "#D4AF37", jewel = "#163A6B" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <defs>
        <linearGradient id="gild" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E27A"/>
          <stop offset="60%" stopColor={gold}/>
          <stop offset="100%" stopColor="#8C6A1A"/>
        </linearGradient>
      </defs>
      <circle cx="46" cy="18" r="8" fill={jewel} stroke="url(#gild)" strokeWidth="2"/>
      <circle cx="46" cy="18" r="4" fill="#4B2A7B"/>
      <path d="M14 50l28-28" stroke="url(#gild)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M12 52l8-8" stroke="#9C7C1B" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="18" cy="46" r="3" fill={gold}/>
    </svg>
  );
}
