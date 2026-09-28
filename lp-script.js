/* ==========================================================================
   LikeAssist LP — Script (Scroll reveal + Topbar shadow)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  /* ── Topbar scroll shadow ── */
  const topbar = document.getElementById('topbar');
  if (topbar) {
    window.addEventListener('scroll', () => {
      topbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }
});

