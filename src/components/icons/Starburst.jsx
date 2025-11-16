export default function Starburst({ className = "w-6 h-6", fill = "#F6F2EA" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <path d="M32 4l4 12 10-8-2 12 12-2-8 10 12 4-12 4 8 10-12-2 2 12-10-8-4 12-4-12-10 8 2-12-12 2 8-10-12-4 12-4-8-10 12 2-2-12 10 8 4-12z" fill={fill}/>
    </svg>
  );
}
