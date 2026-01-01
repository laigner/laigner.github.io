(() => {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const LS_KEY = 'site-theme';

  function setButton(t){
    if(!btn) return;
    const isDark = t === 'dark';
    btn.textContent = isDark ? '🌙' : '☀️';
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  function applyTheme(t, persist = true){
    root.setAttribute('data-theme', t);
    // small transition hint
    root.classList.add('color-transition');
    window.setTimeout(()=> root.classList.remove('color-transition'), 400);
    setButton(t);
    if(persist){ try{ localStorage.setItem(LS_KEY, t); }catch(e){} }
  }

  function init(){
    let saved = null;
    try{ saved = localStorage.getItem(LS_KEY); }catch(e){}
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDark = mq ? mq.matches : false;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'), false);

    // update when system preference changes (unless user persisted a choice)
    if(mq){ mq.addEventListener('change', e => {
      if(!localStorage.getItem(LS_KEY)) applyTheme(e.matches ? 'dark' : 'light', false);
    })}

    if(btn){
      btn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark', true);
      });
      btn.addEventListener('keyup', (e)=>{ if(e.key === 'Enter' || e.key === ' ') btn.click(); })
    }
  }

  init();
})();
