const lectures = [
  { id: 1, title: "Kirish. Kompyuter tarmoqlari tarixi va klassifikatsiyasi", file: "materials/Maruza/1+.docx", slide: "materials/Maruza prizintatsiya/1- Maruza.pptx" },
  { id: 2, title: "OSI va TCP/IP modellari. Tarmoq protokollari asoslari", file: "materials/Maruza/2+.docx", slide: "materials/Maruza prizintatsiya/2- Maruza.pptx" },
  { id: 3, title: "Fizik va kanal qatlamlari. Ethernet texnologiyalari", file: "materials/Maruza/3+.doc" },
  { id: 4, title: "IP manzillash. IPv4 va IPv6 protokollari", file: "materials/Maruza/4+.docx", slide: "materials/Maruza prizintatsiya/4- Maruza.pptx" },
  { id: 5, title: "Yo'naltiruvchilar va marshrutlash algoritmlari", file: "materials/Maruza/5+.doc", slide: "materials/Maruza prizintatsiya/5- Maruza.pptx" },
  { id: 6, title: "Transport qatlami. TCP va UDP protokollari", file: "materials/Maruza/6+.docx", slide: "materials/Maruza prizintatsiya/6- Maruza.pptx" },
  { id: 7, title: "Socket dasturlash asoslari. API va interfeys", file: "materials/Maruza/7+.docx", slide: "materials/Maruza prizintatsiya/7- Maruza.pptx" },
  { id: 8, title: "TCP Socket asosida klient-server ilovasi yaratish", file: "materials/Maruza/8+.docx", slide: "materials/Maruza prizintatsiya/8- Maruza.pptx" },
  { id: 9, title: "UDP Socket va datagram asosida aloqa", file: "materials/Maruza/9+.docx", slide: "materials/Maruza prizintatsiya/9- Maruza.pptx" },
  { id: 10, title: "Ko'p oqimli (Multithreading) tarmoq dasturlash", file: "materials/Maruza/10+.docx", slide: "materials/Maruza prizintatsiya/10- Maruza.pptx" },
  { id: 11, title: "Asinxron I/O va Non-blocking socket dasturlash", file: "materials/Maruza/11+.docx", slide: "materials/Maruza prizintatsiya/11- Maruza.pptx" },
  { id: 12, title: "HTTP va HTTPS protokollari. Web dasturlash asoslari", file: "materials/Maruza/12+.docx", slide: "materials/Maruza prizintatsiya/12- Maruza.pptx" },
  { id: 13, title: "DNS, DHCP va boshqa yuqori qatlam protokollari", file: "materials/Maruza/13+.docx", slide: "materials/Maruza prizintatsiya/13- Maruza.pptx" },
  { id: 14, title: "Tarmoq xavfsizligi: shifrlash va autentifikatsiya", file: "materials/Maruza/14+.docx", slide: "materials/Maruza prizintatsiya/14- Maruza.pptx" },
  { id: 15, title: "Zamonaviy tarmoq arxitekturalari: bulut va IoT", file: "materials/Maruza/15+.docx", slide: "materials/Maruza prizintatsiya/15- Maruza.pptx" },
];

const practicals = [
  { id: 1, title: "Wireshark yordamida tarmoq paketlarini tahlil qilish", file: "materials/Amaliy ish/TDA 1+.docx" },
  { id: 2, title: "IP manzillash va quyi tarmoqlarni (subnet) hisoblash", file: "materials/Amaliy ish/TDA 2+.docx" },
  { id: 3, title: "Python'da oddiy TCP server va klient yaratish", file: "materials/Amaliy ish/TDA 3+.docx" },
  { id: 4, title: "UDP socket orqali ma'lumot almashish dasturi", file: "materials/Amaliy ish/TDA 4+.docx" },
  { id: 5, title: "Ko'p foydalanuvchili chat ilovasi (TCP + Thread)", file: "materials/Amaliy ish/TDA 5+.docx" },
  { id: 6, title: "HTTP so'rovlarini tahlil qilish va Python Requests", file: "materials/Amaliy ish/TDA 6+.docx" },
  { id: 7, title: "Oddiy veb-server yaratish (Python socket / Flask)", file: "materials/Amaliy ish/TDA 7+.docx" },
  { id: 8, title: "FTP va SMTP protokollarini simulatsiya qilish", file: "materials/Amaliy ish/TDA 8+.docx" },
  { id: 9, title: "Asinxron tarmoq dasturlash: asyncio va aiohttp", file: "materials/Amaliy ish/TDA 9+.docx" },
  { id: 10, title: "SSL/TLS qo'llab-quvvatlashni dasturga qo'shish", file: "materials/Amaliy ish/TDA 10+.docx" },
  { id: 11, title: "Kurs loyihasi: Fayllarni tarmoq orqali uzatish tizimi", file: "materials/Amaliy ish/TDA 11.docx" },
];

// Real YouTube video links – Networking & Socket Programming playlist
const videos = [
  {
    id: 1,
    title: "1-dars: Kompyuter tarmoqlari va modellariga kirish",
    youtubeId: "hJXSZjxXspg",
  },
  {
    id: 2,
    title: "2-dars: OSI modeli va har bir qatlam vazifalari",
    youtubeId: "aI3WYx5CuVg",
  },
  {
    id: 3,
    title: "3-dars: TCP/IP protokollari steki",
    youtubeId: "1uHKCQVPka8",
  },
  {
    id: 4,
    title: "4-dars: IP manzillash va subnet mask",
    youtubeId: "CrqY5-qUZag",
  },
  {
    id: 5,
    title: "5-dars: TCP va UDP – farqlari va qo'llanilishi",
    youtubeId: "HqCuZYJ-huc",
  },
  {
    id: 6,
    title: "6-dars: Socket dasturlashga kirish",
    youtubeId: "bd_5vPzmzUg",
  },
  {
    id: 7,
    title: "7-dars: Python'da birinchi TCP socket",
    youtubeId: "aUePGsIJrD4",
  },
  {
    id: 8,
    title: "8-dars: Klient-server arxitekturasi amalda",
    youtubeId: "g1U3GlDKhSw",
  },
  {
    id: 9,
    title: "9-dars: UDP socket bilan ishlash",
    youtubeId: "8bgtkOwUEsY",
  },
  {
    id: 10,
    title: "10-dars: Ko'p oqimli server (Multi-threaded)",
    youtubeId: "uwuL6rroHRo",
  },
  {
    id: 11,
    title: "11-dars: HTTP protokoli va veb-server",
    youtubeId: "PLfO6tOn-NA",
  },
  {
    id: 12,
    title: "12-dars: DNS qanday ishlaydi?",
    youtubeId: "eQX4W07vpBI",
  },
  {
    id: 13,
    title: "13-dars: Asinxron dasturlash – asyncio",
    youtubeId: "5ZiBaChpzM8",
  },
  {
    id: 14,
    title: "14-dars: Tarmoq xavfsizligi asoslari",
    youtubeId: "E_P2BD2OXFQ",
  },
  {
    id: 15,
    title: "15-dars: SSL/TLS – xavfsiz aloqa protokollari",
    youtubeId: "T4Df5_cojAs",
  },
];

// ===== RENDER FUNCTIONS =====

function renderLectures() {
  const list = document.getElementById('lectureList');
  list.innerHTML = lectures.map(lec => `
    <div class="material-item" id="lecture-${lec.id}">
      <div class="material-num">${String(lec.id).padStart(2, '0')}</div>
      <div class="material-info">
        <div class="material-title">${lec.title}</div>
        <div class="material-meta">Ma'ruza · DOCX fayl${lec.slide ? ' · PPTX fayl' : ''}</div>
      </div>
      <div class="material-actions">
        <button onclick="openMaterialModal('lecture', ${lec.id})" class="btn-read" title="${lec.title}ni ko'rish">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M1 12h14M12 5l7 7-7 7"/>
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          O'qish
        </button>
        <a href="${lec.file}" download class="btn-download-small" title="Matnni yuklab olish">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
        ${lec.slide ? `
        <a href="${lec.slide}" download class="btn-download-small" title="Slaytni yuklab olish" style="background:var(--blue-500); color:white; border-color:var(--blue-500);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderPracticals() {
  const list = document.getElementById('practicalList');
  list.innerHTML = practicals.map(pr => `
    <div class="material-item" id="practical-${pr.id}">
      <div class="material-num" style="background:linear-gradient(135deg,#1E3A8A,#2563EB);">${String(pr.id).padStart(2, '0')}</div>
      <div class="material-info">
        <div class="material-title">${pr.title}</div>
        <div class="material-meta">Amaliy ish · DOCX fayl</div>
      </div>
      <div class="material-actions">
        <button onclick="openMaterialModal('practical', ${pr.id})" class="btn-read" title="${pr.title}ni ko'rish">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Ko'rish
        </button>
        <a href="${pr.file}" download class="btn-download-small" title="Vazifani yuklab olish">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

function renderVideos() {
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = videos.map(v => `
    <div class="video-card" id="video-${v.id}" onclick="openVideoModal(${v.id})">
      <div class="video-thumbnail">
        <img
          src="https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg"
          alt="${v.title}"
          loading="lazy"
          onerror="this.src='https://img.youtube.com/vi/${v.youtubeId}/default.jpg'"
        />
        <div class="video-play-btn">
          <div class="play-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
        <div class="video-num-badge">${v.id}-dars</div>
      </div>
      <div class="video-card-body">
        <div class="video-card-title">${v.title}</div>
        <button class="btn-watch" onclick="openVideoModal(${v.id})" id="watch-btn-${v.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          Ko'rish
        </button>
      </div>
    </div>
  `).join('');
}

// ===== PAGE NAVIGATION =====

let currentPage = 'home';
let currentTab = 'theory';
let activeVideoId = null;

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  currentPage = pageId;

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeNav = document.getElementById('nav-' + pageId);
  if (activeNav) activeNav.classList.add('active');

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Stop any open video
  closeVideoModal();
}

// ===== TABS =====

function switchTab(tabId) {
  currentTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  const btn = document.getElementById('tab-' + tabId);
  const content = document.getElementById('content-' + tabId);
  if (btn) btn.classList.add('active');
  if (content) content.classList.add('active');
}

// ===== VIDEO MODAL =====

function openVideoModal(videoId) {
  const video = videos.find(v => v.id === videoId);
  if (!video) return;

  activeVideoId = videoId;
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  const title = document.getElementById('modalTitle');

  title.textContent = video.title;
  frame.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  modal.classList.remove('open');
  frame.src = '';
  document.body.style.overflow = '';
  activeVideoId = null;
}

function closeModal(event) {
  if (event.target === document.getElementById('videoModal')) {
    closeVideoModal();
  }
}

// ===== MATERIAL MODAL =====

function openMaterialModal(type, id) {
  const item = type === 'lecture'
    ? lectures.find(l => l.id === id)
    : practicals.find(p => p.id === id);

  if (!item) return;

  const modal = document.getElementById('materialModal');
  const title = document.getElementById('mTitle');
  const heading = document.getElementById('mHeading');
  const desc = document.getElementById('mDesc');
  const icon = document.getElementById('mIcon');
  const dlBtn = document.getElementById('mDownloadBtn');

  title.textContent = type === 'lecture' ? 'Ma\'ruza ma\'lumoti' : 'Amaliy ish vazifasi';
  heading.textContent = item.title;
  icon.textContent = type === 'lecture' ? '📚' : '🛠️';
  dlBtn.href = item.file;

  if (type === 'lecture') {
    desc.textContent = "Ushbu ma'ruza darslikning nazariy qismi bo'lib, unda mavzu bo'yicha batafsil tushunchalar berilgan. To'liq o'qish uchun faylni yuklab oling.";
  } else {
    desc.textContent = "Ushbu amaliy ish nazariy bilimlarni mustahkamlash uchun mo'ljallangan topshiriqlarni o'z ichiga oladi. Vazifani bajarish uchun faylni ko'zdan kechiring.";
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function hideMaterialModal() {
  const modal = document.getElementById('materialModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeMaterialModal(event) {
  if (event.target === document.getElementById('materialModal')) {
    hideMaterialModal();
  }
}

// ===== HAMBURGER MENU =====

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// ===== NAVBAR SCROLL =====

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ===== KEYBOARD ESC TO CLOSE MODAL =====

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

// ===== HAMBURGER ANIMATION CSS =====

const hamburgerStyle = document.createElement('style');
hamburgerStyle.textContent = `
  .hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
`;
document.head.appendChild(hamburgerStyle);

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
  renderLectures();
  renderPracticals();
  renderVideos();
  showPage('home');

  // Handle browser back/forward (hash routing)
  const hashMap = {
    '#home': 'home',
    '#materials': 'materials',
    '#videos': 'videos',
    '#about': 'about',
  };

  function handleHash() {
    const h = window.location.hash;
    if (hashMap[h]) showPage(hashMap[h]);
  }
  window.addEventListener('hashchange', handleHash);
});
