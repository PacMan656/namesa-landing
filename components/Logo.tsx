export function Logo() {
  return (
    <span className="logo">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--green)" />
        <path d="M8 20.5h16M10 20.5c0-3.3 2.7-6 6-6s6 2.7 6 6M16 14.5v-2" stroke="var(--bg)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M11 24h10" stroke="var(--bg)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span>Na<em>Mesa</em></span>
    </span>
  );
}
