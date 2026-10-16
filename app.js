'use strict';
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('selected', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) visible++;
    });
    document.querySelector('#filter-status').textContent = `${visible} project concepts shown.`;
  });
});
document.querySelector('#enquiry').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  const result = document.querySelector('#form-result');
  result.hidden = false;
  if (!name || message.length < 10) {
    result.textContent = 'Please enter a name and at least 10 characters describing the project.';
    return;
  }
  result.textContent = `Enquiry preview ready for ${name}. Topic: ${message}. Demo only — nothing was sent or stored.`;
});
