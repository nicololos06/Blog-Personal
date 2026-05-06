 /* cursor glow */
  const glow = document.getElementById('glow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  /* skill bars on scroll */
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsBlock = document.querySelector('.skills-block');
  if (skillsBlock) skillObserver.observe(skillsBlock);

  /* general fade-up observer */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  /* formulario → whatsapp */
  document.getElementById('btn-wa').addEventListener('click', () => {
    const nombre = document.getElementById('f-nombre').value.trim();
    const tipo   = document.getElementById('f-tipo').value;
    const msg    = document.getElementById('f-msg').value.trim();

    if (!nombre) {
      document.getElementById('f-nombre').focus();
      document.getElementById('f-nombre').style.borderColor = '#e24b4a';
      setTimeout(() => document.getElementById('f-nombre').style.borderColor = '', 1500);
      return;
    }

    let texto = `Hola Nicolás! 👋 Te escribo desde tu sitio web.\n\n`;
    texto += `*Nombre:* ${nombre}\n`;
    if (tipo) texto += `*Servicio:* ${tipo}\n`;
    if (msg)  texto += `*Mensaje:* ${msg}\n`;
    texto += `\n¡Quedé esperando tu respuesta!`;

    const url = `https://wa.me/5491134214866?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
