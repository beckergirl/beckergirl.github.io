const root = document.documentElement;
const header = document.getElementById("siteHeader");
const hero = document.getElementById("hero");
const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");

/* HERO */

function updateHeroProgress() {
  if (!hero || !header) return;

  const heroHeight = hero.offsetHeight - window.innerHeight;
  const raw = window.scrollY / Math.max(heroHeight, 1);
  const progress = Math.min(Math.max(raw, 0), 1);

  root.style.setProperty("--hero-progress", progress.toFixed(4));
  header.classList.toggle("compact", progress > 0.72);
}

function toggleMenu() {
  if (!menuPanel || !menuButton) return;

  const isOpen = menuPanel.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuPanel.setAttribute("aria-hidden", String(!isOpen));
}

function closeMenu() {
  if (!menuPanel || !menuButton) return;

  menuPanel.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuPanel.setAttribute("aria-hidden", "true");
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

window.addEventListener(
  "scroll",
  () => {
    updateHeroProgress();
    if (window.scrollY > 20) closeMenu();
  },
  { passive: true }
);

window.addEventListener("resize", updateHeroProgress);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", closeMenu);
});

updateHeroProgress();

/* ABOUT */

const aboutToggle = document.getElementById("aboutToggle");
const aboutMore = document.getElementById("aboutMore");

if (aboutToggle && aboutMore) {
  aboutToggle.addEventListener("click", () => {
    const isOpen = aboutMore.classList.toggle("is-open");
    aboutToggle.setAttribute("aria-expanded", String(isOpen));
    aboutToggle.textContent = isOpen ? "Close" : "Read more";
  });
}

/* PROJECTS OVERLAY */

const galleries = {
  web: {
    title: "Digital & E-commerce",
    items: [
      {
        number: "01",
        title: "Deassín",
        text: "Ecommerce.<br>Desarrollada con Shopify.<br>www.deassin.com",
        image: "media/portada_deassin_logo.jpg",
        alt: "Deassín",
        link: "https://deassin.com/"
      },
      {
        number: "02",
        title: "Amaya García",
        text: "Ecommerce.<br>Desarrollada con Shopify.<br>www.amayagarcia.com",
        image: "media/portada_amayagarcia.jpg",
        alt: "Amaya García",
        link: "https://amayagarcia.com/"
      },
      {
        number: "03",
        title: "Becker & Co. Handmade Jewelry",
        text: "Ecommerce.<br>Desarrollada con Bigcartel.<br>www.beckerandco.es",
        image: "media/boheart_1.jpg",
        alt: "Becker & Co.",
        link: "https://beckerandco.es/"
      }
    
    ]
  },

  portfolio: {
    title: "Brand & Portfolio Websites",
    items: [
      {
        number: "01",
        title: "Alma Viva Lab",
        text: "Brand Identity · Website Design & Development.<br>www.almavivalab.com",
        image: "media/PORTFOLIO_AVL portada 2.jpg",
        alt: "Alma Viva Lab",
        link: "https://almavivalab.com/"
      },
      {
        number: "02",
        title: "Javier de Benito",
        text: "Identidad de marca · Diseño y Desarrollo Web.<br>www.javierdebenito.art",
        image: "media/portada behance jdb.jpg",
        alt: "Javier de Benito",
        link: "https://javierdebenito.art/"
      },
      {
        number: "03",
        title: "Rocio Guerrero",
        text: "Identidad de marca · Diseño y Desarrollo Web.<br>www.rocioguerrero.art",
        image: "media/Rocio_taller.jpeg",
        alt: "Rocio Guerrero",
        link: "https://rocioguerrero.art/"
      },
      {
        number: "04",
        title: "Violeta Siesto",
        text: "Identidad de marca · Diseño y Desarrollo Web.<br>www.violetasiesto.com",
        image: "media/violetasiesto_porfolio_portada.jpg",
        alt: "Violeta Siesto",
        link: "https://violetasiesto.com/"
      },
        {
        number: "05",
        title: "La Heredera",
        text: "Identidad de marca · Diseño y Desarrollo Web..<br>www.laheredera.es",
        image: "media/portada_laheredera.jpg",
        alt: "La Heredera",
        link: "https://www.behance.net/gallery/217270997/La-Heredera"
      },
      {
        number: "06",
        title: "Álvaro Gomis",
        text: "Identidad de marca · Diseño y Desarrollo Web.<br>www.alvarogomis.com",
        image: "media/WEB_PORTADA_alvaroGomis.jpg",
        alt: "Álavaro Gomis",
        link: "https://alvarogomis.com/"
      },
      {
        number: "07",
        title: "CoQuality",
        text: "Identidad de marca (no el logotipo) · Diseño y Desarrollo Web.<br>www.coquality.org",
        image: "media/Mockup_Coquality.png",
        alt: "CoQuality",
        link: "https://coquality.org/"
      },
    ]
  },

  branding: {
    title: "Editorial & Graphic",
    items: [
      {
        number: "01",
        title: "Velvet",
        text: "Ficticio.",
        image: "media/iPad Pro 12.9_ - 3.jpg",
        alt: "Brand Project One",
        link: "#"
      },
      {
        number: "02",
        title: "Rita Souling Band",
        text: "Flyer.",
        image: "media/RSB_Flyer.jpg",
        alt: "Rita Soul¡ng Band",
        link: "https://www.behance.net/gallery/230633711/FLYER-RITA-SOULING-BAND"
      }
    ]
  },

  editorial: {
    title: "Art & Ilustration",
    items: [
      {
        number: "01",
        title: "Irene Becker",
        text: "Obra Pictórica.",
        image: "media/bikini de topos.jpg",
        alt: "Irene Becker",
        link: "https://irenebecker.es/"
      },
      {
        number: "02",
        title: "Collages X La Heredera",
        text: "Collages.",
        image: "media/collage complementos.jpg",
        alt: "Irene Becker x La Heredera",
        link: "https://www.behance.net/gallery/217270997/La-Heredera"
      }
    ]
  }
};

const galleryButtons = document.querySelectorAll(".open-gallery");
const projectsOverlay = document.getElementById("projectsOverlay");
const overlayClose = document.getElementById("overlayClose");
const overlayTitle = document.getElementById("overlayTitle");
const overlayGrid = document.getElementById("overlayGrid");

function renderGallery(type) {
  const gallery = galleries[type];
  if (!gallery || !overlayTitle || !overlayGrid) return;

  overlayTitle.textContent = gallery.title;

  overlayGrid.innerHTML = gallery.items
    .map(
      (item) => `
      <article class="project-card">
        <a href="${item.link}" target="_blank" rel="noreferrer">
          <img src="${item.image}" alt="${item.alt}">
          <span>${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </a>
      </article>
    `
    )
    .join("");
}

function openGallery(type) {
  if (!projectsOverlay) return;
  renderGallery(type);
  projectsOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  if (!projectsOverlay) return;
  projectsOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openGallery(button.dataset.gallery);
  });
});

if (overlayClose) {
  overlayClose.addEventListener("click", closeGallery);
}

if (projectsOverlay) {
  projectsOverlay.addEventListener("click", (e) => {
    if (e.target === projectsOverlay) {
      closeGallery();
    }
  });
}

/* LEGAL OVERLAY */

const legalOverlay = document.getElementById("legalOverlay");
const legalClose = document.getElementById("legalClose");
const legalTitle = document.getElementById("legalTitle");
const legalBody = document.getElementById("legalBody");
const legalLinks = document.querySelectorAll("[data-legal]");

function closeLegalOverlay() {
  if (!legalOverlay) return;

  legalOverlay.classList.remove("open");
  legalOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

legalContactLink?.addEventListener("click", (e) => {
  e.preventDefault();
  closeLegalOverlay();

  contactSection?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const legalContent = {
  advice: {
    title: "Aviso Legal",
    body: `
      <p>Este sitio web y sus contenidos se proporcionan únicamente con fines informativos generales.</p>
      <p>Todos los textos, imágenes, diseños y materiales visuales mostrados en este sitio son propiedad de Irene Becker Studio, salvo que se indique lo contrario.</p>
      <p>Queda prohibida cualquier reproducción, distribución o transformación del contenido sin el consentimiento previo por escrito.</p>
    `
  },
  privacy: {
    title: "Política de Privacidad",
    body: `
      <p>Irene Becker Studio se compromete a proteger su privacidad.</p>
      <p>Cualquier dato personal enviado a través de este sitio web se utilizará únicamente para responder a su consulta o para prestar el servicio solicitado.</p>
      <p>La información personal no será compartida con terceros salvo cuando sea necesario por obligación legal.</p>
    `
  },
  cookies: {
    title: "Política de Cookies",
    body: `
      <p>Este sitio web puede utilizar cookies u otras tecnologías similares para mejorar la experiencia de navegación y analizar el tráfico del sitio.</p>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo y que ayudan a que los sitios web funcionen correctamente y recuerden sus preferencias.</p>
      <p>Puede configurar su navegador para rechazar o eliminar las cookies en cualquier momento.</p>
    `
  }
};

function openLegal(type) {
  const content = legalContent[type];
  if (!content || !legalOverlay || !legalTitle || !legalBody) return;

  legalTitle.textContent = content.title;
  legalBody.innerHTML = content.body;
  legalOverlay.classList.add("open");
  legalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLegal() {
  if (!legalOverlay) return;

  legalOverlay.classList.remove("open");
  legalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

legalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    openLegal(link.dataset.legal);
  });
});

if (legalClose) {
  legalClose.addEventListener("click", closeLegal);
}

if (legalOverlay) {
  legalOverlay.addEventListener("click", (e) => {
    if (e.target === legalOverlay) {
      closeLegal();
    }
  });
}

/* COOKIE CONSENT */

const cookieConsent = document.getElementById("cookieConsent");
const acceptCookies = document.getElementById("acceptCookies");
const viewPrivacyPolicy = document.getElementById("viewPrivacyPolicy");

function showCookieConsent() {
  if (!cookieConsent) return;
  cookieConsent.classList.add("show");
  cookieConsent.setAttribute("aria-hidden", "false");
}

function hideCookieConsent() {
  if (!cookieConsent) return;
  cookieConsent.classList.remove("show");
  cookieConsent.setAttribute("aria-hidden", "true");
}

if (cookieConsent) {
  const cookiesAccepted = localStorage.getItem("cookies-accepted");
  if (!cookiesAccepted) {
    setTimeout(showCookieConsent, 500);
  }
}

if (acceptCookies) {
  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookies-accepted", "true");
    hideCookieConsent();
  });
}

if (viewPrivacyPolicy) {
  viewPrivacyPolicy.addEventListener("click", () => {
    hideCookieConsent();
    openLegal("privacy");
  });
}

/* ESC */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeGallery();
    closeLegal();
  }
});