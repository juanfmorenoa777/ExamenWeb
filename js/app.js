const form = document.querySelector('#contact-form');
const peopleList = document.querySelector('#people-list');
const feedback = document.querySelector('#form-feedback');
const navLinks = document.querySelectorAll('.nav-link');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const name = String(formData.get('nombre')).trim();
  const email = String(formData.get('correo')).trim();

  if (!name || !email) return;

  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const emailCell = document.createElement('td');

  nameCell.textContent = name;
  emailCell.textContent = email;
  row.append(nameCell, emailCell);
  peopleList.append(row);

  feedback.textContent = `Se agregó el registro de ${name}.`;
  form.reset();
});

form.addEventListener('reset', () => {
  feedback.textContent = '';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});
