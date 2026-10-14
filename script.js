// Small interactions: gallery filtering, project previews, mobile navigation, and footer year.
const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach((project) => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
    });
  });
});

const modal = document.querySelector('.project-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-caption h3');
const modalDescription = document.querySelector('.modal-caption p');

document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = button.dataset.title;
    modalDescription.textContent = button.dataset.description;
    modal.showModal();
  });
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector('.navigation');
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
  button.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.navigation a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.menu-toggle').textContent = '☰';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
