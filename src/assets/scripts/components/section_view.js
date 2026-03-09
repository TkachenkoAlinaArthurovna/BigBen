if (document.querySelector('.index_page')) {
  const target = document.getElementById('loadIframeButton');
  if (target) {
    target.addEventListener('click', function() {
      var iframe = document.getElementById('lazyIframe');
      iframe.src = iframe.getAttribute('data-src');
      iframe.style.display = 'block';

      this.style.display = 'none';
      document.querySelector('.iframe-container').classList.add('active-iframe');
    });
  }
}
