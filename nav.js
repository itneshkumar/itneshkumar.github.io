// Shared navigation — injected into every page
function renderNav(activePage) {
  const tabs = [
    { id: 'index',        icon: '👤', label: 'About',        href: 'index' },
    { id: 'work',         icon: '💼', label: 'Work',          href: 'work' },
    { id: 'projects',     icon: '🚀', label: 'Projects',      href: 'projects' },
    { id: 'publications', icon: '📄', label: 'Publications',  href: 'publications' },
    { id: 'education',    icon: '🎓', label: 'Education',     href: 'education' },
    { id: 'hobbies',      icon: '🎯', label: 'Hobbies',       href: 'hobbies' },
    { id: 'contact',      icon: '✉️', label: 'Contact',       href: 'contact' },
  ];

  const tabsHTML = tabs.map(t => `
    <a class="nav-tab${activePage === t.id ? ' active' : ''}" href="${t.href}">
      <span class="nav-tab-icon">${t.icon}</span>
      <span>${t.label}</span>
    </a>
  `).join('');

  return `
  <nav class="topnav">
    <a class="nav-brand" href="index">
      <img class="nav-avatar" src="new.png" alt="IK"
           onerror="this.src='https://ui-avatars.com/api/?name=Itnesh+Kumar&background=e8f2ec&color=1a5c3a&size=80'">
      <div>
        <span class="nav-brand-name">Itnesh Kumar</span>
        <span class="nav-brand-role">Lead Data Scientist</span>
      </div>
    </a>
    <div class="nav-tabs">${tabsHTML}</div>
    <div class="nav-right">
      <div class="nav-avail"><span class="avail-dot"></span>Available Q3 2026</div>
      <a class="nav-cta" href="contact">Hire me →</a>
    </div>
  </nav>`;
}

// Footer
function renderFooter() {
  return `
  <footer class="site-footer">
    <span class="footer-name">Itnesh Kumar</span>
    <div class="footer-links">
      <a class="footer-link" href="mailto:itneshkumar@gmail.com">Email</a>
      <a class="footer-link" href="https://linkedin.com/in/itneshkumar" target="_blank">LinkedIn</a>
      <a class="footer-link" href="https://x.com/kumaritnesh" target="_blank">X</a>
      <a class="footer-link" href="https://medium.com/@itneshkumar" target="_blank">Medium</a>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('nav-root');
  if (navEl) navEl.innerHTML = renderNav(navEl.dataset.page);
  // Inject footer
  const footerEl = document.getElementById('footer-root');
  if (footerEl) footerEl.innerHTML = renderFooter();
});
