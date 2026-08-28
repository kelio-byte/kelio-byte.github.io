const NAV_LINK_SELECTOR = '.nav-links a[href^="#"]';
const SECTION_SELECTOR = 'main > section[id], #research-interests';

const navLinks = [...document.querySelectorAll(NAV_LINK_SELECTOR)];
const observedSections = [...document.querySelectorAll(SECTION_SELECTOR)];

function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.hash === `#${sectionId}`;

    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function getSectionTop(section) {
  return section.getBoundingClientRect().top + window.scrollY;
}

function updateActiveSection() {
  if (!observedSections.length || !navLinks.length) return;

  const markerPosition = window.scrollY + window.innerHeight * 0.25;
  let currentSection = observedSections[0];

  observedSections.forEach((section) => {
    if (getSectionTop(section) <= markerPosition) {
      currentSection = section;
    }
  });

  setActiveSection(currentSection.id);
}

let updateScheduled = false;

function scheduleActiveSectionUpdate() {
  if (updateScheduled) return;

  updateScheduled = true;
  window.requestAnimationFrame(() => {
    updateScheduled = false;
    updateActiveSection();
  });
}

window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
window.addEventListener('resize', scheduleActiveSectionUpdate);
window.addEventListener('load', updateActiveSection);
updateActiveSection();

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const copyButton = document.querySelector('[data-copy]');
const copyFeedback = document.querySelector('.copy-feedback');

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand('copy');
  } finally {
    textArea.remove();
  }
}

if (copyButton && copyFeedback) {
  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy;

    if (!value) return;

    try {
      const copied = await copyText(value);
      copyFeedback.textContent = copied
        ? `WeChat ID copied: ${value}`
        : `WeChat ID: ${value}`;
    } catch {
      copyFeedback.textContent = `WeChat ID: ${value}`;
    }
  });
}
