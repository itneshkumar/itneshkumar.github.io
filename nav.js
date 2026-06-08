// Shared navigation injected into every page
function normalizePathname(pathname) {
    const raw = decodeURI(pathname || '');
    let path = raw.replace(/^\/+|\/+$/g, '');
    if (!path) return 'index';

    const segments = path.split('/');
    path = segments[segments.length - 1] || '';
    if (!path || path === 'index' || path === 'index.html') return 'index';
    if (path.endsWith('.html')) path = path.slice(0, -5);
    return path || 'index';
}

function getActivePage() {
    const page = normalizePathname(window.location.pathname);
    const validPages = new Set(['index', 'work', 'projects', 'publications', 'education', 'leadership', 'hobbies', 'contact', 'skills']);
    return validPages.has(page) ? page : 'index';
}

function renderNav(activePage) {
    const tabs = [
        { id: 'work', icon: '💼', label: 'Work', href: '/work/' },
        { id: 'projects', icon: '🚀', label: 'Projects', href: '/projects/' },
        { id: 'skills', icon: '🧠', label: 'Skills', href: '/skills/' },
        { id: 'publications', icon: '📄', label: 'Publications', href: '/publications/' },
        { id: 'education', icon: '🎓', label: 'Education', href: '/education/' },
        { id: 'leadership', icon: '🤝', label: 'Leadership', href: '/leadership/' },
        { id: 'hobbies', icon: '🎯', label: 'Hobbies', href: '/hobbies/' },
        { id: 'contact', icon: '✉️', label: 'Contact', href: '/contact/' },
    ];

    const tabsHTML = tabs.map(t => `
            <a class="nav-link${activePage === t.id ? ' active' : ''}" href="${t.href}">
                <span>${t.icon}</span> ${t.label}
            </a>`).join('');

    return `
    <nav class="nav-card flex flex-col md:flex-row justify-between items-center px-8 py-4 gap-4">
        <div class="flex items-center space-x-3 w-full md:w-auto">
            <a href="/" class="flex items-center space-x-2" aria-label="Home">
                <span class="text-sm">👤</span>
                <span class="text-sm font-mono text-slate-400 uppercase tracking-[0.2em]">IK</span>
            </a>
        </div>
        <div class="flex overflow-x-auto no-scrollbar w-full md:w-auto justify-start md:justify-end space-x-6 text-sm font-medium pb-2 md:pb-0">${tabsHTML}
        </div>
    </nav>`;
}

function injectNav() {
    let root = document.getElementById('nav-root');
    if (!root) {
        root = document.createElement('div');
        root.id = 'nav-root';
        const header = document.querySelector('header');
        if (header) {
            header.prepend(root);
        } else {
            document.body.insertBefore(root, document.body.firstChild);
        }
    }
    root.innerHTML = renderNav(getActivePage());
}

function renderFooter() {
    return `
    <footer class="border-t border-slate-800 py-10 px-8 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-70 hover:opacity-100 transition-opacity gap-8">
        <span class="text-xs font-mono text-slate-500 uppercase tracking-widest">© 2026 ITNESH KUMAR</span>
        <div class="flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest">
            <a href="https://wa.me/918010112762" target="_blank" class="flex items-center gap-2 hover:text-teal-400 transition-colors group">
                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.661l.303.18c1.5.891 3.229 1.362 5.004 1.363 5.425 0 9.837-4.411 9.84-9.839 0-2.635-1.027-5.112-2.892-6.977s-4.341-2.891-6.976-2.891c-5.424 0-9.835 4.411-9.838 9.839 0 1.884.534 3.719 1.545 5.305l.197.308-1.003 3.666 3.76-.987zm11.367-7.405c-.31-.156-1.834-.905-2.112-1.006-.279-.101-.482-.152-.684.152-.202.304-.785 1.006-.962 1.215-.177.209-.355.236-.665.08-.31-.156-1.309-.482-2.492-1.54-.92-.821-1.541-1.835-1.721-2.144-.18-.309-.019-.476.136-.631.14-.14.31-.362.466-.543.155-.181.207-.309.31-.514.104-.206.052-.387-.026-.543-.078-.156-.684-1.648-.938-2.259-.247-.595-.499-.514-.684-.523-.177-.009-.38-.011-.583-.011s-.532.076-.811.381c-.279.304-1.064 1.041-1.064 2.539 0 1.498 1.089 2.943 1.241 3.146.152.203 2.144 3.274 5.19 4.587.725.311 1.29.497 1.73.637.728.231 1.39.198 1.913.12.583-.087 1.834-.75 2.088-1.474.253-.724.253-1.344.177-1.474-.076-.131-.279-.209-.589-.365z"/>
                </svg>
                <span>WhatsApp</span>
            </a>
            <a href="tel:+918010112762" class="flex items-center gap-2 hover:text-teal-400 transition-colors group">
                <span class="text-lg group-hover:scale-110 transition-transform">📞</span>
                <span>Call</span>
            </a>
            <a href="https://linkedin.com/in/itneshkumar" target="_blank" class="flex items-center gap-2 hover:text-teal-400 transition-colors group">
                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
            </a>
            <a href="https://x.com/kumaritnesh" target="_blank" class="flex items-center gap-2 hover:text-teal-400 transition-colors group">
                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter</span>
            </a>
            <a href="mailto:itneshkumar@gmail.com" class="flex items-center gap-2 hover:text-teal-400 transition-colors group">
                <span class="text-lg group-hover:scale-110 transition-transform">📧</span>
                <span>Email</span>
            </a>
        </div>
    </footer>`;
}

function injectFooter() {
    let root = document.getElementById('footer-root');
    if (!root) {
        root = document.createElement('div');
        root.id = 'footer-root';
        document.body.appendChild(root);
    }
    root.innerHTML = renderFooter();
}

function initFilterButtons() {
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const cards = Array.from(document.querySelectorAll('.proj-card'));
    if (!buttons.length || !cards.length) return;

    const applyFilter = (filter) => {
        cards.forEach(card => {
            const visible = filter === 'all' || card.dataset.domain === filter;
            card.style.display = visible ? '' : 'none';
        });
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            buttons.forEach(b => b.classList.toggle('active', b === btn));
            applyFilter(btn.dataset.filter || 'all');
        });
    });

    const initial = buttons.find(btn => btn.classList.contains('active')) || buttons[0];
    applyFilter(initial.dataset.filter || 'all');
}

function initPage() {
    injectNav();
    injectFooter();
    initFilterButtons();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}