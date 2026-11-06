'use client';

import { useEffect } from 'react';

// Um único observador para a página toda: cada elemento com [data-reveal] ganha a classe "in"
// quando entra na tela. Sem biblioteca de animação, só CSS.
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    document.documentElement.classList.add('js-reveal');
    return () => io.disconnect();
  }, []);
  return null;
}
