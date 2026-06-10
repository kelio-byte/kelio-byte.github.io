const navLinks = [...document.querySelectorAll('.nav-links a')];
const observedSections = [
  ...document.querySelectorAll('main > section[id], #research-interests'),
];

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.hash === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-20% 0px -70%', threshold: 0 });

  observedSections.forEach((section) => sectionObserver.observe(section));
}

document.querySelector('#year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('[data-copy]');
const copyFeedback = document.querySelector('.copy-feedback');

copyButton.addEventListener('click', async () => {
  const value = copyButton.dataset.copy;

  try {
    await navigator.clipboard.writeText(value);
    copyFeedback.textContent = `WeChat ID copied: ${value}`;
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();

    const copied = document.execCommand('copy');
    textArea.remove();
    copyFeedback.textContent = copied
      ? `WeChat ID copied: ${value}`
      : `WeChat ID: ${value}`;
  }
});
