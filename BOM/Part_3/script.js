'use strict';
function init() {
  const linkOpen = document.getElementById('link-open');
  linkOpen.addEventListener('click', (e) => {
    const url = document.getElementById('url').value;
    window.open(
      url,                  // URL to be opened
      'Window title',       // Title of the window
      'width=600,' +        // Width of the window
      'height=400,' +       // Height of the window
      'resizable=yes,' +    // Size changes possible
      'scrollbars=yes,' +   // Scrollbar activated
      'status=1'            // Status bar activated
    );
  });
}
document.addEventListener('DOMContentLoaded', init)

