export function Spade({ className = "w-6 h-6", fill = "#0B0B0F" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <path d="M32 6C22 18 10 24 10 34a10 10 0 0 0 20 0c0 6-2 10-10 14h24c-8-4-10-8-10-14a10 10 0 0 0 20 0C54 24 42 18 32 6z" fill={fill}/>
    </svg>
  );
}

export function Heart({ className = "w-6 h-6", fill = "#8B1E2D" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <path d="M32 54S6 38 6 22a10 10 0 0 1 20 0 10 10 0 0 1 20 0c0 16-26 32-26 32z" fill={fill}/>
    </svg>
  );
}

export function Diamond({ className = "w-6 h-6", fill = "#8B1E2D" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <path d="M32 4L8 32l24 28 24-28L32 4z" fill={fill}/>
    </svg>
  );
}

export function Club({ className = "w-6 h-6", fill = "#0B0B0F" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="img">
      <circle cx="22" cy="26" r="10" fill={fill}/>
      <circle cx="42" cy="26" r="10" fill={fill}/>
      <circle cx="32" cy="14" r="10" fill={fill}/>
      <path d="M28 36h8l2 14H26l2-14z" fill={fill}/>
    </svg>
  );
}
