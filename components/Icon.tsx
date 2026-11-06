// Ícones em SVG inline: nada de biblioteca extra no bundle.
const paths: Record<string, React.ReactNode> = {
  qr: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3" /></>),
  play: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m10 9 5 3-5 3z" /></>),
  hand: (<><path d="M7 11V6a2 2 0 1 1 4 0v4M11 10V4a2 2 0 1 1 4 0v6M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-5.6-2.8L3 15a2 2 0 0 1 3-2.6L7 14" /></>),
  bell: (<><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" /><path d="M10 20a2 2 0 0 0 4 0" /></>),
  chef: (<><path d="M6 14a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 4.6 4 4 0 1 1 18 14" /><path d="M6 14h12v6H6z" /></>),
  caixa: (<><rect x="3" y="9" width="18" height="11" rx="2" /><path d="M7 9V5h10v4M7 14h4M15 14h2" /></>),
  wifi: (<><path d="M2 8.8a16 16 0 0 1 20 0M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0" /><path d="M12 20h.01" /><path d="m3 3 18 18" /></>),
  edit: (<><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="m13.5 6.5 4 4" /></>),
  print: (<><path d="M7 8V3h10v5" /><rect x="3" y="8" width="18" height="9" rx="2" /><path d="M7 14h10v7H7z" /></>),
  star: (<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />),
  recibo: (<><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  check: (<path d="m5 12.5 4.5 4.5L19 7.5" />),
  seta: (<path d="M5 12h14M13 6l6 6-6 6" />),
  esq: (<path d="M15 6l-6 6 6 6" />),
  dir: (<path d="M9 6l6 6-6 6" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  whatsapp: (<><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z" /><path d="M9 9.2c.2 2.6 3 5.3 5.6 5.6.7.1 1.6-.5 1.6-1.3l-1.6-.9-.9.8a5 5 0 0 1-2.6-2.6l.8-.9-.9-1.6c-.8 0-1.4.9-1.3 1.6z" /></>),
};

export function Icon({ nome, size = 22, className }: { nome: keyof typeof paths | string; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[nome]}
    </svg>
  );
}
