document.getElementById('loadIframeButton').addEventListener('click', function() {
  // Заменяем URL iframe на реальный
  var iframe = document.getElementById('lazyIframe');
  iframe.src = 'https://v3.vrnet.io/?lscene=ua/riel/bigben/ext';
  iframe.style.display = 'block';

  // Скрываем кнопку после загрузки iframe
  this.style.display = 'none';
  document.querySelector('.iframe-container').classList.add('active-iframe');
});
