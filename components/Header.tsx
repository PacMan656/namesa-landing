import { Logo } from './Logo';

const links = [
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#recursos', label: 'Recursos' },
  { href: '/#preco', label: 'Preço' },
  { href: '/#duvidas', label: 'Dúvidas' },
];

export function Header() {
  return (
    <header className="topo">
      <div className="wrap topo-in">
        <a href="/#inicio" className="marca" aria-label="NaMesa, voltar ao início">
          <Logo />
        </a>
        <nav aria-label="Seções" className="topo-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="/#contato" className="btn btn-sm">Testar grátis</a>
      </div>
    </header>
  );
}
