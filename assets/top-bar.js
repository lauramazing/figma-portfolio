// Shared top bar — edit this file to update the header across the entire portfolio
(function () {
  const NAME  = 'Laura Marshall';
  const ROLE  = 'Design Systems Leader';
  const RIGHT = 'Portfolio · Curated with AI';

  const html = `<div class="top-bar-inner">
    <div class="top-bar-left">
      <span class="top-bar-name">${NAME}</span>
      <span class="top-bar-sep">·</span>
      <span class="top-bar-role">${ROLE}</span>
    </div>
    <div class="top-bar-right">${RIGHT}</div>
  </div>`;

  document.addEventListener('DOMContentLoaded', function () {
    const bar = document.querySelector('.top-bar');
    if (bar) bar.innerHTML = html;
  });
})();
