import { linkWhatsApp, site, whatsappFormatado } from '@/lib/config';
import { FormContato } from './FormContato';
import { Icon } from './Icon';

export function Contato() {
  const zap = whatsappFormatado();
  return (
    <section id="contato" className="secao contato">
      <div className="contato-luz" aria-hidden="true" />
      <div className="wrap contato-grid">
        <div className="contato-texto" data-reveal>
          <p className="kicker">Comece hoje</p>
          <h2>Seu próximo salão cheio pode ser <em>o mais tranquilo.</em></h2>
          <p className="lead">
            Teste o NaMesa por {site.diasGratis} dias e veja na prática a diferença no atendimento.
            Preencha o formulário e a gente prepara o seu acesso.
          </p>
          <div className="contato-canais">
            {site.whatsapp && (
              <a href={linkWhatsApp()} className="canal" target="_blank" rel="noopener noreferrer">
                <Icon nome="whatsapp" />
                <span><b>Falar no WhatsApp</b>{zap}</span>
              </a>
            )}
            {site.email && (
              <a href={`mailto:${site.email}`} className="canal">
                <Icon nome="mail" />
                <span><b>E-mail</b>{site.email}</span>
              </a>
            )}
          </div>
        </div>
        <div data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          <FormContato />
        </div>
      </div>
    </section>
  );
}
