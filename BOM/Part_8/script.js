'use strict';
function init() {
  const linkLoad = document.getElementById('link-load');
  linkLoad.addEventListener('click', (e) => {
    const url = document.getElementById('url').value;
    window.location.assign(url);
  });
}
document.addEventListener('DOMContentLoaded', init)
