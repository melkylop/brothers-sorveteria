(() => {
  const STORAGE_KEY = 'brothers-lgpd-consent';

  if (localStorage.getItem(STORAGE_KEY)) return;

  const style = document.createElement('style');
  style.textContent = `
    .lgpd-banner{
      position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;
      max-width:520px;margin:0 auto;
      background:#3E1B4F;color:#fff;
      border-radius:18px;padding:18px 20px;
      box-shadow:0 24px 60px rgba(42,17,54,.35);
      display:flex;flex-direction:column;gap:12px;
      font-family:'DM Sans',system-ui,sans-serif;font-size:14px;line-height:1.5;
      transform:translateY(140%);transition:transform .5s cubic-bezier(.86,0,.07,1);
    }
    .lgpd-banner.show{transform:translateY(0)}
    .lgpd-banner p{margin:0;color:rgba(255,255,255,.92)}
    .lgpd-banner a{color:#F5C518;text-decoration:underline;text-underline-offset:2px}
    .lgpd-banner a:hover{color:#FFE9A0}
    .lgpd-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
    .lgpd-btn{
      appearance:none;border:0;cursor:pointer;
      padding:10px 18px;border-radius:999px;
      font-family:'DM Sans',system-ui,sans-serif;font-weight:700;
      font-size:12px;letter-spacing:.18em;text-transform:uppercase;
      transition:transform .2s ease, background .2s ease, color .2s ease;
    }
    .lgpd-btn:focus-visible{outline:2px solid #F5C518;outline-offset:2px}
    .lgpd-btn.primary{background:#F5C518;color:#3E1B4F}
    .lgpd-btn.primary:hover{transform:translateY(-1px);background:#FFE9A0}
    .lgpd-btn.secondary{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4)}
    .lgpd-btn.secondary:hover{border-color:#F5C518;color:#F5C518}
    @media (max-width:480px){
      .lgpd-banner{left:8px;right:8px;bottom:8px;padding:16px;font-size:13px}
      .lgpd-actions{justify-content:stretch}
      .lgpd-btn{flex:1;text-align:center}
    }
    @media (prefers-reduced-motion: reduce){
      .lgpd-banner{transition:none}
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement('div');
  banner.className = 'lgpd-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', 'Aviso de privacidade');
  banner.innerHTML = `
    <p><strong>🍦 A gente respeita sua privacidade.</strong> Usamos apenas o essencial para o site funcionar bem. Nada de rastreio de terceiros — leia a <a href="privacidade.html">Política de Privacidade</a>.</p>
    <div class="lgpd-actions">
      <button class="lgpd-btn secondary" data-act="reject" type="button">Recusar</button>
      <button class="lgpd-btn primary" data-act="accept" type="button">Entendi</button>
    </div>
  `;
  document.body.appendChild(banner);

  requestAnimationFrame(() => banner.classList.add('show'));

  function decide(choice){
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() })); } catch {}
    banner.classList.remove('show');
    setTimeout(() => banner.remove(), 500);
  }

  banner.querySelector('[data-act=accept]').addEventListener('click', () => decide('accept'));
  banner.querySelector('[data-act=reject]').addEventListener('click', () => decide('reject'));
})();
