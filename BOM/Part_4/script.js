'use strict';
function init() {
  let windowReference;
  const linkOpen = document.getElementById('link-open');
  const linkClose = document.getElementById('link-close');
  linkOpen.addEventListener('click', (e) => {
    const url = document.getElementById('url').value;
    windowReference = window.open(
      url,
      'Window title',
      'width=600,height=400,resizable,scrollbars=yes,status=1'
    );
  });
  linkClose.addEventListener('click', (e) => {
    windowReference.close();
  });
}
document.addEventListener('DOMContentLoaded', init)