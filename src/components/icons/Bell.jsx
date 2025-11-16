export default function Bell({ className = "w-6 h-6", fill = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <path d="M12 44h40c0-12-6-18-12-22-2-10-14-10-16 0-6 4-12 10-12 22z" fill={fill}/>
      <circle cx="32" cy="52" r="4" fill="#9C7C1B"/>
      <path d="M8 44h48" stroke="#9C7C1B" strokeWidth="2"/>
    </svg>
  );
}
