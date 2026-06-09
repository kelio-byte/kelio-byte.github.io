const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const newsToggle = document.querySelector('#toggle-news');
const extraNews = document.querySelector('.news-extra');

newsToggle.addEventListener('click', () => {
  const isExpanded = newsToggle.getAttribute('aria-expanded') === 'true';
  newsToggle.setAttribute('aria-expanded', String(!isExpanded));
  extraNews.hidden = isExpanded;
  newsToggle.textContent = isExpanded ? '显示更多' : '收起';
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...navigation.querySelectorAll('a')];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const currentId = entry.target.id === 'top' ? 'about' : entry.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.hash === `#${currentId}`);
    });
  });
}, { rootMargin: '-20% 0px -70%', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
