import { localPath } from '@/lib/config';
import { linkWhatsApp, site } from '@/lib/config';
import { Icon } from './Icon';
import { Logo } from './Logo';

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap rodape-in">
        <div>
          <Logo />
          <p>Cardápio digital com pedido na mesa.</p>
        </div>
        <nav aria-label="Rodapé" className="rodape-links">
          <a href={localPath('/#contato')}>Contato</a>
          {site.whatsapp && <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
          <a href={localPath('/termos')}>Termos de uso</a>
          <a href={localPath('/privacidade')}>Política de privacidade</a>
        </nav>
      </div>
      <div className="wrap rodape-base">
        <span>© {new Date().getFullYear()} NaMesa. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export function BotaoWhatsApp() {
  if (!site.whatsapp) return null;
  return (
    <a href={linkWhatsApp()} className="zap-flutuante" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
      <Icon nome="whatsapp" size={26} />
    </a>
  );
}
