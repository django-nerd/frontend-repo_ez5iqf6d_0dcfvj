export default function Lock({ className = "w-6 h-6", body = "#4B2A7B", trim = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <rect x="14" y="28" width="36" height="26" rx="6" fill={body} stroke={trim} strokeWidth="3"/>
      <path d="M22 28v-6a10 10 0 0 1 20 0v6" fill="none" stroke={trim} strokeWidth="3"/>
      <circle cx="32" cy="42" r="4" fill={trim}/>
    </svg>
  );
}
